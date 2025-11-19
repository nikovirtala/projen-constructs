import { awscdk, type Component, cdk, javascript, typescript } from "projen";
import type { TypeScriptProjectOptions } from "projen/lib/typescript";
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

interface ComponentConfig {
    component: new (project: never, options?: never) => Component;
    enabled?: boolean;
    options?: unknown;
}

function configureProject(
    project:
        | awscdk.AwsCdkTypeScriptApp
        | awscdk.AwsCdkConstructLibrary
        | typescript.TypeScriptProject
        | cdk.JsiiProject,
) {
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

    if (project instanceof awscdk.AwsCdkTypeScriptApp) {
        project.cdkConfig.json.addOverride("app", `npx tsx ${project.srcdir}/${project.appEntrypoint}`);
    }

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

    if (project instanceof cdk.JsiiProject || project instanceof awscdk.AwsCdkConstructLibrary) {
        project.package.addField("publishConfig", { access: "public" });
    }

    // remove once configured correctly to biome, mise and vitest components
    project.npmignore?.addPatterns("biome.jsonc", "mise.toml", "vitest.config.ts");
}

function injectComponents(
    project:
        | awscdk.AwsCdkTypeScriptApp
        | awscdk.AwsCdkConstructLibrary
        | typescript.TypeScriptProject
        | cdk.JsiiProject,
    components: ComponentConfig[],
) {
    for (const { component, enabled, options } of components) {
        if (enabled ?? true) {
            new component(project as never, options as never);
        }
    }
}

export function applyDefaults(
    project:
        | awscdk.AwsCdkTypeScriptApp
        | awscdk.AwsCdkConstructLibrary
        | typescript.TypeScriptProject
        | cdk.JsiiProject,
    components: ComponentConfig[],
) {
    configureProject(project);
    injectComponents(project, components);
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
    constructsVersion: defaults.constructsVersion,
} satisfies Partial<awscdk.AwsCdkConstructLibraryOptions>;

export const defaultOptions = {
    typescript: {
        TypeScriptProject: mergeAll<typescript.TypeScriptProjectOptions>(
            projectDefaultOptions,
            esModuleTsconfigOptions,
        ),
    },
    cdk: {
        JsiiProject: mergeAll<cdk.JsiiProjectOptions>(projectDefaultOptions, publishableProjectDefaultOptions, {
            jsiiVersion: defaults.jsiiVersion,
        }),
    },
    awscdk: {
        AwsCdkTypeScriptApp: mergeAll<awscdk.AwsCdkTypeScriptAppOptions>(
            projectDefaultOptions,
            esModuleTsconfigOptions,
            cdkDefaultVersionOptions,
        ),
        AwsCdkConstructLibrary: mergeAll<awscdk.AwsCdkConstructLibraryOptions>(
            projectDefaultOptions,
            publishableProjectDefaultOptions,
            cdkDefaultVersionOptions,
        ),
    },
};
