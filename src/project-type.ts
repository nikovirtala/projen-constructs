/**
 * Enum defining all supported project types
 *
 * Each project type corresponds to a generated project class and its configuration
 * in the defaultOptions structure.
 */
export enum ProjectType {
    TYPESCRIPT = "typescript.TypeScriptProject",
    JSII = "cdk.JsiiProject",
    AWS_CDK_TYPESCRIPT_APP = "awscdk.AwsCdkTypeScriptApp",
    AWS_CDK_CONSTRUCT_LIBRARY = "awscdk.AwsCdkConstructLibrary",
}
