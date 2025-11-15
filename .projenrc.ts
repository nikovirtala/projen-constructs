import { PrimitiveType } from "@jsii/spec";
import { ProjenStruct, Struct } from "@mrgrain/jsii-struct-builder";
import { JsonPatch } from "projen";
import { JsiiProject } from "./src/projects";

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

const commonOptions = [
    {
        name: "mise",
        type: { primitive: PrimitiveType.Boolean },
        optional: true,
        docs: {
            summary: "Create mise.toml with project Node.js version",
            default: "true",
        },
    },
    {
        name: "vitest",
        type: { primitive: PrimitiveType.Boolean },
        optional: true,
        docs: {
            summary: "Enable testing with Vitest.",
            default: "true",
        },
    },
    {
        name: "vitestOptions",
        type: { fqn: "@nikovirtala/projen-constructs.VitestOptions" },
        optional: true,
        docs: {
            summary: "The Vitest configuration (when enabled).",
            default: "- default Vitest configuration",
        },
    },
];

const commonOmits = [
    "eslint",
    "eslintOptions",
    "jest",
    "jestOptions",
    "prettier",
    "prettierOptions",
    "sampleCode",
    "tsJestOptions",
];

new ProjenStruct(project, {
    name: "TypeScriptProjectOptions",
    filePath: "./src/projects/typescript-options.generated.ts",
    outputFileOptions: { readonly: true },
})
    .mixin(Struct.fromFqn("projen.typescript.TypeScriptProjectOptions"))
    .withoutDeprecated()
    .omit(...commonOmits)
    .add(...commonOptions);

new ProjenStruct(project, {
    name: "JsiiProjectOptions",
    filePath: "./src/projects/jsii-options.generated.ts",
    outputFileOptions: { readonly: true },
})
    .mixin(Struct.fromFqn("projen.cdk.JsiiProjectOptions"))
    .withoutDeprecated()
    .omit(...commonOmits)
    .add(...commonOptions);

new ProjenStruct(project, {
    name: "AwsCdkTypeScriptAppProjectOptions",
    filePath: "./src/projects/awscdk-app-options.generated.ts",
    outputFileOptions: { readonly: true },
})
    .mixin(Struct.fromFqn("projen.awscdk.AwsCdkTypeScriptAppOptions"))
    .withoutDeprecated()
    .omit(...commonOmits)
    .add(...commonOptions);

new ProjenStruct(project, {
    name: "AwsCdkConstructLibraryProjectOptions",
    filePath: "./src/projects/awscdk-construct-library-options.generated.ts",
    outputFileOptions: { readonly: true },
})
    .mixin(Struct.fromFqn("projen.awscdk.AwsCdkConstructLibraryOptions"))
    .withoutDeprecated()
    .omit(...commonOmits)
    .add(...commonOptions);

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
