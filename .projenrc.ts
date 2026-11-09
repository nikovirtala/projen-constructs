import { github, JsonPatch } from "projen";
import { Homebrew } from "./src/components/homebrew";
import { Mise } from "./src/components/mise";
import { TypeDoc } from "./src/components/typedoc";
import { Vitest } from "./src/components/vitest";
import { ProjectGenerator } from "./src/project-generator";
import { ProjectType } from "./src/project-type";
import { JsiiProject } from "./src/projects";

const project = new JsiiProject({
    author: "Niko Virtala",
    authorAddress: "niko.virtala@hey.com",
    bundledDeps: ["case", "@mrgrain/jsii-struct-builder"],
    defaultReleaseBranch: "main",
    deps: ["projen"],
    description:
        "Opinionated projen project types that scaffold TypeScript, JSII and AWS CDK repositories with one shared config.",
    devDeps: ["constructs", "projen", "esbuild", "@mrgrain/cdk-esbuild", "@jsii/spec"],
    name: "@nikovirtala/projen-constructs",
    peerDeps: ["projen", "constructs", "@mrgrain/cdk-esbuild"],
    repositoryUrl: "https://github.com/nikovirtala/projen-constructs.git",
    pnpmVersion: "12.16.1",
    // shamefully-hoist fixes jsii-pacmak esbuild resolution
    pnpmOptions: {
        workspaceYamlOptions: {
            shamefullyHoist: true,
        },
    },
});

// projects depend on components jsii fqns
project.gitignore.removePatterns(".jsii");

// remove docgen from post-compile task
project.postCompileTask.reset();

// regenerate .jsii after unbump to ensure version is 0.0.0
project.tasks.tryFind("unbump")?.exec("jsii --silence-warnings=reserved-word");

/**
 * Components to integrate into all generated project types
 *
 * Each component is automatically added to the generated options interface with:
 * - An enabled flag (boolean, defaults to true)
 * - An options property (auto-detected from JSII manifest)
 */
const components = [{ componentClass: Homebrew }, { componentClass: Mise }, { componentClass: Vitest }];

const projectOmits = [
    "eslint",
    "eslintOptions",
    "jest",
    "jestOptions",
    "prettier",
    "prettierOptions",
    "sampleCode",
    "tsJestOptions",
];

new ProjectGenerator(project, {
    name: "TypeScriptProject",
    projectType: ProjectType.TYPE_SCRIPT_PROJECT,
    filePath: "./src/projects/typescript.generated.ts",
    components,
    omitOptions: projectOmits,
});

new ProjectGenerator(project, {
    name: "JsiiProject",
    projectType: ProjectType.JSII_PROJECT,
    filePath: "./src/projects/jsii.generated.ts",
    components: [
        { componentClass: Homebrew },
        { componentClass: Mise },
        { componentClass: Vitest },
        { componentClass: TypeDoc },
    ],
    omitOptions: projectOmits,
});

new ProjectGenerator(project, {
    name: "AwsCdkTypeScriptAppProject",
    projectType: ProjectType.AWS_CDK_TYPE_SCRIPT_APP,
    filePath: "./src/projects/awscdk-typescript-app.generated.ts",
    components,
    omitOptions: projectOmits,
});

new ProjectGenerator(project, {
    name: "AwsCdkConstructLibraryProject",
    projectType: ProjectType.AWS_CDK_CONSTRUCT_LIBRARY,
    filePath: "./src/projects/awscdk-construct-library.generated.ts",
    components,
    omitOptions: projectOmits,
});

project.defaultTask?.spawn(
    project.addTask("bundle-vitest-define-config", {
        exec: "tsx --tsconfig tsconfig.json src/bundle-vitest-define-config.ts",
    }),
);

// regenerate the volatile version values and project-type count in README.md from source
project.defaultTask?.spawn(
    project.addTask("update-readme", {
        description: "regenerate the generated version values and project-type count in README.md",
        exec: "tsx projenrc/update-readme.ts",
    }),
);

/**
 * `vitest/config` is ESM only, so re-exporting it cannot be compiled by jsii
 * (CommonJS). This file is an esbuild entrypoint, bundled into
 * `lib/vitest-define-config.js` by the `bundle-vitest-define-config` task.
 */
