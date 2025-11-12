import { cdk } from 'projen';
const project = new cdk.JsiiProject({
  author: 'Niko Virtala',
  authorAddress: 'niko.virtala@sok.fi',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.9.0',
  name: 'projen-constructs',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/niko.virtala/projen-constructs.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();