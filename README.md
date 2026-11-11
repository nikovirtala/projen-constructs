# @nikovirtala/projen-constructs

Opinionated projen project types that scaffold TypeScript, JSII and AWS CDK repositories with one shared config.

[![npm version badge, latest release on npm](https://img.shields.io/npm/v/@nikovirtala/projen-constructs?label=npm)](https://www.npmjs.com/package/@nikovirtala/projen-constructs)
[![build status badge from the GitHub Actions build workflow](https://img.shields.io/github/actions/workflow/status/nikovirtala/projen-constructs/build.yml?branch=main&label=build)](https://github.com/nikovirtala/projen-constructs/actions/workflows/build.yml)
[![license badge, Apache-2.0](https://img.shields.io/npm/l/@nikovirtala/projen-constructs?label=license)](./LICENSE)
[![supported Node.js version badge, requires Node.js 26.13.0 or newer](https://img.shields.io/badge/node-%3E%3D26.13.0-informational?label=node)](https://nodejs.org)
[![projen peer dependency version badge, requires projen 0.104.23 or newer](https://img.shields.io/badge/projen-%5E0.104.23-informational?label=projen)](https://projen.io)

## Why this exists

Projen gives you code-first project configuration, but wiring up a consistent setup across many
TypeScript, JSII and AWS CDK repositories still means repeating the same choices. This library
packages those choices into ready-made project types and reusable components, so every repository
you generate shares the same package manager, Node.js and TypeScript versions, testing, linting and
release tooling.

It is for anyone in the projen and AWS CDK community who maintains more than one repository and wants
them to behave the same way without hand-copying configuration between them.

## When not to use this

Reach for plain projen instead when:

- you want unopinionated projen defaults and prefer to make each tooling choice yourself
- your setup is not pnpm-based or cannot run Node.js 26
- you build in languages beyond TypeScript, JSII and AWS CDK

## Status and supported versions

Stability: **stable**. This library requires `projen` ^0.104.23, pnpm 12, and Node.js >= 26.13.0.
These values are maintained in `src/versions.json` and the project configuration; the numbers quoted
across this documentation track those sources.

## Documentation

| Guide | What it covers |
| --- | --- |
| [Configuration](./docs/configuration.md) | Standard defaults, pnpm settings, the TypeScript configs, native TypeScript, and how to customize any option |
| [Components](./docs/components.md) | Reference for every component: Vitest, TypeDoc, Mise, Homebrew, Colima, LocalStack, Floci, AwsEmulator, LambdaFunctionConstructGenerator, Bundler, and ProjectGenerator |
| [Migration](./docs/migration.md) | Moving from the deprecated standalone packages, including the name mapping and behaviour changes |
| [Development](./docs/development.md) | Development commands and the build process diagram |
| [API reference](https://projen.nikovirtala.dev) | Generated TypeDoc API documentation |

Quick links: [Quick start](#quick-start) · [Usage](#usage) · [Features](#features).

## Quick start

To start a new project from scratch, run `projen new --from` in an empty directory. It installs the
library and writes a ready-to-use `.projenrc.ts` and the full project for you, with no manual setup:

```bash
pnpm dlx projen new --from @nikovirtala/projen-constructs aws_cdk_construct_library
```

**Expected output**: projen installs `@nikovirtala/projen-constructs` and its peers, writes a
`.projenrc.ts` that defines the project, and synthesizes the generated files into the directory:
`package.json`, `tsconfig.json`, `pnpm-workspace.yaml`, the GitHub Actions workflows, the Vitest and
Biome configuration, `mise.toml`, and the source and test scaffolding for your construct library.

Pass a different project type to scaffold one of the others this library provides:

| Project type | `projen new --from` argument |
| --- | --- |
| AWS CDK construct library | `aws_cdk_construct_library` |
| AWS CDK TypeScript app | `aws_cdk_type_script_app` |
| JSII | `jsii_project` |
| TypeScript | `type_script_project` |

### Adding it to an existing project

If you already have a `.projenrc.ts`, install the library alongside its `projen` and `constructs`
peers instead:

```bash
pnpm add -D @nikovirtala/projen-constructs projen constructs
```

Then define a project in `.projenrc.ts`:

```typescript
import { AwsCdkConstructLibraryProject } from "@nikovirtala/projen-constructs";

const project = new AwsCdkConstructLibraryProject({
  name: "my-cdk-construct",
  author: "Your Name",
  authorAddress: "you@example.com",
  repositoryUrl: "https://github.com/your-org/my-cdk-construct.git",
  cdkVersion: "2.275.0",
});

project.synth();
```

Run synthesis to write or update the generated files:

```bash
pnpm dlx projen
```

Re-running `projen` after you edit `.projenrc.ts` updates those files in place.

## Features

- **Standard configuration**: opinionated defaults for author, release branch, package manager,
  Node.js, TypeScript, and tooling
- **Automatic project type discovery**: generates the `ProjectType` enum from projen's JSII manifest
  (<!-- generated:project-type-count-start -->21<!-- generated:project-type-count-end --> project types)
- **Component system**: reusable components (Vitest, TypeDoc, Mise, Homebrew, Colima, LocalStack,
  Lambda bundling)
- **Code generation**: `ProjectGenerator` creates project classes with standard configuration
- **ES modules**: TypeScript and CDK app projects use ES modules (JSII uses CommonJS)
- **Code quality**: Biome for formatting and linting
- **Testing**: Vitest with coverage
- **Auto-merge**: enabled with auto-approve
- **VSCode**: recommended extensions and settings
- **mise**: Node version management

## Usage

Each project type applies the standard configuration and the shared components. See
[Configuration](./docs/configuration.md) for the defaults and how to override them, and
[Components](./docs/components.md) for the component reference.

### AWS CDK construct library project

```typescript
import { AwsCdkConstructLibraryProject } from "@nikovirtala/projen-constructs";

const project = new AwsCdkConstructLibraryProject({
  name: "my-cdk-construct",
  author: "Your Name",
  authorAddress: "you@example.com",
  repositoryUrl: "https://github.com/nikovirtala/my-cdk-construct.git",
  cdkVersion: "2.275.0",
});

project.synth();
```

### AWS CDK TypeScript app project

```typescript
import { AwsCdkTypeScriptAppProject } from "@nikovirtala/projen-constructs";

const project = new AwsCdkTypeScriptAppProject({
  name: "my-cdk-app",
  repository: "https://github.com/nikovirtala/my-cdk-app.git",
  cdkVersion: "2.275.0",
});

project.synth();
```

### JSII project

```typescript
import { JsiiProject } from "@nikovirtala/projen-constructs";

const project = new JsiiProject({
  name: "my-jsii-project",
  author: "Your Name",
  authorAddress: "you@example.com",
  repositoryUrl: "https://github.com/nikovirtala/my-jsii-project.git",
});

project.synth();
```

### TypeScript project

```typescript
import { TypeScriptProject } from "@nikovirtala/projen-constructs";

const project = new TypeScriptProject({
  name: "my-typescript-project",
  repository: "https://github.com/nikovirtala/my-typescript-project.git",
});

project.synth();
```

## Contributing

See [Development](./docs/development.md) for the commands and the build process. Configuration
changes belong in `.projenrc.ts`, never in the generated files.

## License

Apache-2.0. See [LICENSE](./LICENSE).
