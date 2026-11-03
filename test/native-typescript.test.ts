import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { synthSnapshot } from "projen/lib/util/synth";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { supportsTypeStripping } from "../src/native-typescript";
import {
    AwsCdkConstructLibraryProject,
    AwsCdkTypeScriptAppProject,
    JsiiProject,
    TypeScriptProject,
} from "../src/projects";

const publishable = {
    author: "Niko Virtala",
    authorAddress: "niko.virtala@hey.com",
    repositoryUrl: "https://github.com/test/test.git",
};

describe("supportsTypeStripping", () => {
    it.each([
        [undefined, true],
        ["26.13.0", true],
        ["24.0.0", true],
        ["v24.11.1", true],
        ["23.6.0", true],
        ["23.5.0", false],
        ["22.18.0", true],
        ["22.17.1", false],
        ["v20.17.0", false],
        ["18", false],
    ])("%s → %s", (version, expected) => {
        expect(supportsTypeStripping(version)).toBe(expected);
    });
});

describe("ES module project types", () => {
    const projects = [
        {
            name: "TypeScriptProject",
            create: (minNodeVersion?: string) =>
                new TypeScriptProject({ name: "test", defaultReleaseBranch: "main", minNodeVersion }),
        },
        {
            name: "AwsCdkTypeScriptAppProject",
            create: (minNodeVersion?: string) =>
                new AwsCdkTypeScriptAppProject({
                    name: "test",
                    defaultReleaseBranch: "main",
                    cdkVersion: "2.223.0",
                    minNodeVersion,
                }),
        },
    ];

    describe.each(projects)("$name", ({ create }) => {
        it("runs .projenrc.ts with Node.js and doesn't depend on tsx", () => {
            const snapshot = synthSnapshot(create());

            expect(snapshot[".projen/tasks.json"].tasks.default.steps).toEqual([
                { exec: "node .projenrc.ts" },
                { spawn: "install:homebrew" },
            ]);
            expect(snapshot["package.json"].devDependencies).not.toHaveProperty("tsx");
            expect(snapshot["package.json"].devDependencies).not.toHaveProperty("ts-node");
        });

        it("only allows erasable syntax and explicit type-only imports", () => {
            const snapshot = synthSnapshot(create());

            expect(snapshot["tsconfig.json"].compilerOptions).toMatchObject({
                erasableSyntaxOnly: true,
                verbatimModuleSyntax: true,
            });
        });

        it("falls back to tsx when the minimum Node.js version has no type stripping", () => {
            const snapshot = synthSnapshot(create("20.17.0"));

            expect(snapshot[".projen/tasks.json"].tasks.default.steps[0]).toEqual({
                exec: "tsx --tsconfig test/tsconfig.json .projenrc.ts",
            });
            expect(snapshot["package.json"].devDependencies).toHaveProperty("tsx");
        });
    });

    it("runs the CDK app with Node.js", () => {
        const snapshot = synthSnapshot(projects[1].create());

        expect(snapshot["cdk.json"].app).toBe("node src/main.ts");
    });

    it("runs the CDK app with tsx when the minimum Node.js version has no type stripping", () => {
        const snapshot = synthSnapshot(projects[1].create("20.17.0"));

        expect(snapshot["cdk.json"].app).toBe("npx tsx src/main.ts");
    });
});

describe("jsii project types", () => {
    const projects = [
        {
            name: "JsiiProject",
            create: () => new JsiiProject({ name: "test", defaultReleaseBranch: "main", ...publishable }),
        },
        {
            name: "AwsCdkConstructLibraryProject",
            create: () =>
                new AwsCdkConstructLibraryProject({
                    name: "test",
                    defaultReleaseBranch: "main",
                    cdkVersion: "2.223.0",
                    ...publishable,
                }),
        },
    ];

    describe.each(projects)("$name", ({ create }) => {
        it("keeps running .projenrc.ts with tsx, since jsii compiles to CommonJS", () => {
            const snapshot = synthSnapshot(create());

            expect(snapshot[".projen/tasks.json"].tasks.default.steps[0]).toEqual({
                exec: "tsx --tsconfig test/tsconfig.json .projenrc.ts",
            });
            expect(snapshot["package.json"].devDependencies).toHaveProperty("tsx");
            expect(snapshot["tsconfig.json"].compilerOptions).not.toHaveProperty("erasableSyntaxOnly");
            expect(snapshot["tsconfig.json"].compilerOptions).not.toHaveProperty("verbatimModuleSyntax");
        });
    });
});

describe("AWS CDK app sample code", () => {
    let outdir: string;

    beforeEach(() => {
        outdir = fs.mkdtempSync(path.join(os.tmpdir(), "native-typescript-"));
    });

    afterEach(() => {
        fs.rmSync(outdir, { recursive: true, force: true });
    });

    const create = () =>
        new AwsCdkTypeScriptAppProject({ name: "test", defaultReleaseBranch: "main", cdkVersion: "2.223.0", outdir });

    it("imports StackProps as a type", () => {
        const main = synthSnapshot(create())["src/main.ts"];

        expect(main).toContain("import { App, Stack, type StackProps } from 'aws-cdk-lib';\n");
    });

    it("is unchanged when synthesized again", () => {
        const first = synthSnapshot(create())["src/main.ts"];
        const second = synthSnapshot(create())["src/main.ts"];

        expect(second).toBe(first);
    });

    it("doesn't touch an existing entrypoint", () => {
        const existing = "import { App, Stack, StackProps } from 'aws-cdk-lib';\n\nnew App();\n";
        fs.mkdirSync(path.join(outdir, "src"));
        fs.writeFileSync(path.join(outdir, "src", "main.ts"), existing);

        expect(synthSnapshot(create())["src/main.ts"]).toBe(existing);
    });
});
