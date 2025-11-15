import { awscdk, cdk, JsonPatch, javascript, typescript } from "projen";
import type { TypeScriptProjectOptions } from "projen/lib/typescript";
import { Mise } from "./components/mise";
import { Vitest, type VitestOptions } from "./components/vitest";
import { mergeAll } from "./utils";
import * as versions from "./versions.json";

export const defaults = {
    author: "Niko Virtala",
    authorAddress: "niko.virtala@hey.com",
    constructsVersion: "10.4.3",
    ...versions,
    get jsiiVersion() {
        return `~${this.typescriptVersion}`;
    },
} as const;

export function applyDefaultConfig(
    project:
        | awscdk.AwsCdkTypeScriptApp
        | awscdk.AwsCdkConstructLibrary
        | typescript.TypeScriptProject
        | cdk.JsiiProject,
    vitest: boolean = true,
    vitestOptions?: VitestOptions,
    mise: boolean = true,
) {
    const nodeVersion = project.minNodeVersion ?? defaults.minNodeVersion;

    if (
        (project instanceof awscdk.AwsCdkTypeScriptApp || project instanceof typescript.TypeScriptProject) &&
        !(project instanceof cdk.JsiiProject) &&
        !(project instanceof awscdk.AwsCdkConstructLibrary)
    ) {
        project.package.addField("type", "module");
    }

    project.deps.removeDependency("ts-node");
    project.addDevDeps("tsx");
    project.defaultTask?.reset();
    project.defaultTask?.exec(`tsx --tsconfig ${project.tsconfigDev.file.path} .projenrc.ts`);

    project.npmrc.addConfig("node-linker", "hoisted");

    project.vscode?.extensions.addRecommendations("biomejs.biome");
    project.vscode?.settings.addSettings({
        "editor.codeActionsOnSave": {
            "source.organizeImports.biome": "always",
        },
        "editor.defaultFormatter": "biomejs.biome",
        "editor.formatOnSave": true,
        "editor.tabSize": 4,
    });

    if (mise ?? true) {
        new Mise(project, { nodeVersion });
    }

    if (project instanceof cdk.JsiiProject || project instanceof awscdk.AwsCdkConstructLibrary) {
        // use node.js 24.x to get new enough npm to satisfy: trusted publishing requires npm CLI version 11.5.1 or later.
        project.github
            ?.tryFindWorkflow("release")
            ?.file?.patch(JsonPatch.replace("/jobs/release_npm/steps/0/with/node-version", "24.x"));

        project.package.addField("publishConfig", { access: "public" });
    }

    // remove once configured correctly to biome, mise and vitest components
    project.npmignore?.addPatterns("biome.jsonc", "mise.toml", "vitest.config.ts");

    if (vitest ?? true) {
        new Vitest(project, vitestOptions);
    }
}

export const projectDefaultOptions = {
    defaultReleaseBranch: "main",
    minNodeVersion: defaults.minNodeVersion,
    autoApproveOptions: {
        secret: "GITHUB_TOKEN",
        allowedUsernames: ["nikovirtala"],
    },
    dependabot: false,
    depsUpgradeOptions: {
        workflowOptions: {
            labels: ["auto-approve", "auto-merge"],
        },
    },
    github: true,
    mergify: true,
    autoMerge: true,
    jest: false,
    eslint: false,
    prettier: false,
    biome: true,
    biomeOptions: {
        biomeConfig: {
            formatter: {
                indentStyle: javascript.biome_config.IndentStyle.SPACE,
                indentWidth: 4,
                lineWidth: 120,
                useEditorconfig: false,
            },
        },
        formatter: true,
        linter: true,
    },
    packageManager: javascript.NodePackageManager.PNPM,
    pnpmVersion: "10",
    projenrcTs: true,
    typescriptVersion: defaults.typescriptVersion,
    tsconfig: {
        compilerOptions: {
            allowSyntheticDefaultImports: true,
            alwaysStrict: true,
            declaration: true,
            esModuleInterop: true,
            experimentalDecorators: true,
            inlineSourceMap: true,
            inlineSources: true,
            isolatedModules: true,
            noEmit: true,
            noEmitOnError: false,
            noFallthroughCasesInSwitch: true,
            noImplicitAny: true,
            noImplicitOverride: true,
            noImplicitReturns: true,
            noImplicitThis: true,
            noUnusedLocals: true,
            noUnusedParameters: true,
            resolveJsonModule: true,
            strict: true,
            strictNullChecks: true,
            strictPropertyInitialization: true,
            stripInternal: true,
        },
    },
} satisfies Partial<TypeScriptProjectOptions>;

const esModuleTsconfigOptions = {
    tsconfig: {
        compilerOptions: {
            allowImportingTsExtensions: true,
            lib: ["esnext"],
            module: "nodenext",
            moduleResolution: javascript.TypeScriptModuleResolution.NODE_NEXT,
            target: "esnext",
        },
    },
} satisfies Partial<TypeScriptProjectOptions>;

const publishableProjectDefaultOptions = {
    author: defaults.author,
    authorAddress: defaults.authorAddress,
    npmTrustedPublishing: true,
} satisfies Partial<cdk.JsiiProjectOptions>;

const cdkDefaultVersionOptions = {
    cdkVersion: defaults.cdkVersion,
    cdkVersionPinning: true,
    constructsVersion: defaults.constructsVersion,
} satisfies Partial<awscdk.AwsCdkConstructLibraryOptions>;

export const typescriptProjectDefaultOptions = mergeAll<typescript.TypeScriptProjectOptions>(
    projectDefaultOptions,
    esModuleTsconfigOptions,
);

export const jsiiProjectDefaultOptions = mergeAll<cdk.JsiiProjectOptions>(
    projectDefaultOptions,
    publishableProjectDefaultOptions,
    { jsiiVersion: defaults.jsiiVersion },
);

export const cdkAppDefaultOptions = mergeAll<awscdk.AwsCdkTypeScriptAppOptions>(
    projectDefaultOptions,
    esModuleTsconfigOptions,
    cdkDefaultVersionOptions,
);

export const cdkConstructDefaultOptions = mergeAll<awscdk.AwsCdkConstructLibraryOptions>(
    projectDefaultOptions,
    publishableProjectDefaultOptions,
    cdkDefaultVersionOptions,
);
