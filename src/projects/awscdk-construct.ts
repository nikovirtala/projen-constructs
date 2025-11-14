import { awscdk } from "projen";
import { applyDefaultConfig, CDK_CONSTRUCT_DEFAULT_OPTIONS } from "../config";
import { deepMerge } from "../utils";
import type { AwsCdkConstructProjectOptions } from "./awscdk-construct-options.generated";

export { AwsCdkConstructProjectOptions } from "./awscdk-construct-options.generated";

export class AwsCdkConstructProject extends awscdk.AwsCdkConstructLibrary {
    constructor(options: AwsCdkConstructProjectOptions) {
        const { mise, vitest, vitestOptions, ...cdkOptions } = options;

        super(deepMerge<awscdk.AwsCdkConstructLibraryOptions>(CDK_CONSTRUCT_DEFAULT_OPTIONS, cdkOptions));

        applyDefaultConfig(this, vitest, vitestOptions, mise);
    }
}
