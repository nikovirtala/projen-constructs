import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { AwsCdkTypeScriptAppProject } from "../../src/projects";

describe("AwsCdkTypeScriptAppProject", () => {
    it("applies default configuration", () => {
        const project = new AwsCdkTypeScriptAppProject({
            name: "test-cdk-app",
            defaultReleaseBranch: "main",
            cdkVersion: "2.223.0",
        });

        const snapshot = synthSnapshot(project);

        expect(snapshot["package.json"]).toMatchObject({
            name: "test-cdk-app",
            type: "module",
        });

        expect(snapshot["tsconfig.dev.json"]).toMatchObject({
            compilerOptions: {
                module: "nodenext",
                target: "esnext",
                strict: true,
            },
        });

        expect(snapshot["cdk.json"]).toBeDefined();
        expect(snapshot["cdk.json"]).toMatchObject({
            app: "npx tsx src/main.ts",
        });
        expect(snapshot["mise.toml"]).toContain('node = "22.21.1"');
    });

    it("allows customization of options", () => {
        const project = new AwsCdkTypeScriptAppProject({
            name: "custom-cdk-app",
            defaultReleaseBranch: "main",
            cdkVersion: "2.200.0",
            minNodeVersion: "20.0.0",
            tsconfig: {
                compilerOptions: {
                    noImplicitAny: false,
                },
            },
        });

        const snapshot = synthSnapshot(project);

        expect(snapshot["tsconfig.dev.json"]).toMatchObject({
            compilerOptions: {
                noImplicitAny: false,
                strict: true,
            },
        });

        expect(snapshot["mise.toml"]).toContain('node = "20.0.0"');
    });

    it("accepts vitestOptions", () => {
        const project = new AwsCdkTypeScriptAppProject({
            name: "test-vitest",
            defaultReleaseBranch: "main",
            cdkVersion: "2.223.0",
            vitestOptions: {
                vitestVersion: "^4",
            },
        });

        const snapshot = synthSnapshot(project);

        expect(snapshot["package.json"].devDependencies).toHaveProperty("vitest");
        expect(snapshot["vitest.config.ts"]).toBeDefined();
    });
});
