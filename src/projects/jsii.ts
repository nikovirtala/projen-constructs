import { cdk } from "projen";
import { applyDefaultConfig, JSII_PROJECT_DEFAULT_OPTIONS } from "../config";

export class JsiiProject extends cdk.JsiiProject {
    constructor(options: cdk.JsiiProjectOptions) {
        super({
            ...JSII_PROJECT_DEFAULT_OPTIONS,
            ...options,
            biomeOptions: {
                ...JSII_PROJECT_DEFAULT_OPTIONS.biomeOptions,
                ...(options.biomeOptions ?? {}),
                biomeConfig: {
                    ...JSII_PROJECT_DEFAULT_OPTIONS.biomeOptions.biomeConfig,
                    ...(options.biomeOptions?.biomeConfig ?? {}),
                    formatter: {
                        ...JSII_PROJECT_DEFAULT_OPTIONS.biomeOptions.biomeConfig.formatter,
                        ...(options.biomeOptions?.biomeConfig?.formatter ?? {}),
                    },
                },
            },
            tsconfig: {
                compilerOptions: {
                    ...JSII_PROJECT_DEFAULT_OPTIONS.tsconfig.compilerOptions,
                    ...(options.tsconfig?.compilerOptions ?? {}),
                },
            },
        });

        applyDefaultConfig(this);
    }
}