project.tsconfig?.addExclude("src/vitest-define-config-entry.ts");

project.addTask("update-versions", {
    description: "fetch latest aws-cdk-lib, node.js and typescript versions from npmjs.com",
    exec: "tsx .projen/update-versions.ts",
});

project.github?.tryFindWorkflow("upgrade-main")?.file?.patch(
    JsonPatch.add("/jobs/upgrade/steps/4", {
        name: "update aws-cdk-lib, node.js and typescript versions",
        run: "pnpm exec projen update-versions",
    }),
);

project.github?.tryFindWorkflow("upgrade-main")?.file?.patch(
    JsonPatch.add("/jobs/upgrade/steps/5", {
        name: "Install updated dependencies",
        run: "pnpm i --no-frozen-lockfile",
    }),
);

project.github?.tryFindWorkflow("upgrade-main")?.file?.patch(
    JsonPatch.add("/jobs/upgrade/steps/6", {
        name: "run projen",
        run: "npx projen",
        env: { CI: "0" },
    }),
);

// @mrgrain/cdk-esbuild is both dev and peer dependency which ncu doesn't update on a single run
project.upgradeWorkflow?.postUpgradeTask.exec(
    "pnpm dlx npm-check-updates@18 --upgrade --target=minor --peer --dep=dev,peer --filter=@mrgrain/cdk-esbuild",
);
project.upgradeWorkflow?.postUpgradeTask.exec("pnpm i --no-frozen-lockfile");
// regenerate .jsii so the committed manifest carries the upgraded jsii toolchain's jsiiVersion + fingerprint
project.upgradeWorkflow?.postUpgradeTask.exec("jsii --silence-warnings=reserved-word");
// normalize the lockfile so its `specifier:` fields match the synth'd (loose) package.json ranges;
// `--fix-lockfile` forces this reconciliation even on a warm install (plain `pnpm i` does not).
// This MUST stay the last post-upgrade exec: the `upgrade` task synthesizes (reverting package.json
// to the loose ranges) before spawning `post-upgrade`, so running it last reconciles against the
// already-reverted manifest. Reordering it earlier would reintroduce the specifier flip-flop.
project.upgradeWorkflow?.postUpgradeTask.exec("pnpm i --no-frozen-lockfile --fix-lockfile");

// build the TypeDoc docs and deploy them to GitHub Pages on release
const docs = project.github?.addWorkflow("docs");

docs?.on({
    release: { types: ["published"] },
    workflowDispatch: {},
});

// a single GitHub Pages deployment should run at a time; never cancel an in-flight publish
docs?.file?.patch(
    JsonPatch.add("/concurrency", {
        group: "pages",
        "cancel-in-progress": false,
    }),
);

docs?.addJob("deploy", {
    runsOn: ["ubuntu-latest"],
    permissions: {
        pages: github.workflows.JobPermission.WRITE,
        idToken: github.workflows.JobPermission.WRITE,
        contents: github.workflows.JobPermission.READ,
    },
    environment: {
        name: "github-pages",
        url: "${{ steps.deployment.outputs.page_url }}",
    },
    steps: [
        {
            name: "Checkout",
            uses: "actions/checkout@v5",
        },
        {
            name: "Setup pnpm",
            uses: "pnpm/action-setup@v6.0.10",
            with: { version: "12.16.1" },
        },
        {
            name: "Setup Node.js",
            uses: "actions/setup-node@v7.0.0",
            with: { "node-version": "26.13.0", "package-manager-cache": false },
        },
        {
            name: "Install dependencies",
            run: "pnpm i --frozen-lockfile",
        },
        {
            name: "Generate TypeDoc documentation",
            run: "pnpm exec projen typedoc",
        },
        {
            // typedoc cleans docs/api on every run, so write the custom domain afterwards
            name: "Add custom domain",
            run: "echo 'projen.nikovirtala.dev' > docs/api/CNAME",
        },
        {
            name: "Setup Pages",
            uses: "actions/configure-pages@v5",
        },
        {
            name: "Upload Pages artifact",
            uses: "actions/upload-pages-artifact@v3",
            with: { path: "docs/api" },
        },
        {
            name: "Deploy to GitHub Pages",
            id: "deployment",
            uses: "actions/deploy-pages@v4",
        },
    ],
});

project.synth();
