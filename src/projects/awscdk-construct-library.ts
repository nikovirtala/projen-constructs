import { awscdk } from "projen";
import { applyDefaultConfig, cdkConstructDefaultOptions } from "../config";
import { deepMerge } from "../utils";
import type { AwsCdkConstructLibraryProjectOptions } from "./awscdk-construct-library-options.generated";

export { AwsCdkConstructLibraryProjectOptions } from "./awscdk-construct-library-options.generated";

export class AwsCdkConstructLibraryProject extends awscdk.AwsCdkConstructLibrary {
    constructor(options: AwsCdkConstructLibraryProjectOptions) {
        const { mise, vitest, vitestOptions, ...cdkOptions } = options;

        super(deepMerge<awscdk.AwsCdkConstructLibraryOptions>(cdkConstructDefaultOptions, cdkOptions));

        applyDefaultConfig(this, vitest, vitestOptions, mise);
    }
}
