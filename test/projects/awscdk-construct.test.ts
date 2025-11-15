import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { AwsCdkConstructLibraryProject } from "../../src/projects";

describe("AwsCdkConstructLibraryProject", () => {
    it("applies default configuration", () => {
        const project = new AwsCdkConstructLibraryProject({
            name: "test-cdk-construct",
            defaultReleaseBranch: "main",
            author: "Niko Virtala",
            authorAddress: "niko.virtala@hey.com",
            repositoryUrl: "https://github.com/test/test.git",
            cdkVersion: "2.223.0",
        });

        const snapshot = synthSnapshot(project);

        expect(snapshot["package.json"]).toMatchObject({
            name: "test-cdk-construct",
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
        const project = new AwsCdkConstructLibraryProject({
            name: "custom-cdk-construct",
            defaultReleaseBranch: "main",
            author: "Custom Author",
            authorAddress: "custom@example.com",
            repositoryUrl: "https://github.com/test/test.git",
            cdkVersion: "2.200.0",
            minNodeVersion: "20.0.0",
            tsconfig: {
                compilerOptions: {
                    strictNullChecks: false,
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
                strictNullChecks: false,
                strict: true,
            },
        });

        expect(snapshot["mise.toml"]).toContain('node = "20.0.0"');
    });
});
