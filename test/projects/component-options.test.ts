import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { Environment } from "../../src/components/vitest";
import {
    AwsCdkConstructLibraryProject,
    AwsCdkTypeScriptAppProject,
    JsiiProject,
    TypeScriptProject,
} from "../../src/projects";

const publishable = {
    author: "Niko Virtala",
    authorAddress: "niko.virtala@hey.com",
    repositoryUrl: "https://github.com/test/test.git",
};

/**
 * Options for each component that change the synthesized output away from the component defaults,
 * so the assertions fail if an options property doesn't reach its component.
 */
const componentOptions = {
    homebrewOptions: { packages: ["jq"] },
    miseOptions: { nodeVersion: "22.1.0" },
    vitestOptions: { config: { environment: Environment.JSDOM } },
};

const projects = [
    {
        name: "TypeScriptProject",
        create: () => new TypeScriptProject({ name: "test", defaultReleaseBranch: "main", ...componentOptions }),
    },
    {
        name: "JsiiProject",
        create: () =>
            new JsiiProject({ name: "test", defaultReleaseBranch: "main", ...publishable, ...componentOptions }),
    },
    {
        name: "AwsCdkTypeScriptAppProject",
        create: () =>
            new AwsCdkTypeScriptAppProject({
                name: "test",
                defaultReleaseBranch: "main",
                cdkVersion: "2.223.0",
                ...componentOptions,
            }),
    },
    {
        name: "AwsCdkConstructLibraryProject",
        create: () =>
            new AwsCdkConstructLibraryProject({
                name: "test",
                defaultReleaseBranch: "main",
                cdkVersion: "2.223.0",
                ...publishable,
                ...componentOptions,
            }),
    },
];

describe.each(projects)("$name component options", ({ create }) => {
    const snapshot = synthSnapshot(create());

    it("passes homebrewOptions to Homebrew", () => {
        expect(snapshot.Brewfile).toContain('brew "jq"');
    });

    it("passes miseOptions to Mise", () => {
        expect(snapshot["mise.toml"]).toContain('node = "22.1.0"');
    });

    it("passes vitestOptions to Vitest", () => {
        expect(snapshot["vitest.config.ts"]).toContain('"environment": "jsdom"');
    });
});

describe("JsiiProject typeDocOptions", () => {
    it("passes typeDocOptions to TypeDoc", () => {
        const project = new JsiiProject({
            name: "test",
            defaultReleaseBranch: "main",
            ...publishable,
            typeDocOptions: { version: "^0.27" },
        });

        const snapshot = synthSnapshot(project);

        expect(snapshot["package.json"].devDependencies.typedoc).toBe("^0.27");
    });
});
