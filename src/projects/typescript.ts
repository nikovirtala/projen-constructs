import { typescript } from "projen";
import { applyDefaultConfig, TYPESCRIPT_PROJECT_DEFAULT_OPTIONS } from "../config";
import { deepMerge } from "../utils";

export class TypeScriptProject extends typescript.TypeScriptProject {
    constructor(options: typescript.TypeScriptProjectOptions) {
        super(deepMerge<typescript.TypeScriptProjectOptions>(TYPESCRIPT_PROJECT_DEFAULT_OPTIONS, options));

        applyDefaultConfig(this);
    }
}
