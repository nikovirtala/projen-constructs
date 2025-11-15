import { JsonPatch } from "projen";
import { Mise } from "./src/components/mise";
import { Vitest } from "./src/components/vitest";
import { JsiiProject } from "./src/projects";
import { ProjenProjectGenerator } from "./src/projen-project-generator";

const project = new JsiiProject({
    author: "Niko Virtala",
    authorAddress: "niko.virtala@hey.com",
    bundledDeps: ["case"],
    defaultReleaseBranch: "main",
    deps: ["projen"],
    description: "Projen project types with standard configuration",
    devDeps: [
        "constructs@10.4.3",
        "projen@0.98.10",
        "esbuild",
        "@mrgrain/cdk-esbuild",
        "@jsii/spec",
        "@mrgrain/jsii-struct-builder",
    ],
    name: "@nikovirtala/projen-constructs",
    peerDeps: ["projen", "constructs", "@mrgrain/cdk-esbuild"],
    repositoryUrl: "https://github.com/nikovirtala/projen-constructs.git",
});

project.gitignore.addPatterns(".amazonq/");

/**
 * Components to integrate into all generated project types
 *
 * Each component is automatically added to the generated options interface with:
 * - An enabled flag (boolean, defaults to true)
 * - An options property (if optionsProperty is specified)
 */
const components = [
    { component: Mise },
    {
        component: Vitest,
        optionsProperty: {
            name: "vitestOptions",
            type: "@nikovirtala/projen-constructs.VitestOptions",
            docs: "Vitest configuration",
        },
    },
];

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

new ProjenProjectGenerator(project, {
    name: "TypeScriptProject",
    baseClass: "typescript.TypeScriptProject",
    filePath: "./src/projects/typescript.generated.ts",
    components,
    omitOptions: projectOmits,
});

new ProjenProjectGenerator(project, {
    name: "JsiiProject",
    baseClass: "cdk.JsiiProject",
    filePath: "./src/projects/jsii.generated.ts",
    components,
    omitOptions: projectOmits,
});

new ProjenProjectGenerator(project, {
    name: "AwsCdkTypeScriptAppProject",
    baseClass: "awscdk.AwsCdkTypeScriptApp",
    filePath: "./src/projects/awscdk-typescript-app.generated.ts",
    components,
    omitOptions: projectOmits,
});

new ProjenProjectGenerator(project, {
    name: "AwsCdkConstructLibraryProject",
    baseClass: "awscdk.AwsCdkConstructLibrary",
    filePath: "./src/projects/awscdk-construct-library.generated.ts",
    components,
    omitOptions: projectOmits,
});

project.defaultTask?.spawn(
    project.addTask("bundle-vitest-define-config", {
        exec: "tsx --tsconfig tsconfig.dev.json src/bundle-vitest-define-config.ts",
    }),
);

project.addTask("update-versions", {
    description: "fetch latest aws-cdk-lib, node.js and typescript versions from npmjs.com",
    exec: "tsx .projen/update-versions.ts",
});

project.postSynthesize = () => {
    project.upgradeWorkflow?.workflows[0]?.file?.patch(
        JsonPatch.add("/jobs/upgrade/steps/0", {
            name: "update aws-cdk-lib, node.js and typescript versions",
            run: "pnpm exec projen update-versions",
        }),
    );
};

// @mrgrain/cdk-esbuild is both dev and peer dependency which ncu doesn't update on a single run
project.upgradeWorkflow?.postUpgradeTask.exec(
    "pnpm dlx npm-check-updates@18 --upgrade --target=minor --peer --dep=dev,peer --filter=@mrgrain/cdk-esbuild",
);
project.upgradeWorkflow?.postUpgradeTask.exec("pnpm i --no-frozen-lockfile");

project.synth();
