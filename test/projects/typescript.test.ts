import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { TypeScriptProject } from "../../src/projects";

describe("TypeScriptProject", () => {
    it("applies default configuration", () => {
        const project = new TypeScriptProject({
            name: "test-project",
            defaultReleaseBranch: "main",
        });

        const snapshot = synthSnapshot(project);

        expect(snapshot["package.json"]).toMatchObject({
            name: "test-project",
            type: "module",
        });

        expect(snapshot["tsconfig.json"]).toMatchObject({
            compilerOptions: {
                module: "nodenext",
                target: "esnext",
                noUnusedLocals: true,
                strict: true,
            },
        });

        expect(snapshot["biome.jsonc"]).toBeDefined();
        expect(snapshot["mise.toml"]).toMatch(/node = "24\.\d+\.\d+"/);
    });

    it("allows customization of options", () => {
        const project = new TypeScriptProject({
            name: "custom-project",
            defaultReleaseBranch: "main",
            minNodeVersion: "20.0.0",
            tsconfig: {
                compilerOptions: {
                    noUnusedLocals: false,
                },
            },
            biomeOptions: {
                biomeConfig: {
                    formatter: {
                        lineWidth: 100,
                    },
                },
            },
        });

        const snapshot = synthSnapshot(project);

        expect(snapshot["tsconfig.json"]).toMatchObject({
            compilerOptions: {
                noUnusedLocals: false,
                strict: true,
            },
        });

        expect(snapshot["mise.toml"]).toContain('node = "20.0.0"');
    });

    it("accepts vitestOptions", () => {
        const project = new TypeScriptProject({
            name: "test-vitest",
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
