import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { JsiiProject } from "../../src/projects";

describe("JsiiProject", () => {
    it("applies default configuration", () => {
        const project = new JsiiProject({
            name: "test-jsii-project",
            repositoryUrl: "https://github.com/test/test.git",
            author: "Niko Virtala",
            authorAddress: "niko.virtala@hey.com",
            defaultReleaseBranch: "main",
        });

        const snapshot = synthSnapshot(project);

        expect(snapshot["package.json"]).toMatchObject({
            name: "test-jsii-project",
            author: {
                name: "Niko Virtala",
                email: "niko.virtala@hey.com",
            },
            jsii: {
                outdir: "dist",
            },
        });

        expect(snapshot["tsconfig.dev.json"]).toMatchObject({
            compilerOptions: {
                module: "CommonJS",
                target: "ES2020",
                strict: true,
            },
        });

        expect(snapshot["mise.toml"]).toMatch(/node = "24\.\d+\.\d+"/);
        expect(snapshot[".npmignore"]).toContain("biome.jsonc");
        expect(snapshot[".npmignore"]).toContain("mise.toml");
        expect(snapshot[".npmignore"]).toContain("vitest.config.ts");
    });

    it("allows customization of options", () => {
        const project = new JsiiProject({
            name: "custom-jsii-project",
            defaultReleaseBranch: "main",
            repositoryUrl: "https://github.com/test/test.git",
            author: "Custom Author",
            authorAddress: "custom@example.com",
            jsiiVersion: "~5.8.0",
            tsconfig: {
                compilerOptions: {
                    noUnusedParameters: false,
                },
            },
        });

        const snapshot = synthSnapshot(project);

        expect(snapshot["package.json"]).toMatchObject({
            author: {
                name: "Custom Author",
                email: "custom@example.com",
            },
        });

        expect(snapshot["tsconfig.dev.json"]).toMatchObject({
            compilerOptions: {
                noUnusedParameters: false,
                strict: true,
            },
        });
    });

    it("accepts vitestOptions", () => {
        const project = new JsiiProject({
            name: "test-vitest",
            repositoryUrl: "https://github.com/test/test.git",
            author: "Niko Virtala",
            authorAddress: "niko.virtala@hey.com",
            defaultReleaseBranch: "main",
            vitestOptions: {
                vitestVersion: "^4",
            },
        });

        const snapshot = synthSnapshot(project);

        expect(snapshot["package.json"].devDependencies).toHaveProperty("vitest");
        expect(snapshot["vitest.config.ts"]).toBeDefined();
    });
});
