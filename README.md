# @nikovirtala/projen-constructs

Projen project types with standard configuration for consistent project setup across all repositories.

## Installation

```bash
pnpm add -D @nikovirtala/projen-constructs projen constructs
```

## Features

- **Standard Configuration**: Opinionated defaults for author, release branch, package manager, Node.js, TypeScript, and tooling
- **Automatic Project Type Discovery**: Generates `ProjectType` enum from Projen's JSII manifest (18 project types)
- **Component System**: Reusable components (Vitest, Mise, TypeDoc, LocalStack, etc.)
- **Code Generation**: `ProjectGenerator` creates project classes with standard configuration
- **ES Modules**: TypeScript and CDK App projects use ES modules (JSII uses CommonJS)
- **Code Quality**: Biome for formatting and linting
- **Testing**: Vitest with coverage
- **Auto-merge**: Enabled with auto-approve
- **VSCode**: Recommended extensions and settings
- **mise**: Node version management

## Standard Configuration

- **Author**: Niko Virtala (niko.virtala@hey.com)
- **Default Release Branch**: main
- **Package Manager**: pnpm 10
- **Node Version**: 22.21.1
- **TypeScript**: 5.9.3
- **CDK Version**: 2.223.0 (for CDK projects)
- **JSII Version**: ~5.9.3 (for JSII projects)

## Customization

Override any option by passing it to the constructor:

```typescript
const project = new JsiiProject({
  name: "my-project",
  repositoryUrl: "https://github.com/nikovirtala/my-project.git",
  minNodeVersion: "20.0.0",
  author: "Custom Author",
  authorAddress: "custom@example.com",
  mise: false,
  vitest: false,
  tsconfig: {
    compilerOptions: {
      noUnusedLocals: false,
    },
  },
  biomeOptions: {
    biomeConfig: {
      formatter: {
        lineWidth: 100,
      },
    },
  },
});
```

## Usage

### Projects

#### AWS CDK Construct Library Project

```typescript
import { AwsCdkConstructLibraryProject } from "@nikovirtala/projen-constructs";

const project = new AwsCdkConstructLibraryProject({
  name: "my-cdk-construct",
  repositoryUrl: "https://github.com/nikovirtala/my-cdk-construct.git",
});

project.synth();
```

#### AWS CDK TypeScript App Project

```typescript
import { AwsCdkTypeScriptAppProject } from "@nikovirtala/projen-constructs";

const project = new AwsCdkTypeScriptAppProject({
  name: "my-cdk-app",
  repositoryUrl: "https://github.com/nikovirtala/my-cdk-app.git",
});

project.synth();
```

#### JSII Project

```typescript
import { JsiiProject } from "@nikovirtala/projen-constructs";

const project = new JsiiProject({
  name: "my-jsii-project",
  repositoryUrl: "https://github.com/nikovirtala/my-jsii-project.git",
});

project.synth();
```

#### TypeScript Project

```typescript
import { TypeScriptProject } from "@nikovirtala/projen-constructs";

const project = new TypeScriptProject({
  name: "my-typescript-project",
  repositoryUrl: "https://github.com/nikovirtala/my-typescript-project.git",
});

project.synth();
```

### Components

The package includes reusable components for common development tasks:

#### Vitest

[Vitest](https://vitest.dev) testing framework component.

```typescript
import { Vitest } from "@nikovirtala/projen-constructs";

new Vitest(project, {
  vitestVersion: "^4",
  config: {
    coverageProvider: CoverageProvider.V8,
    coverageReporters: [CoverageReporter.TEXT, CoverageReporter.LCOV],
  },
});
```

#### TypeDoc

[TypeDoc](https://typedoc.org) documentation generation component.

```typescript
import { TypeDoc, EntryPointStrategy } from "@nikovirtala/projen-constructs";

new TypeDoc(project, {
  version: "^0.28",
  typeDocConfig: {
    entryPointStrategy: EntryPointStrategy.EXPAND,
    out: "docs/api",
    exclude: ["**/*.test.ts"],
  },
});
```

#### Mise

[Mise](https://mise.jdx.dev) dev tools/runtimes management component.

```typescript
import { Mise } from "@nikovirtala/projen-constructs";

new Mise(project, {
  nodeVersion: "22.21.1",
});
```

#### Homebrew

[Homebrew](https://brew.sh) package management component.

```typescript
import { Homebrew } from "@nikovirtala/projen-constructs";

const homebrew = new Homebrew(project, {
  packages: ["jq", "yq"],
});

homebrew.addPackage("gh");
```

#### Colima

[Colima](https://github.com/abiosoft/colima) container runtime component. Alternative for Docker.

```typescript
import { Colima } from "@nikovirtala/projen-constructs";

new Colima(project);
```

#### LocalStack

[LocalStack](https://www.localstack.cloud) AWS emulation component.

```typescript
import { LocalStack } from "@nikovirtala/projen-constructs";

new LocalStack(project, {
  services: ["s3", "lambda", "dynamodb"],
  port: 4566,
  debug: true,
});
```

#### LambdaFunctionConstructGenerator

Generates AWS CDK Lambda Function constructs and bundles their code.

```typescript
import { LambdaFunctionConstructGenerator } from "@nikovirtala/projen-constructs";

new LambdaFunctionConstructGenerator(project, {
  sourceDir: "src/handlers",
  outputDir: "src/constructs/lambda",
  filePattern: "*.lambda.ts",
  esbuildOptions: {
    minify: true,
    sourcemap: true,
  },
});
```

#### Bundler

Low-level bundling utilities for Lambda functions.

```typescript
import {
  Bundler,
  LambdaFunctionCodeBundle,
} from "@nikovirtala/projen-constructs";

const bundler = new Bundler(project, {
  assetsDir: "assets",
  esbuildVersion: "^0.25",
});

new LambdaFunctionCodeBundle(project, {
  entrypoint: "src/my-function.lambda.ts",
  extension: ".lambda.ts",
});
```

#### ProjectGenerator

Generates TypeScript project classes with standard configuration.

```typescript
import { ProjectGenerator, ProjectType } from "@nikovirtala/projen-constructs";

new ProjectGenerator(project, {
  name: "TypeScriptProject",
  projectType: ProjectType.TYPESCRIPT,
  filePath: "./src/projects/typescript.generated.ts",
  components: [
    { componentClass: Mise },
    { componentClass: Vitest }, // Auto-detects VitestOptions from JSII manifest
  ],
});
```

Features:
- Automatically generates the `ProjectType` enum from Projen's JSII manifest
- Auto-detects component options types from JSII manifests
- Validates paths to prevent directory traversal attacks
- Structured error handling with custom error classes
