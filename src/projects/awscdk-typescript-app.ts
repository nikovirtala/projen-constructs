import { awscdk } from "projen";
import { applyDefaultConfig, cdkAppDefaultOptions } from "../config";
import { deepMerge } from "../utils";
import type { AwsCdkTypeScriptAppProjectOptions } from "./awscdk-typescript-app-options.generated";

export { AwsCdkTypeScriptAppProjectOptions } from "./awscdk-typescript-app-options.generated";

export class AwsCdkTypeScriptAppProject extends awscdk.AwsCdkTypeScriptApp {
    constructor(options: AwsCdkTypeScriptAppProjectOptions) {
        const { mise, vitest, vitestOptions, ...awsCdkOptions } = options;

        super(deepMerge<awscdk.AwsCdkTypeScriptAppOptions>(cdkAppDefaultOptions, awsCdkOptions));

        applyDefaultConfig(this, vitest, vitestOptions, mise);
    }
}
