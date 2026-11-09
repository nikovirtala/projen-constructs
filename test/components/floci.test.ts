import { javascript } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { Floci } from "../../src/components";

describe("Floci", () => {
    it("should add floci to homebrew dependencies", () => {
        const project = new javascript.NodeProject({
            name: "test",
            defaultReleaseBranch: "main",
        });

        new Floci(project);

        expect(project.tasks.tryFind("homebrew:bundle")).toBeDefined();
    });

    it("should tap and trust the floci formula in the Brewfile", () => {
        const project = new javascript.NodeProject({
            name: "test",
            defaultReleaseBranch: "main",
        });

        new Floci(project);

        const brewfile = synthSnapshot(project).Brewfile;
        expect(brewfile).toContain('tap "floci-io/floci"');
        expect(brewfile).toContain('brew "floci-io/floci/floci", trusted: true');
    });

    it("should create colima task", () => {
        const project = new javascript.NodeProject({
            name: "test",
            defaultReleaseBranch: "main",
        });

        new Floci(project);

        const task = project.tasks.tryFind("colima");
        expect(task).toBeDefined();
        expect(task?.steps[0].exec).toContain("colima status");
    });

    it("should create floci task with default options", () => {
        const project = new javascript.NodeProject({
            name: "test",
            defaultReleaseBranch: "main",
        });

        new Floci(project);

        const task = project.tasks.tryFind("floci");
        expect(task).toBeDefined();
        const execStep = task?.steps.find((s) => s.exec?.includes("floci status"));
        expect(execStep?.exec).toContain("floci status");
        expect(execStep?.exec).toContain("floci start --detach");
        expect(execStep?.exec).toContain("--port 4566");
        expect(execStep?.exec).not.toContain("--services");
        expect(execStep?.exec).not.toContain("--image");
    });

    it("should start with the given image", () => {
        const project = new javascript.NodeProject({
            name: "test",
            defaultReleaseBranch: "main",
        });

        new Floci(project, { image: "floci/floci:1.5.0" });

        const execStep = project.tasks.tryFind("floci")?.steps.find((s) => s.exec?.includes("floci status"));
        expect(execStep?.exec).toContain("--image floci/floci:1.5.0");
    });

    it.each(["1.5; rm -rf /", "", "-latest", "a b", "$(whoami)", "floci/floci:4.9; ls"])(
        "should reject invalid image %j",
        (image) => {
            const project = new javascript.NodeProject({
                name: "test",
                defaultReleaseBranch: "main",
            });

            expect(() => new Floci(project, { image })).toThrow("is not a valid Docker image reference");
        },
    );

    it("should create floci task with custom options", () => {
        const project = new javascript.NodeProject({
            name: "test",
            defaultReleaseBranch: "main",
        });

        new Floci(project, {
            port: 8080,
            services: ["s3", "lambda"],
        });

        const task = project.tasks.tryFind("floci");
        expect(task).toBeDefined();
        const execStep = task?.steps.find((s) => s.exec?.includes("floci status"));
        expect(execStep?.exec).toContain("--port 8080");
        expect(execStep?.exec).toContain("--services s3,lambda");
    });

    it("should add aws-cdk-local to devDeps", () => {
        const project = new javascript.NodeProject({
            name: "test",
            defaultReleaseBranch: "main",
        });

        new Floci(project);

        expect(project.deps.all.some((d) => d.name === "aws-cdk-local")).toBe(true);
    });

    it("should make test task depend on floci", () => {
        const project = new javascript.NodeProject({
            name: "test",
            defaultReleaseBranch: "main",
        });

        new Floci(project);

        const testTask = project.tasks.tryFind("test");
        expect(testTask?.steps.some((s) => s.spawn === "floci")).toBe(true);
    });

    it("should make floci depend on colima", () => {
        const project = new javascript.NodeProject({
            name: "test",
            defaultReleaseBranch: "main",
        });

        new Floci(project);

        const flociTask = project.tasks.tryFind("floci");
        expect(flociTask?.steps.some((s) => s.spawn === "colima")).toBe(true);
    });
});
