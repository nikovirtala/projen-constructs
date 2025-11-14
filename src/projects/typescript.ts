import { typescript } from "projen";
import { applyDefaultConfig, TYPESCRIPT_PROJECT_DEFAULT_OPTIONS } from "../config";

export class TypeScriptProject extends typescript.TypeScriptProject {
    constructor(options: typescript.TypeScriptProjectOptions) {
        super({
            ...TYPESCRIPT_PROJECT_DEFAULT_OPTIONS,
            ...options,
            biomeOptions: {
                ...TYPESCRIPT_PROJECT_DEFAULT_OPTIONS.biomeOptions,
                ...(options.biomeOptions ?? {}),
                biomeConfig: {
                    ...TYPESCRIPT_PROJECT_DEFAULT_OPTIONS.biomeOptions.biomeConfig,
                    ...(options.biomeOptions?.biomeConfig ?? {}),
                    formatter: {
                        ...TYPESCRIPT_PROJECT_DEFAULT_OPTIONS.biomeOptions.biomeConfig.formatter,
                        ...(options.biomeOptions?.biomeConfig?.formatter ?? {}),
                    },
                },
            },
            tsconfig: {
                compilerOptions: {
                    ...TYPESCRIPT_PROJECT_DEFAULT_OPTIONS.tsconfig.compilerOptions,
                    ...(options.tsconfig?.compilerOptions ?? {}),
                },
            },
        });

        applyDefaultConfig(this);

        this.package.addField("publishConfig", { access: "public" });
    }
}
