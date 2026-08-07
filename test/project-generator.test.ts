import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { Mise } from "../src/components/mise";
import { Vitest } from "../src/components/vitest";
import { ProjectGenerator } from "../src/project-generator";
import { ProjectType } from "../src/project-type";
import { TypeScriptProject } from "../src/projects";

/**
 * Returns the documentation comment preceding a property declaration.
 */
function documentationOf(source: string, property: string): string {
    const declaration = source.indexOf(`readonly ${property}?:`);
    expect(declaration, `property ${property} not found`).toBeGreaterThan(-1);

    return source.slice(source.lastIndexOf("/**", declaration), declaration);
}

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

        it("documents pnpm as the packageManager default, without an initial value", () => {
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
            const docs = documentationOf(snapshot["src/testprojectoptions.generated.ts"], "packageManager");

            /* `projen new` renders `@pjnew` as an explicit argument in the .projenrc.ts it
             * generates, which would take precedence over the applied defaults. Projen
             * annotates this option with the $PACKAGE_MANAGER macro, resolving to whatever
             * package manager runs the command. */
            expect(docs).not.toContain("@pjnew");
            expect(docs).toContain("@default - pnpm");

            /* Annotations of other options are left untouched */
            expect(documentationOf(snapshot["src/testprojectoptions.generated.ts"], "projenrcTs")).toContain(
                "@pjnew true",
            );
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
