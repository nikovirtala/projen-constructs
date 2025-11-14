import { awscdk } from "projen";
import { applyDefaultConfig, CDK_CONSTRUCT_DEFAULT_OPTIONS } from "../config";
import { deepMerge } from "../utils";

export class AwsCdkConstructProject extends awscdk.AwsCdkConstructLibrary {
    constructor(options: awscdk.AwsCdkConstructLibraryOptions) {
        super(deepMerge<awscdk.AwsCdkConstructLibraryOptions>(CDK_CONSTRUCT_DEFAULT_OPTIONS, options));

        applyDefaultConfig(this);
    }
}
