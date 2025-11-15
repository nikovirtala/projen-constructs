import { awscdk } from "projen";
import { applyDefaultConfig, CDK_APP_DEFAULT_OPTIONS } from "../config";
import { deepMerge } from "../utils";
import type { AwsCdkTypeScriptAppProjectOptions } from "./awscdk-typescript-app-options.generated";

export { AwsCdkTypeScriptAppProjectOptions } from "./awscdk-typescript-app-options.generated";

export class AwsCdkTypeScriptAppProject extends awscdk.AwsCdkTypeScriptApp {
    constructor(options: AwsCdkTypeScriptAppProjectOptions) {
        const { mise, vitest, vitestOptions, ...awsCdkOptions } = options;

        super(deepMerge<awscdk.AwsCdkTypeScriptAppOptions>(CDK_APP_DEFAULT_OPTIONS, awsCdkOptions));

        applyDefaultConfig(this, vitest, vitestOptions, mise);
    }
}
