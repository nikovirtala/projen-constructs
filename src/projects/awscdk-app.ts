import { awscdk } from "projen";
import { applyDefaultConfig, CDK_APP_DEFAULT_OPTIONS } from "../config";
import { deepMerge } from "../utils";

export class AwsCdkTypeScriptAppProject extends awscdk.AwsCdkTypeScriptApp {
    constructor(options: awscdk.AwsCdkTypeScriptAppOptions) {
        super(deepMerge<awscdk.AwsCdkTypeScriptAppOptions>(CDK_APP_DEFAULT_OPTIONS, options));

        applyDefaultConfig(this);
    }
}
