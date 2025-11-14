import { Vitest } from "@nikovirtala/projen-vitest";
import { awscdk, cdk, JsonPatch, javascript, TextFile, typescript } from "projen";
import type { TypeScriptProjectOptions } from "projen/lib/typescript";
import { deepMerge } from "./utils";

export const DEFAULT_AUTHOR = "Niko Virtala";
export const DEFAULT_AUTHOR_ADDRESS = "niko.virtala@hey.com";
export const DEFAULT_CDK_VERSION = "2.223.0";
export const DEFAULT_NODE_VERSION = "22.21.1";
export const DEFAULT_TYPESCRIPT_VERSION = "5.9.3";
export const DEFAULT_JSII_VERSION = `~${DEFAULT_TYPESCRIPT_VERSION}`;

export function applyDefaultConfig(
    project:
        | awscdk.AwsCdkTypeScriptApp
        | awscdk.AwsCdkConstructLibrary
        | typescript.TypeScriptProject
        | cdk.JsiiProject,
) {
    const nodeVersion = project.minNodeVersion ?? DEFAULT_NODE_VERSION;

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

    new TextFile(project, "mise.toml", {
        committed: true,
        readonly: true,
        lines: ["[tools]", `node = "${nodeVersion}"`],
    });

    if (project instanceof cdk.JsiiProject || project instanceof awscdk.AwsCdkConstructLibrary) {
        // use node.js 24.x to get new enough npm to satisfy: trusted publishing requires npm CLI version 11.5.1 or later.
        project.github
            ?.tryFindWorkflow("release")
            ?.file?.patch(JsonPatch.replace("/jobs/release_npm/steps/0/with/node-version", "24.x"));

        project.package.addField("publishConfig", { access: "public" });
    }

    // remove once configured correctly to biome, mise and vitest components
    project.npmignore?.addPatterns("biome.jsonc", "mise.toml", "vitest.config.ts");

    new Vitest(project);
}

export const PROJECT_DEFAULT_OPTIONS = {
    defaultReleaseBranch: "main",
    minNodeVersion: DEFAULT_NODE_VERSION,
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
    typescriptVersion: DEFAULT_TYPESCRIPT_VERSION,
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

const ES_MODULE_TSCONFIG_OPTIONS = {
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

const PUBLISHABLE_PROJECT_DEFAULT_OPTIONS = {
    author: DEFAULT_AUTHOR,
    authorAddress: DEFAULT_AUTHOR_ADDRESS,
    npmTrustedPublishing: true,
};

export const TYPESCRIPT_PROJECT_DEFAULT_OPTIONS = deepMerge<typescript.TypeScriptProjectOptions>(
    PROJECT_DEFAULT_OPTIONS,
    ES_MODULE_TSCONFIG_OPTIONS,
) satisfies typescript.TypeScriptProjectOptions;

export const JSII_PROJECT_DEFAULT_OPTIONS = deepMerge<cdk.JsiiProjectOptions>(
    deepMerge<cdk.JsiiProjectOptions>(PROJECT_DEFAULT_OPTIONS, PUBLISHABLE_PROJECT_DEFAULT_OPTIONS),
    { jsiiVersion: DEFAULT_JSII_VERSION },
) satisfies cdk.JsiiProjectOptions;

export const CDK_APP_DEFAULT_OPTIONS = deepMerge<awscdk.AwsCdkTypeScriptAppOptions>(
    deepMerge<awscdk.AwsCdkTypeScriptAppOptions>(PROJECT_DEFAULT_OPTIONS, ES_MODULE_TSCONFIG_OPTIONS),
    { cdkVersion: DEFAULT_CDK_VERSION },
) satisfies awscdk.AwsCdkTypeScriptAppOptions;

export const CDK_CONSTRUCT_DEFAULT_OPTIONS = deepMerge<awscdk.AwsCdkConstructLibraryOptions>(
    deepMerge<awscdk.AwsCdkConstructLibraryOptions>(PROJECT_DEFAULT_OPTIONS, PUBLISHABLE_PROJECT_DEFAULT_OPTIONS),
    { cdkVersion: DEFAULT_CDK_VERSION },
) satisfies awscdk.AwsCdkConstructLibraryOptions;
