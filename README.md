# @nikovirtala/projen-constructs

Projen project types with standard configuration for consistent project setup across all repositories.

## Installation

```bash
pnpm add -D @nikovirtala/projen-constructs projen constructs
```

## Standard Configuration

All project types include:

- **Author**: Niko Virtala (niko.virtala@hey.com)
- **Default Release Branch**: main
- **Package Manager**: pnpm 10
- **Node Version**: 22.21.1
- **TypeScript**: 5.9.3
- **Module Type**: ES modules (TypeScript and CDK App projects only; JSII projects use CommonJS)
- **Code Quality**: Biome for formatting and linting
- **Testing**: Vitest
- **Auto-merge**: Enabled with auto-approve
- **VSCode**: Recommended extensions and settings
- **mise**: Node version management (via Homebrew)
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
      noUnusedLocals: false, // Override individual compiler options
    },
  },
  biomeOptions: {
    biomeConfig: {
      formatter: {
        lineWidth: 100, // Override individual formatter options
      },
    },
  },
});
```

## Usage

### AWS CDK Construct Library Projects

```typescript
import { AwsCdkConstructLibraryProject } from "@nikovirtala/projen-constructs";

const project = new AwsCdkConstructLibraryProject({
  name: "my-cdk-construct",
  repositoryUrl: "https://github.com/nikovirtala/my-cdk-construct.git",
});

project.synth();
```

### AWS CDK TypeScript App Projects

```typescript
import { AwsCdkTypeScriptAppProject } from "@nikovirtala/projen-constructs";

const project = new AwsCdkTypeScriptAppProject({
  name: "my-cdk-app",
  repositoryUrl: "https://github.com/nikovirtala/my-cdk-app.git",
});

project.synth();
```

### JSII Projects

```typescript
import { JsiiProject } from "@nikovirtala/projen-constructs";

const project = new JsiiProject({
  name: "my-jsii-project",
  repositoryUrl: "https://github.com/nikovirtala/my-jsii-project.git",
});

project.synth();
```

### TypeScript Projects

```typescript
import { TypeScriptProject } from "@nikovirtala/projen-constructs";

const project = new TypeScriptProject({
  name: "my-typescript-project",
  repositoryUrl: "https://github.com/nikovirtala/my-typescript-project.git",
});

project.synth();
```

## Components

The package includes reusable components for common development tasks:

### Vitest

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

### TypeDoc

TypeDoc documentation generation component.

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

### Mise

Mise version management component.

```typescript
import { Mise } from "@nikovirtala/projen-constructs";

new Mise(project, {
  nodeVersion: "22.21.1",
});
```

### Homebrew

Homebrew package management component.

```typescript
import { Homebrew } from "@nikovirtala/projen-constructs";

const homebrew = new Homebrew(project, {
  packages: ["jq", "yq"],
});

homebrew.addPackage("gh");
```

### Colima

Colima Docker runtime component.

```typescript
import { Colima } from "@nikovirtala/projen-constructs";

new Colima(project);
```

### LocalStack

LocalStack AWS emulation component.

```typescript
import { LocalStack } from "@nikovirtala/projen-constructs";

new LocalStack(project, {
  services: ["s3", "lambda", "dynamodb"],
  port: 4566,
  debug: true,
});
```

### LambdaFunctionConstructGenerator

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

### Bundler

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
