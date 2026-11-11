import { execFileSync } from "node:child_process";
import { javascript } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { AwsEmulator, type AwsEmulatorOptions } from "../../src/components";

function create(options?: AwsEmulatorOptions) {
    const project = new javascript.NodeProject({
        name: "test",
        defaultReleaseBranch: "main",
    });
    new AwsEmulator(project, options);
    return project;
}

function startExec(project: javascript.NodeProject, name = "aws-emulator"): string {
    return project.tasks.tryFind(name)?.steps.find((s) => s.exec?.includes("__admin/health"))?.exec ?? "";
}

describe("AwsEmulator", () => {
    it("should generate valid bash in both modes", () => {
        for (const options of [{}, { mode: "container", image: "a:b" }, { mode: "native", host: "0.0.0.0" }]) {
            const project = create(options);
            for (const task of ["aws-emulator", "aws-emulator:stop"]) {
                for (const step of project.tasks.tryFind(task)?.steps ?? []) {
                    if (step.exec) execFileSync("bash", ["-n", "-c", step.exec]);
                }
            }
        }
    });

    it("should add a stop task and gitignore the native log", () => {
        const snap = synthSnapshot(create());
        expect(snap[".gitignore"]).toContain(".aws-emulator.log");
        expect(snap[".gitignore"]).toContain(".aws-emulator.pid");
        expect(snap[".projen/tasks.json"].tasks["aws-emulator:stop"].steps[0].exec).toContain(".aws-emulator.pid");
    });

    it("should stop the container in container mode", () => {
        const exec = create({ mode: "container", image: "a:b" }).tasks.tryFind("aws-emulator:stop")?.steps[0].exec;
        expect(exec).toContain("docker rm -f aws-emulator");
    });

    it("should reject IPv6 hosts", () => {
        expect(() => create({ host: "::1" })).toThrow("IPv6");
    });

    it("should start natively with defaults", () => {
        const exec = startExec(create());
        expect(exec).toContain("curl -ksf https://127.0.0.1:9297/__admin/health");
        expect(exec).toContain("nohup aws-emulator -b 127.0.0.1 -p 9297 -t off");
        expect(exec).not.toContain(" -a ");
        expect(exec).not.toContain("--idle-timeout");
    });

    it("should wait for the emulator to become healthy", () => {
        const steps = create().tasks.tryFind("aws-emulator")?.steps ?? [];
        expect(steps.some((s) => s.exec?.includes("seq 1 30"))).toBe(true);
    });

    it("should skip waiting when waitForHealthy is false", () => {
        const steps = create({ waitForHealthy: false, healthTimeoutSeconds: 5 }).tasks.tryFind("aws-emulator")?.steps;
        expect(steps).toHaveLength(1);
    });

    it("should use a custom wait timeout", () => {
        const steps = create({ healthTimeoutSeconds: 5 }).tasks.tryFind("aws-emulator")?.steps ?? [];
        expect(steps.some((s) => s.exec?.includes("seq 1 5"))).toBe(true);
    });

    it("should apply every native option", () => {
        const exec = startExec(
            create({
                command: "/opt/bin/aws-emulator",
                host: "0.0.0.0",
                port: 8443,
                authentication: false,
                telemetry: true,
                idleTimeoutSeconds: 600,
                dataPort: 9300,
                configFile: "/etc/emulator.toml",
                stackBytes: 8388608,
                extraArgs: ["--verbose"],
                environment: { FOO: "it's" },
            }),
        );
        expect(exec).toContain("https://127.0.0.1:8443/__admin/health");
        expect(exec).toContain("EMULATOR_DATA_PORT='9300'");
        expect(exec).toContain("EMULATOR_CONFIG='/etc/emulator.toml'");
        expect(exec).toContain("EMULATOR_STACK_BYTES='8388608'");
        expect(exec).toContain("FOO='it'\\''s'");
        expect(exec).toContain("/opt/bin/aws-emulator -b 0.0.0.0 -p 8443 -t on -a off --idle-timeout 600 --verbose");
    });

    it("should enable authentication explicitly", () => {
        expect(startExec(create({ authentication: true }))).toContain("-a on");
    });

    it("should use a custom task name", () => {
        const project = create({ taskName: "emulator:start" });
        expect(project.tasks.tryFind("emulator:start")).toBeDefined();
        expect(project.tasks.tryFind("aws-emulator")).toBeUndefined();
        expect(project.tasks.tryFind("test")?.steps.some((s) => s.spawn === "emulator:start")).toBe(true);
    });

    it("should not add Homebrew or Colima in native mode by default", () => {
        const project = create();
        expect(project.tasks.tryFind("homebrew:bundle")).toBeUndefined();
        expect(project.tasks.tryFind("colima")).toBeUndefined();
    });

    it("should add the Homebrew package only when set", () => {
        const project = create({ homebrewPackage: "acme/tap/aws-emulator" });
        expect(project.tasks.tryFind("homebrew:bundle")).toBeDefined();
        expect(synthSnapshot(project).Brewfile).toContain('brew "acme/tap/aws-emulator"');
    });

    it("should make the test task depend on the emulator", () => {
        expect(
            create()
                .tasks.tryFind("test")
                ?.steps.some((s) => s.spawn === "aws-emulator"),
        ).toBe(true);
    });

    it("should not touch the test task when addToTestTask is false", () => {
        expect(
            create({ addToTestTask: false })
                .tasks.tryFind("test")
                ?.steps.some((s) => s.spawn === "aws-emulator"),
        ).toBe(false);
    });

    describe("container mode", () => {
        it("should run the image with Colima", () => {
            const project = create({
                mode: "container",
                image: "aws-emulator:local",
                containerName: "emu",
                port: 9000,
                telemetry: false,
                environment: { A: "b" },
            });
            const exec = startExec(project);
            expect(exec).toContain("docker rm -f emu");
            expect(exec).toContain("docker run -d --name emu -p 127.0.0.1:9000:9000 -e A='b' aws-emulator:local");
            expect(exec).toContain("-b 0.0.0.0 -p 9000 -t off");
            expect(project.tasks.tryFind("colima")).toBeDefined();
            expect(project.tasks.tryFind("aws-emulator")?.steps[0].spawn).toBe("colima");
        });

        it("should skip Colima when useColima is false", () => {
            const project = create({ mode: "container", image: "aws-emulator:local", useColima: false });
            expect(project.tasks.tryFind("colima")).toBeUndefined();
        });

        it("should require an image", () => {
            expect(() => create({ mode: "container" })).toThrow("requires the image option");
        });

        it.each(["1.5; rm -rf /", "", "-latest", "a b", "$(whoami)"])("should reject invalid image %j", (image) => {
            expect(() => create({ mode: "container", image })).toThrow("is not a valid Docker image reference");
        });
    });

    describe("endpoint environment", () => {
        it("should not set environment by default", () => {
            const env = synthSnapshot(create())[".projen/tasks.json"].env;
            expect(env?.AWS_ENDPOINT_URL).toBeUndefined();
        });

        it("should set the endpoint and CA trust variables", () => {
            const env = synthSnapshot(create({ configureEndpointEnv: true, caBundlePath: "certs/ca.pem", port: 9000 }))[
                ".projen/tasks.json"
            ].env;
            expect(env.AWS_ENDPOINT_URL).toBe("https://127.0.0.1:9000");
            expect(env.AWS_CA_BUNDLE).toBe("certs/ca.pem");
            expect(env.NODE_EXTRA_CA_CERTS).toBe("certs/ca.pem");
        });

        it("should require a CA path with the endpoint variable", () => {
            expect(() => create({ configureEndpointEnv: true })).toThrow("requires caBundlePath");
        });
    });

    describe("validation", () => {
        it.each([0, 65536, 1.5, -1])("should reject invalid port %j", (port) => {
            expect(() => create({ port })).toThrow("port must be an integer between 1 and 65535");
        });

        it("should reject invalid mode", () => {
            expect(() => create({ mode: "vm" })).toThrow('mode must be "native" or "container"');
        });

        it.each([0, -5, 1.5])("should reject invalid idle timeout %j", (idleTimeoutSeconds) => {
            expect(() => create({ idleTimeoutSeconds })).toThrow("idleTimeoutSeconds must be a positive integer");
        });

        it("should reject invalid data port", () => {
            expect(() => create({ dataPort: 70000 })).toThrow("dataPort");
        });

        it("should reject invalid stackBytes", () => {
            expect(() => create({ stackBytes: 0 })).toThrow("stackBytes");
        });

        it.each(["aws-emulator; ls", "$(id)", "a b", "", "`id`"])("should reject unsafe command %j", (command) => {
            expect(() => create({ command })).toThrow("not shell-safe");
        });

        it("should reject unsafe host, extra args, config file, CA path and package", () => {
            expect(() => create({ host: "a;b" })).toThrow("host");
            expect(() => create({ extraArgs: ["--x; ls"] })).toThrow("extra argument");
            expect(() => create({ configFile: "a b" })).toThrow("configFile");
            expect(() => create({ caBundlePath: "$(x)" })).toThrow("caBundlePath");
            expect(() => create({ homebrewPackage: "a;b" })).toThrow("homebrewPackage");
        });

        it("should reject invalid environment variable names", () => {
            expect(() => create({ environment: { "A B": "x" } })).toThrow("environment variable name");
        });
    });
});
