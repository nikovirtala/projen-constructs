import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { typescript } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { Bundler, LambdaFunctionCodeBundler } from "../../src/components";

describe("LambdaFunctionCodeBundler", () => {
    let outdir: string;

    /**
     * Creates a project in a temporary directory that already contains the given source files,
     * since entrypoints are discovered from disk when the component is constructed.
     */
    function createProject(files: string[]): typescript.TypeScriptProject {
        for (const file of files) {
            const filePath = path.join(outdir, file);
            fs.mkdirSync(path.dirname(filePath), { recursive: true });
            fs.writeFileSync(filePath, "export const handler = async () => ({});\n");
        }

        const project = new typescript.TypeScriptProject({
            name: "test-project",
            defaultReleaseBranch: "main",
            outdir,
        });
        new Bundler(project);

        return project;
    }

    function bundleTaskNames(project: typescript.TypeScriptProject): string[] {
        return project.tasks.all.map((task) => task.name).filter((name) => name.startsWith("bundle:"));
    }

    beforeEach(() => {
        outdir = fs.mkdtempSync(path.join(os.tmpdir(), "lambda-function-code-bundler-"));
    });

    afterEach(() => {
        fs.rmSync(outdir, { recursive: true, force: true });
    });

    it("bundles every entrypoint with the given extension under srcdir", () => {
        const project = createProject([
            "src/handlers/hello.lambda.ts",
            "src/nested/deep/world.lambda.ts",
            "src/handlers/not-a-handler.ts",
            "test/outside.lambda.ts",
        ]);

        new LambdaFunctionCodeBundler(project, { srcdir: "src", extension: ".lambda.ts" });

        expect(bundleTaskNames(project).sort()).toEqual([
            "bundle:handlers/hello.lambda",
            "bundle:nested/deep/world.lambda",
        ]);

        const snapshot = synthSnapshot(project);
        expect(snapshot["src/handlers/hello-code.ts"]).toContain("export const HelloFunctionCode");
        expect(snapshot["src/nested/deep/world-code.ts"]).toContain("export const WorldFunctionCode");
        expect(snapshot["src/handlers/not-a-handler-code.ts"]).toBeUndefined();
    });

    it("discovers entrypoints with a custom extension", () => {
        const project = createProject(["src/handlers/hello.fn.ts", "src/handlers/other.lambda.ts"]);

        new LambdaFunctionCodeBundler(project, { srcdir: "src", extension: ".fn.ts" });

        expect(bundleTaskNames(project)).toEqual(["bundle:handlers/hello.fn"]);
    });

    it("creates no bundles when no entrypoint matches", () => {
        const project = createProject(["src/index.ts"]);

        new LambdaFunctionCodeBundler(project, { srcdir: "src", extension: ".lambda.ts" });

        expect(bundleTaskNames(project)).toEqual([]);
    });

    it("applies bundleOptions to every discovered entrypoint", () => {
        const project = createProject(["src/a.lambda.ts", "src/b.lambda.ts"]);

        new LambdaFunctionCodeBundler(project, {
            srcdir: "src",
            extension: ".lambda.ts",
            bundleOptions: {
                entrypoint: "src/ignored.lambda.ts",
                extension: ".lambda.ts",
                bundlingOptions: { externals: ["@aws-sdk/*"] },
            },
        });

        expect(bundleTaskNames(project).sort()).toEqual(["bundle:a.lambda", "bundle:b.lambda"]);

        for (const name of ["a", "b"]) {
            const task = project.tasks.tryFind(`bundle:${name}.lambda`);
            const command = task?.steps[0]?.exec;
            expect(command).toContain(`src/${name}.lambda.ts`);
            expect(command).toContain("--external:@aws-sdk/*");
        }
    });
});
