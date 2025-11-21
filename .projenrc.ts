import { JsonPatch } from "projen";
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
    description: "Projen project types with standard configuration",
    devDeps: ["constructs@10.4.3", "projen@0.98.10", "esbuild", "@mrgrain/cdk-esbuild", "@jsii/spec"],
    name: "@nikovirtala/projen-constructs",
    peerDeps: ["projen", "constructs", "@mrgrain/cdk-esbuild"],
    repositoryUrl: "https://github.com/nikovirtala/projen-constructs.git",
});

project.gitignore.addPatterns(".amazonq/");
project.gitignore.addPatterns(".kiro/");

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
const components = [{ componentClass: Mise }, { componentClass: Vitest }];

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
    components: [{ componentClass: Mise }, { componentClass: Vitest }, { componentClass: TypeDoc }],
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
        exec: "tsx --tsconfig tsconfig.dev.json src/bundle-vitest-define-config.ts",
    }),
);

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
        name: "run projen",
        run: "npx projen",
    }),
);

// @mrgrain/cdk-esbuild is both dev and peer dependency which ncu doesn't update on a single run
project.upgradeWorkflow?.postUpgradeTask.exec(
    "pnpm dlx npm-check-updates@18 --upgrade --target=minor --peer --dep=dev,peer --filter=@mrgrain/cdk-esbuild",
);
project.upgradeWorkflow?.postUpgradeTask.exec("pnpm i --no-frozen-lockfile");

project.synth();
