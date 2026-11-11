import type { IConstruct } from "constructs";
import { Component } from "projen/lib/component";
import { NodeProject } from "projen/lib/javascript";
import { TaskShell } from "projen/lib/task-shell";
import { Colima } from "./colima";
import { Homebrew } from "./homebrew";

/**
 * Options for AwsEmulator component.
 */
export interface AwsEmulatorOptions {
    /**
     * How to run AWS Emulator: `"native"` runs the `aws-emulator` binary on the host,
     * `"container"` runs it in a Docker container (the route for macOS and Windows).
     *
     * @default "native"
     */
    readonly mode?: string;

    /**
     * Path or name of the AWS Emulator binary (native mode only).
     * @default "aws-emulator"
     */
    readonly command?: string;

    /**
     * Container image to run (container mode only, required in container mode).
     *
     * AWS Emulator does not publish a prebuilt image, so build one from the Dockerfile in the
     * user guide and pass its reference here, e.g. `"aws-emulator:local"`.
     *
     * Must be a valid Docker image reference (`name` or `name:tag`).
     *
     * @default - none
     * @see https://docs.aws.amazon.com/emulator/latest/userguide/getting-started-docker.html
     */
    readonly image?: string;

    /**
     * Name of the container (container mode only).
     * @default "aws-emulator"
     */
    readonly containerName?: string;

    /**
     * Address to bind to (`-b`). IPv4 addresses and host names only. A wildcard (`0.0.0.0`) is
     * probed and advertised as `127.0.0.1`. In container mode the emulator always binds to `0.0.0.0` inside
     * the container, and this is the host address the port is published on.
     *
     * @default "127.0.0.1"
     */
    readonly host?: string;

    /**
     * Port to listen on (`-p`).
     * @default 9297
     */
    readonly port?: number;

    /**
     * Whether the emulator validates SigV4 request signatures (`-a on|off`).
     * @default - the emulator default (on)
     */
    readonly authentication?: boolean;

    /**
     * Whether the emulator sends usage telemetry to AWS (`-t on|off`).
     *
     * Upstream telemetry is on by default. This component passes `off` unless you enable it,
     * to keep CI and local runs private.
     *
     * @default false
     */
    readonly telemetry?: boolean;

    /**
     * Shut the emulator down after this many idle seconds (`--idle-timeout`).
     * @default - the emulator default
     */
    readonly idleTimeoutSeconds?: number;

    /**
     * Port of the emulator data endpoint (`EMULATOR_DATA_PORT`).
     * @default - the emulator default
     */
    readonly dataPort?: number;

    /**
     * Path to an emulator `config.toml` (`EMULATOR_CONFIG`).
     * @default - `~/.aws/emulator/config.toml`
     */
    readonly configFile?: string;

    /**
     * Stack size in bytes for emulator threads (`EMULATOR_STACK_BYTES`).
     * @default - the emulator default
     */
    readonly stackBytes?: number;

    /**
     * Additional command line arguments passed to the emulator.
     * Each argument must consist of shell-safe characters only.
     *
     * @default []
     */
    readonly extraArgs?: string[];

    /**
     * Additional environment variables for the emulator process.
     * @default {}
     */
    readonly environment?: { [key: string]: string };

    /**
     * Name of the projen task that starts the emulator.
     * @default "aws-emulator"
     */
    readonly taskName?: string;

    /**
     * Start the emulator before the `test` task.
     * @default true
     */
    readonly addToTestTask?: boolean;

    /**
     * Wait until the emulator reports healthy (`/__admin/health`) after starting.
     * @default true
     */
    readonly waitForHealthy?: boolean;

    /**
     * Seconds to wait for the emulator to become healthy.
     * @default 30
     */
    readonly healthTimeoutSeconds?: number;

    /**
     * Set up Colima as the container runtime (container mode only).
     * @default true
     */
    readonly useColima?: boolean;

    /**
     * Homebrew package to install the emulator with. When unset, nothing is added to the
     * Brewfile, since AWS Emulator has no official Homebrew formula.
     *
     * @default - none
     */
    readonly homebrewPackage?: string;

    /**
     * Set `AWS_ENDPOINT_URL` on all project tasks so AWS SDKs and the CLI use the emulator.
     * Requires `caBundlePath`, because the emulator serves a self-signed certificate.
     * @default false
     */
    readonly configureEndpointEnv?: boolean;

