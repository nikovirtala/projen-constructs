import * as fs from "node:fs";
import * as path from "node:path";
import { type awscdk, Component } from "projen";

/**
 * Whether Node.js can run TypeScript files natively, by stripping types, without a flag.
 *
 * Type stripping is enabled by default since Node.js 23.6 and 22.18. Projects that don't declare a
 * minimum Node.js version use the defaults of this library, which are recent enough.
 *
 * @param minNodeVersion - Minimum Node.js version of the project, e.g. "22.18.0" or "v20.17.0"
 *
 * @see https://nodejs.org/api/typescript.html#type-stripping
 */
export function supportsTypeStripping(minNodeVersion?: string): boolean {
    if (minNodeVersion === undefined) {
        return true;
    }

    const [major = 0, minor = 0] = minNodeVersion
        .replace(/^v/, "")
        .split(".")
        .map((part) => Number.parseInt(part, 10) || 0);

    if (major === 22) {
        return minor >= 18;
    }
    if (major === 23) {
        return minor >= 6;
    }
    return major > 23;
}

/**
 * Makes projen's sample code of AWS CDK TypeScript apps runnable with Node.js's native TypeScript
 * support and `verbatimModuleSyntax`.
 *
 * Projen writes `<srcdir>/<entrypoint>` when the source directory has no TypeScript files. Its
 * import of `StackProps` isn't marked as type-only, which `verbatimModuleSyntax` rejects and which
 * fails at runtime when Node.js strips types: aws-cdk-lib has no `StackProps` export.
 *
 * Only a file that still matches projen's sample is changed, never code written by hand.
 *
 * @internal
 */
export class AwsCdkAppSampleCode extends Component {
    private readonly app: awscdk.AwsCdkTypeScriptApp;

    constructor(project: awscdk.AwsCdkTypeScriptApp) {
        super(project);
        this.app = project;
    }

    /**
     * Runs after projen's sample code component, which the project constructor adds before any
     * component of this library, so the sample exists by now.
     */
    public override synthesize(): void {
        super.synthesize();

        const entrypoint = path.join(this.app.outdir, this.app.srcdir, this.app.appEntrypoint);

        if (!fs.existsSync(entrypoint)) {
            return;
        }

        const sampleImport = "import { App, Stack, StackProps } from 'aws-cdk-lib';\n";
        const contents = fs.readFileSync(entrypoint, "utf-8");

        if (!contents.startsWith(sampleImport) || !contents.includes("\nexport class MyStack extends Stack {")) {
            return;
        }

        fs.writeFileSync(
            entrypoint,
            contents.replace(sampleImport, "import { App, Stack, type StackProps } from 'aws-cdk-lib';\n"),
        );
    }
}
