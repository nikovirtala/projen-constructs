import { awscdk, cdk, javascript, type Component as ProjenComponent, typescript } from "projen";
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

interface Component {
    component: new (project: never, options?: never) => ProjenComponent;
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
    components: Component[],
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
    components: Component[],
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
    githubOptions: {
        mergify: true,
    },
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
    pnpmVersion: "11.20.0",
    /**
     * pnpm 11 only reads auth and registry settings from `.npmrc`, everything else
     * has to live in `pnpm-workspace.yaml`.
     *
     * `minimumReleaseAge` defaults to 1440 minutes in pnpm 11. That cooldown makes
     * pnpm record unavoidable exceptions in `minimumReleaseAgeExclude`, which projen
     * regenerates away on the next synth, so the dependency upgrade workflow would
     * keep flip-flopping this file. Set it explicitly to opt out.
     *
     * @see https://pnpm.io/migration
     * @see https://pnpm.io/settings/dependency-resolution#minimumreleaseage
     */
    pnpmOptions: {
        workspaceYamlOptions: {
            nodeLinker: javascript.PnpmWorkspaceYamlSchemaNodeLinker.HOISTED,
            minimumReleaseAge: 0,
            /**
             * pnpm blocks dependency install scripts by default and, since pnpm 11, fails
             * the install when any are ignored. esbuild links its platform binary in a
             * postinstall script and is pulled in by vitest, so allow it. `allowBuilds`
             * replaces the `allowScripts` project option, which still renders the
             * `onlyBuiltDependencies` key that pnpm 11 no longer reads.
             */
            allowBuilds: { esbuild: true },
            /**
             * pnpm 11 defaults `verifyDepsBeforeRun` to `install`, so `pnpm exec` and
             * `pnpm run` install before running. projen resolves the task `PATH` with
             * `$(pnpm -c exec ...)`, which re-enters `pnpm install` while an install is
             * already running and deadlocks on the store lock. projen orchestrates the
             * installs itself, so turn the check off.
             *
             * @see https://pnpm.io/settings/build#verifydepsbeforerun
             */
            verifyDepsBeforeRun: false,
        },
    },
    projenrcTs: true,
    typescriptVersion: defaults.typescriptVersion,
    /**
     * jsii validates the compile tsconfig against its "strict" rule set, so it may
     * only carry options jsii accepts. Everything else belongs to `tsconfigDev`,
     * which projen renders as the type-check only config extending this one.
     */
    tsconfig: {
        compilerOptions: {
            alwaysStrict: true,
            declaration: true,
            esModuleInterop: true,
            experimentalDecorators: true,
            inlineSourceMap: true,
            inlineSources: true,
            isolatedModules: true,
            noFallthroughCasesInSwitch: true,
            noImplicitAny: true,
            noImplicitReturns: true,
            noImplicitThis: true,
            noUnusedLocals: true,
            noUnusedParameters: true,
            resolveJsonModule: true,
            strict: true,
            strictNullChecks: true,
            strictPropertyInitialization: true,
        },
    },
    tsconfigDev: {
        compilerOptions: {
            allowSyntheticDefaultImports: true,
            noImplicitOverride: true,
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
            noEmit: true,
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