    /**
     * Path to the emulator CA certificate. When set together with `configureEndpointEnv`,
     * `AWS_CA_BUNDLE` and `NODE_EXTRA_CA_CERTS` are set so clients trust its self-signed certificate.
     *
     * @default - none
     */
    readonly caBundlePath?: string;
}

const SAFE_TOKEN = /^[\w@%+=:,./-]+$/;
const IMAGE_REFERENCE = /^[\w][\w./-]*(:[\w][\w.-]{0,127})?$/;

function checkSafe(name: string, value: string): void {
    if (!SAFE_TOKEN.test(value)) {
        throw new Error(`AwsEmulator ${name} "${value}" is empty or contains characters that are not shell-safe`);
    }
}

function checkPort(name: string, value: number): void {
    if (!Number.isInteger(value) || value < 1 || value > 65535) {
        throw new Error(`AwsEmulator ${name} must be an integer between 1 and 65535, got ${value}`);
    }
}

function checkPositiveInt(name: string, value: number): void {
    if (!Number.isInteger(value) || value < 1) {
        throw new Error(`AwsEmulator ${name} must be a positive integer, got ${value}`);
    }
}

function quote(value: string): string {
    return `'${value.replace(/'/g, "'\\''")}'`;
}

/**
 * AwsEmulator component for projen projects.
 *
 * Adds AWS Emulator (https://github.com/aws/aws-emulator), the local emulator of the AWS APIs,
 * to your project. It serves HTTPS with a self-signed certificate on 127.0.0.1:9297 by default.
 * Every aspect of how it is installed, started and wired into the project is configurable.
 */
export class AwsEmulator extends Component {
    constructor(scope: IConstruct, options: AwsEmulatorOptions = {}) {
        super(scope);

        const project = NodeProject.of(this);
        if (!(project instanceof NodeProject)) {
            throw new Error("AwsEmulator component requires a NodeProject");
        }

        const mode = options.mode ?? "native";
        if (mode !== "native" && mode !== "container") {
            throw new Error(`AwsEmulator mode must be "native" or "container", got "${mode}"`);
        }
        const container = mode === "container";

        const command = options.command ?? "aws-emulator";
        checkSafe("command", command);
        const host = options.host ?? "127.0.0.1";
        checkSafe("host", host);
        if (host.includes(":")) {
            throw new Error(`AwsEmulator host "${host}" is not supported, IPv6 addresses cannot be used`);
        }
        /* Wildcard bind addresses are not connectable, so clients and probes use loopback */
        const clientHost = host === "0.0.0.0" ? "127.0.0.1" : host;
        const port = options.port ?? 9297;
        checkPort("port", port);
        const containerName = options.containerName ?? "aws-emulator";
        checkSafe("containerName", containerName);
        const taskName = options.taskName ?? "aws-emulator";
        checkSafe("taskName", taskName);
        const healthTimeout = options.healthTimeoutSeconds ?? 30;
        checkPositiveInt("healthTimeoutSeconds", healthTimeout);

        if (options.idleTimeoutSeconds !== undefined) {
            checkPositiveInt("idleTimeoutSeconds", options.idleTimeoutSeconds);
        }
        if (options.dataPort !== undefined) {
            checkPort("dataPort", options.dataPort);
        }
        if (options.stackBytes !== undefined) {
            checkPositiveInt("stackBytes", options.stackBytes);
        }
        if (options.configFile !== undefined) {
            checkSafe("configFile", options.configFile);
        }
        if (options.caBundlePath !== undefined) {
            checkSafe("caBundlePath", options.caBundlePath);
        }
        if (options.configureEndpointEnv && options.caBundlePath === undefined) {
            throw new Error(
                "AwsEmulator configureEndpointEnv requires caBundlePath, since the emulator uses a self-signed certificate",
            );
        }
        if (options.homebrewPackage !== undefined) {
            checkSafe("homebrewPackage", options.homebrewPackage);
        }
        for (const arg of options.extraArgs ?? []) {
            checkSafe("extra argument", arg);
        }
        for (const key of Object.keys(options.environment ?? {})) {
            if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(key)) {
                throw new Error(`AwsEmulator environment variable name "${key}" is invalid`);
            }
        }

