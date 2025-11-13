import { javascript } from "projen";
import { describe, expect, it } from "vitest";
import { Colima } from "../../src/components";

describe("Colima", () => {
    it("should add colima and docker to homebrew dependencies", () => {
        const project = new javascript.NodeProject({
            name: "test",
            defaultReleaseBranch: "main",
        });

        new Colima(project);

        expect(project.tasks.tryFind("homebrew:bundle")).toBeDefined();
    });

    it("should create colima task", () => {
        const project = new javascript.NodeProject({
            name: "test",
            defaultReleaseBranch: "main",
        });

        new Colima(project);

        const task = project.tasks.tryFind("colima");
        expect(task).toBeDefined();
        expect(task?.steps[0].exec).toContain("colima status");
    });
});
