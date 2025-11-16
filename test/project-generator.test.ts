import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { Mise } from "../src/components/mise";
import { Vitest } from "../src/components/vitest";
import { ProjectGenerator } from "../src/project-generator";
import { ProjectType } from "../src/project-type";
import { TypeScriptProject } from "../src/projects";

describe("ProjectGenerator", () => {
    describe("component options auto-detection", () => {
        it("auto-detects VitestOptions from JSII manifest when optionsProperty is undefined", () => {
            /* Create a test project with Vitest component without explicit optionsProperty */
            const project = new TypeScriptProject({
                name: "test-project",
                defaultReleaseBranch: "main",
            });

            new ProjectGenerator(project, {
                name: "TestProject",
                projectType: ProjectType.TYPE_SCRIPT_PROJECT,
                filePath: "./src/test-project.generated.ts",
                components: [{ componentClass: Vitest }],
            });

            const snapshot = synthSnapshot(project);
            const optionsFile = snapshot["src/testprojectoptions.generated.ts"];

            /* Verify vitestOptions property is generated */
            expect(optionsFile).toContain("readonly vitestOptions?: VitestOptions");

            /* Verify VitestOptions import is added */
            expect(optionsFile).toContain("import type { VitestOptions } from");

            /* Verify vitest boolean flag is also present */
            expect(optionsFile).toContain("readonly vitest?: boolean");
        });

        it("generates options interface with component flags", () => {
            const project = new TypeScriptProject({
                name: "test-project",
                defaultReleaseBranch: "main",
            });

            new ProjectGenerator(project, {
                name: "TestProject",
                projectType: ProjectType.TYPE_SCRIPT_PROJECT,
                filePath: "./src/test-project.generated.ts",
                components: [{ componentClass: Mise }],
            });

            const snapshot = synthSnapshot(project);
            const optionsFile = snapshot["src/testprojectoptions.generated.ts"];

            /* Verify mise boolean flag is present */
            expect(optionsFile).toContain("readonly mise?: boolean");
            expect(optionsFile).toBeDefined();
        });

        it("respects explicit optionsProperty configuration", () => {
            const project = new TypeScriptProject({
                name: "test-project",
                defaultReleaseBranch: "main",
            });

            new ProjectGenerator(project, {
                name: "TestProject",
                projectType: ProjectType.TYPE_SCRIPT_PROJECT,
                filePath: "./src/test-project.generated.ts",
                components: [
                    {
                        componentClass: Vitest,
                        optionsProperty: {
                            name: "customVitestOptions",
                            type: "@nikovirtala/projen-constructs.VitestOptions",
                            docs: "Custom Vitest configuration",
                        },
                    },
                ],
            });

            const snapshot = synthSnapshot(project);
            const optionsFile = snapshot["src/testprojectoptions.generated.ts"];

            /* Verify custom property name is used */
            expect(optionsFile).toContain("readonly customVitestOptions?: VitestOptions");

            /* Verify custom documentation is used */
            expect(optionsFile).toContain("Custom Vitest configuration");
        });

        it("skips options property when optionsProperty is false", () => {
            const project = new TypeScriptProject({
                name: "test-project",
                defaultReleaseBranch: "main",
            });

            new ProjectGenerator(project, {
                name: "TestProject",
                projectType: ProjectType.TYPE_SCRIPT_PROJECT,
                filePath: "./src/test-project.generated.ts",
                components: [
                    {
                        componentClass: Vitest,
                        optionsProperty: false,
                    },
                ],
            });

            const snapshot = synthSnapshot(project);
            const optionsFile = snapshot["src/testprojectoptions.generated.ts"];

            /* Verify vitest boolean flag is present */
            expect(optionsFile).toContain("readonly vitest?: boolean");

            /* Verify vitestOptions is NOT added */
            expect(optionsFile).not.toContain("vitestOptions");
        });

        it("generates correct constructor structure", () => {
            const project = new TypeScriptProject({
                name: "test-project",
                defaultReleaseBranch: "main",
            });

            new ProjectGenerator(project, {
                name: "TestProject",
                projectType: ProjectType.TYPE_SCRIPT_PROJECT,
                filePath: "./src/test-project.generated.ts",
                components: [{ componentClass: Vitest }],
            });

            const snapshot = synthSnapshot(project);
            const classFile = snapshot["src/test-project.generated.ts"];

            /* Verify basic constructor structure */
            expect(classFile).toContain("component: Vitest");
            expect(classFile).toContain("enabled: vitest");
            expect(classFile).toContain("applyDefaults");
        });
    });
});
