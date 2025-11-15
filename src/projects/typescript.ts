import { typescript } from "projen";
import { applyDefaultConfig, typescriptProjectDefaultOptions } from "../config";
import { deepMerge } from "../utils";
import type { TypeScriptProjectOptions } from "./typescript-options.generated";

export { TypeScriptProjectOptions } from "./typescript-options.generated";

export class TypeScriptProject extends typescript.TypeScriptProject {
    constructor(options: TypeScriptProjectOptions) {
        const { mise, vitest, vitestOptions, ...tsOptions } = options;

        super(deepMerge<typescript.TypeScriptProjectOptions>(typescriptProjectDefaultOptions, tsOptions));

        applyDefaultConfig(this, vitest, vitestOptions, mise);
    }
}
