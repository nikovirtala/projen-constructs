import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
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

        expect(snapshot["tsconfig.json"]).toMatchObject({
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
        expect(snapshot["mise.toml"]).toMatch(/node = "24\.\d+\.\d+"/);
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

        expect(snapshot["tsconfig.json"]).toMatchObject({
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

    describe("sample test", () => {
        it("imports test and expect from vitest", () => {
            const project = new AwsCdkTypeScriptAppProject({
                name: "test-sample",
                defaultReleaseBranch: "main",
                cdkVersion: "2.223.0",
            });

            const sample = synthSnapshot(project)["test/main.test.ts"];

            expect(sample).toContain(
                "import { Template } from 'aws-cdk-lib/assertions';\nimport { expect, test } from 'vitest';\n",
            );
            expect(sample).toContain("test('Snapshot', () => {");
        });

        it("imports vitest only once when synthesized again", () => {
            const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "awscdk-app-sample-test-"));
            const create = () =>
                new AwsCdkTypeScriptAppProject({
                    name: "test-sample",
                    defaultReleaseBranch: "main",
                    cdkVersion: "2.223.0",
                    outdir,
                });

            try {
                const first = synthSnapshot(create())["test/main.test.ts"];
                const second = synthSnapshot(create())["test/main.test.ts"];

                expect(second).toBe(first);
                expect(second.match(/from 'vitest'/g)).toHaveLength(1);
            } finally {
                fs.rmSync(outdir, { recursive: true, force: true });
            }
        });

        it("is left as is when vitest globals are enabled", () => {
            const project = new AwsCdkTypeScriptAppProject({
                name: "test-sample",
                defaultReleaseBranch: "main",
                cdkVersion: "2.223.0",
                vitestOptions: { config: { globals: true } },
            });

            const sample = synthSnapshot(project)["test/main.test.ts"];

            expect(sample).toContain("test('Snapshot', () => {");
            expect(sample).not.toContain("vitest");
        });

        it("doesn't touch an existing test", () => {
            const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "awscdk-app-sample-test-"));
            const existing = "test('mine', () => {\n  expect(1).toBe(1);\n});\n";

            try {
                fs.mkdirSync(path.join(outdir, "test"));
                fs.writeFileSync(path.join(outdir, "test", "main.test.ts"), existing);

                const project = new AwsCdkTypeScriptAppProject({
                    name: "test-sample",
                    defaultReleaseBranch: "main",
                    cdkVersion: "2.223.0",
                    outdir,
                });

                expect(synthSnapshot(project)["test/main.test.ts"]).toBe(existing);
            } finally {
                fs.rmSync(outdir, { recursive: true, force: true });
            }
        });
    });
});
