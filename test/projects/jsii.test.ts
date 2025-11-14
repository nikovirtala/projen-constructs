import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { JsiiProject } from "../../src/projects/jsii";

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

        expect(snapshot["mise.toml"]).toContain('node = "22.21.1"');
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
});
