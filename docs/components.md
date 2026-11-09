# Components

`@nikovirtala/projen-constructs` ships reusable projen components for common development tasks. Add
a component to any project by constructing it with the project as its first argument. Every
TypeScript snippet below imports each identifier it uses, so you can paste it as-is.

## Vitest

[Vitest](https://vitest.dev) testing framework component.

```typescript
import {
  CoverageProvider,
  CoverageReporter,
  Vitest,
} from "@nikovirtala/projen-constructs";

new Vitest(project, {
  vitestVersion: "^5",
  config: {
    coverageProvider: CoverageProvider.V8,
    coverageReporters: [CoverageReporter.TEXT, CoverageReporter.LCOV],
  },
});
```

Type checking runs against the project's development tsconfig (`test/tsconfig.json`) unless
`config.typecheckTsconfig` says otherwise.

For Vitest settings that `config` does not cover, use `extraTestConfig` (merged into `test`) and
`extraConfig` (top-level options next to `test`):

```typescript
import { Vitest } from "@nikovirtala/projen-constructs";

new Vitest(project, {
  extraTestConfig: {
    setupFiles: ["test/setup.ts"],
  },
  extraConfig: {
    resolve: { alias: { "@": "/src" } },
  },
});
```

`extraTestConfig` is deep-merged over the generated `test` options: objects merge, and other values
(including arrays) replace the generated value. Both options are rendered as JSON, so their values
cannot contain functions or regular expressions, which rules out plugins.

## TypeDoc

[TypeDoc](https://typedoc.org) documentation generation component.

```typescript
import { EntryPointStrategy, TypeDoc } from "@nikovirtala/projen-constructs";

new TypeDoc(project, {
  version: "^0.28",
  typeDocConfig: {
    entryPointStrategy: EntryPointStrategy.EXPAND,
    out: "docs/api",
    exclude: ["**/*.test.ts"],
  },
});
```

## Mise

[Mise](https://mise.jdx.dev) dev tools and runtimes management component.

```typescript
import { Mise } from "@nikovirtala/projen-constructs";

new Mise(project, {
  nodeVersion: "26.13.0",
});
```

## Homebrew

[Homebrew](https://brew.sh) package management component. Writes a `Brewfile` and adds an
`install:homebrew` task that bootstraps Homebrew and runs `brew bundle`.

```typescript
import { Homebrew } from "@nikovirtala/projen-constructs";

const homebrew = new Homebrew(project, {
  packages: ["jq", "yq"],
});

homebrew.addPackage("gh");
```

A fully qualified formula (`user/repository/formula`) also adds a `tap` entry. Since Homebrew 6,
formulae from non-official taps only load when trusted, so they are written with `trusted: true`.
That trusts only the formula, not the rest of its tap.

## Colima

[Colima](https://github.com/abiosoft/colima) container runtime component. An alternative to Docker.

```typescript
import { Colima } from "@nikovirtala/projen-constructs";

new Colima(project);
```

## LocalStack

[LocalStack](https://www.localstack.cloud) AWS emulation component.

```typescript
import { LocalStack } from "@nikovirtala/projen-constructs";

new LocalStack(project, {
  services: ["s3", "lambda", "dynamodb"],
  port: 4566,
  debug: true,
});
```

## Floci

[Floci](https://floci.io) local cloud emulator component, a drop-in LocalStack replacement delivering AWS emulation.

```typescript
import { Floci } from "@nikovirtala/projen-constructs";

new Floci(project, {
  services: ["s3", "lambda", "dynamodb"],
  port: 4566,
  image: "floci/floci:1.5.0",
});
```

## LambdaFunctionConstructGenerator

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

## Bundler

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

## ProjectGenerator

Generates TypeScript project classes with standard configuration.

```typescript
import {
  Mise,
  ProjectGenerator,
  ProjectType,
  Vitest,
} from "@nikovirtala/projen-constructs";

new ProjectGenerator(project, {
  name: "TypeScriptProject",
  projectType: ProjectType.TYPE_SCRIPT_PROJECT,
  filePath: "./src/projects/typescript.generated.ts",
  components: [
    { componentClass: Mise },
    { componentClass: Vitest }, // auto-detects VitestOptions from the JSII manifest
  ],
});
```

Features:

- Automatically generates the `ProjectType` enum from projen's JSII manifest
- Auto-detects component options types from JSII manifests
- Strips projen's `@pjnew` annotation from `packageManager`, which `projen new` would otherwise
  render into a generated `.projenrc.ts` as the package manager that ran the command
- Validates paths to prevent directory traversal attacks
- Structured error handling with custom error classes