        if (container) {
            if (options.image === undefined) {
                throw new Error('AwsEmulator mode "container" requires the image option');
            }
            /* The image ends up in a shell command, so only accept valid Docker image references */
            if (!IMAGE_REFERENCE.test(options.image)) {
                throw new Error(`AwsEmulator image "${options.image}" is not a valid Docker image reference`);
            }
        }

        if (options.homebrewPackage !== undefined) {
            const homebrew = Homebrew.of(project) ?? new Homebrew(project);
            homebrew.addPackage(options.homebrewPackage);
        }

        const useColima = container && (options.useColima ?? true);
        if (useColima) {
            new Colima(project);
        }

        /* Emulator environment */
        const env: Record<string, string> = {};
        if (options.dataPort !== undefined) env.EMULATOR_DATA_PORT = String(options.dataPort);
        if (options.configFile !== undefined) env.EMULATOR_CONFIG = options.configFile;
        if (options.stackBytes !== undefined) env.EMULATOR_STACK_BYTES = String(options.stackBytes);
        Object.assign(env, options.environment);

        /* Emulator arguments */
        const args = [`-b ${container ? "0.0.0.0" : host}`, `-p ${port}`, `-t ${options.telemetry ? "on" : "off"}`];
        if (options.authentication !== undefined) {
            args.push(`-a ${options.authentication ? "on" : "off"}`);
        }
        if (options.idleTimeoutSeconds !== undefined) {
            args.push(`--idle-timeout ${options.idleTimeoutSeconds}`);
        }
        args.push(...(options.extraArgs ?? []));

        const healthUrl = `https://${clientHost}:${port}/__admin/health`;
        const healthCheck = `curl -ksf ${healthUrl} >/dev/null 2>&1`;

        let start: string;
        if (container) {
            const envFlags = Object.entries(env).map(([k, v]) => `-e ${k}=${quote(v)}`);
            const run = [
                "docker run -d",
                `--name ${containerName}`,
                `-p ${host}:${port}:${port}`,
                ...envFlags,
                options.image as string,
                ...args,
            ].join(" ");
            start = `docker rm -f ${containerName} >/dev/null 2>&1; ${run} >/dev/null`;
        } else {
            const envPrefix = Object.entries(env).map(([k, v]) => `${k}=${quote(v)} `);
            start = `${envPrefix.join("")}nohup ${command} ${args.join(" ")} >.aws-emulator.log 2>&1 & echo $! >.aws-emulator.pid`;
            project.gitignore.exclude(".aws-emulator.log", ".aws-emulator.pid");
        }

        const emulatorTask = project.addTask(taskName, { description: "Start AWS Emulator" });
        const bash = { shell: TaskShell.bash() };

        const colimaTask = useColima ? project.tasks.tryFind("colima") : undefined;
        if (colimaTask) {
            emulatorTask.spawn(colimaTask);
        }

        /* Idempotent: skip if already healthy, otherwise start in the background */
        emulatorTask.exec(`${healthCheck} || { ${start}; }`, bash);
        if (options.waitForHealthy ?? true) {
            emulatorTask.exec(
                `for i in $(seq 1 ${healthTimeout}); do ${healthCheck} && exit 0; sleep 1; done; ` +
                    `echo "AWS Emulator did not become healthy at ${healthUrl}" >&2; exit 1`,
                bash,
            );
        }

        /* Stop task: removes the container or kills the recorded background process */
        const stopTask = project.addTask(`${taskName}:stop`, { description: "Stop AWS Emulator" });
        stopTask.exec(
            container
                ? `docker rm -f ${containerName} >/dev/null 2>&1 || true`
                : "if [ -f .aws-emulator.pid ]; then kill $(cat .aws-emulator.pid) 2>/dev/null || true; rm -f .aws-emulator.pid; fi",
            bash,
        );

        if (options.configureEndpointEnv) {
            project.tasks.addEnvironment("AWS_ENDPOINT_URL", `https://${clientHost}:${port}`);
            if (options.caBundlePath !== undefined) {
                project.tasks.addEnvironment("AWS_CA_BUNDLE", options.caBundlePath);
                project.tasks.addEnvironment("NODE_EXTRA_CA_CERTS", options.caBundlePath);
            }
        }

        if (options.addToTestTask ?? true) {
            project.tasks.tryFind("test")?.prependSpawn(emulatorTask);
        }
    }
}
