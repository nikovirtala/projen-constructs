import { cdk } from "projen";
import { applyDefaultConfig, JSII_PROJECT_DEFAULT_OPTIONS } from "../config";
import { deepMerge } from "../utils";

export class JsiiProject extends cdk.JsiiProject {
    constructor(options: cdk.JsiiProjectOptions) {
        super(deepMerge<cdk.JsiiProjectOptions>(JSII_PROJECT_DEFAULT_OPTIONS, options));

        applyDefaultConfig(this);
    }
}
