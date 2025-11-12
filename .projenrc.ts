import { cdk } from "projen";
import { applyDefaultConfig, JSII_PROJECT_DEFAULT_OPTIONS } from "./src/config";

const project = new cdk.JsiiProject({
    ...JSII_PROJECT_DEFAULT_OPTIONS,
    name: "@nikovirtala/projen-constructs",
    repositoryUrl: "https://github.com/nikovirtala/projen-constructs.git",
    description: "Projen project types with standard configuration",
    deps: ["projen", "@nikovirtala/projen-vitest"],
    peerDeps: ["projen", "constructs"],
});

applyDefaultConfig(project);

project.synth();
