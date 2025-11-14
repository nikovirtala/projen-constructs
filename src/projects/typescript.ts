import { typescript } from "projen";
import { applyDefaultConfig, TYPESCRIPT_PROJECT_DEFAULT_OPTIONS } from "../config";
import { deepMerge } from "../utils";
import type { TypeScriptProjectOptions } from "./typescript-options.generated";

export { TypeScriptProjectOptions } from "./typescript-options.generated";

export class TypeScriptProject extends typescript.TypeScriptProject {
    constructor(options: TypeScriptProjectOptions) {
        const { mise, vitest, vitestOptions, ...tsOptions } = options;

        super(deepMerge<typescript.TypeScriptProjectOptions>(TYPESCRIPT_PROJECT_DEFAULT_OPTIONS, tsOptions));

        applyDefaultConfig(this, vitest, vitestOptions, mise);
    }
}
