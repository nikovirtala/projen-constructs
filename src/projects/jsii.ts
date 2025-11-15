import { cdk } from "projen";
import { applyDefaultConfig, jsiiProjectDefaultOptions } from "../config";
import { deepMerge } from "../utils";
import type { JsiiProjectOptions } from "./jsii-options.generated";

export { JsiiProjectOptions } from "./jsii-options.generated";

export class JsiiProject extends cdk.JsiiProject {
    constructor(options: JsiiProjectOptions) {
        const { mise, vitest, vitestOptions, ...jsiiOptions } = options;

        super(deepMerge<cdk.JsiiProjectOptions>(jsiiProjectDefaultOptions, jsiiOptions));

        applyDefaultConfig(this, vitest, vitestOptions, mise);
    }
}
