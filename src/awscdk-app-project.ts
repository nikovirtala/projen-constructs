import { awscdk } from "projen";
import { applyDefaultConfig, CDK_APP_DEFAULT_OPTIONS } from "./config";

export class AwsCdkTypeScriptAppProject extends awscdk.AwsCdkTypeScriptApp {
    constructor(options: awscdk.AwsCdkTypeScriptAppOptions) {
        super({
            ...CDK_APP_DEFAULT_OPTIONS,
            ...options,
            biomeOptions: {
                ...CDK_APP_DEFAULT_OPTIONS.biomeOptions,
                ...(options.biomeOptions ?? {}),
                biomeConfig: {
                    ...CDK_APP_DEFAULT_OPTIONS.biomeOptions.biomeConfig,
                    ...(options.biomeOptions?.biomeConfig ?? {}),
                    formatter: {
                        ...CDK_APP_DEFAULT_OPTIONS.biomeOptions.biomeConfig.formatter,
                        ...(options.biomeOptions?.biomeConfig?.formatter ?? {}),
                    },
                },
            },
            tsconfig: {
                compilerOptions: {
                    ...CDK_APP_DEFAULT_OPTIONS.tsconfig.compilerOptions,
                    ...(options.tsconfig?.compilerOptions ?? {}),
                },
            },
        });

        applyDefaultConfig(this);
    }
}
