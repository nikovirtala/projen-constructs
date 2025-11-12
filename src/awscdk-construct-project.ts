import { awscdk } from "projen";
import { applyDefaultConfig, CDK_CONSTRUCT_DEFAULT_OPTIONS } from "./config";

export class AwsCdkConstructLibraryProject extends awscdk.AwsCdkConstructLibrary {
    constructor(options: awscdk.AwsCdkConstructLibraryOptions) {
        super({
            ...CDK_CONSTRUCT_DEFAULT_OPTIONS,
            ...options,
            biomeOptions: {
                ...CDK_CONSTRUCT_DEFAULT_OPTIONS.biomeOptions,
                ...(options.biomeOptions ?? {}),
                biomeConfig: {
                    ...CDK_CONSTRUCT_DEFAULT_OPTIONS.biomeOptions.biomeConfig,
                    ...(options.biomeOptions?.biomeConfig ?? {}),
                    formatter: {
                        ...CDK_CONSTRUCT_DEFAULT_OPTIONS.biomeOptions.biomeConfig.formatter,
                        ...(options.biomeOptions?.biomeConfig?.formatter ?? {}),
                    },
                },
            },
            tsconfig: {
                compilerOptions: {
                    ...CDK_CONSTRUCT_DEFAULT_OPTIONS.tsconfig.compilerOptions,
                    ...(options.tsconfig?.compilerOptions ?? {}),
                },
            },
        });

        applyDefaultConfig(this);
    }
}
