import * as fs from "node:fs";
import * as path from "node:path";
import { type awscdk, Component } from "projen";

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
