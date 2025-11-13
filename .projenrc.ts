import { JsiiProject } from "./src/projects";

const project = new JsiiProject({
    author: "Niko Virtala",
    authorAddress: "niko.virtala@hey.com",
    bundledDeps: ["case"],
    defaultReleaseBranch: "main",
    deps: ["projen", "@nikovirtala/projen-vitest"],
    description: "Projen project types with standard configuration",
    devDeps: ["constructs@10.4.3", "projen@0.98.10", "esbuild", "@mrgrain/cdk-esbuild"],
    name: "@nikovirtala/projen-constructs",
    peerDeps: ["projen", "constructs", "@mrgrain/cdk-esbuild"],
    repositoryUrl: "https://github.com/nikovirtala/projen-constructs.git",
});

project.defaultTask?.spawn(
    project.addTask("bundle-vitest-define-config", {
        exec: "tsx --tsconfig tsconfig.dev.json .projen/bundle-vitest-define-config.ts",
    }),
);

project.synth();
