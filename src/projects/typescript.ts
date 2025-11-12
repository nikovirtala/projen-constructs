import { typescript } from "projen";
import { applyDefaultConfig, PROJECT_DEFAULT_OPTIONS } from "../config";

export class TypeScriptProject extends typescript.TypeScriptProject {
    constructor(options: typescript.TypeScriptProjectOptions) {
        super({
            ...PROJECT_DEFAULT_OPTIONS,
            ...options,
            biomeOptions: {
                ...PROJECT_DEFAULT_OPTIONS.biomeOptions,
                ...(options.biomeOptions ?? {}),
                biomeConfig: {
                    ...PROJECT_DEFAULT_OPTIONS.biomeOptions.biomeConfig,
                    ...(options.biomeOptions?.biomeConfig ?? {}),
                    formatter: {
                        ...PROJECT_DEFAULT_OPTIONS.biomeOptions.biomeConfig.formatter,
                        ...(options.biomeOptions?.biomeConfig?.formatter ?? {}),
                    },
                },
            },
            tsconfig: {
                compilerOptions: {
                    ...PROJECT_DEFAULT_OPTIONS.tsconfig.compilerOptions,
                    ...(options.tsconfig?.compilerOptions ?? {}),
                },
            },
        });

        applyDefaultConfig(this);

        this.package.addField("publishConfig", { access: "public" });
    }
}
