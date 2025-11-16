/**
 * Enum defining all supported project types
 *
 * Each project type corresponds to a generated project class and its configuration
 * in the defaultOptions structure.
 */
export enum ProjectType {
    /**
     * TypeScript project with ES modules support
     *
     * @see https://projen.io/docs/api/typescript#typescriptproject-
     */
    TYPESCRIPT = "typescript.TypeScriptProject",

    /**
     * JSII project for publishing multi-language libraries
     *
     * @see https://projen.io/docs/api/cdk#jsiiproject-
     */
    JSII = "cdk.JsiiProject",

    /**
     * AWS CDK TypeScript application project with ES modules support
     *
     * @see https://projen.io/docs/api/awscdk#awscdktypescriptapp-
     */
    AWS_CDK_TYPESCRIPT_APP = "awscdk.AwsCdkTypeScriptApp",

    /**
     * AWS CDK construct library project for publishing reusable constructs
     *
     * @see https://projen.io/docs/api/awscdk/#awscdkconstructlibrary-
     */
    AWS_CDK_CONSTRUCT_LIBRARY = "awscdk.AwsCdkConstructLibrary",
}
