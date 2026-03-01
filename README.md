# @nikovirtala/projen-constructs

Opinionated [Projen](https://github.com/projen/projen) project types that keep your repositories consistent,
modern, and low-maintenance — so you can focus on what actually matters.

## Why?

Bootstrapping a new project is easy. Keeping a dozen repositories in sync with the latest tooling, TypeScript
best practices, and consistent CI/CD is tedious. This library encapsulates those decisions once, so all your
projects inherit them automatically.

## Installation

```bash
pnpm add -D @nikovirtala/projen-constructs projen constructs
```

## Project Types

Pick the one that fits your use case and let it handle the rest:

| Class | Base | Use When |
|---|---|---|
| `TypeScriptProject` | `typescript.TypeScriptProject` | Plain TypeScript library or tool |
| `JsiiProject` | `cdk.JsiiProject` | Multi-language library via JSII |
| `AwsCdkTypeScriptAppProject` | `awscdk.AwsCdkTypeScriptApp` | AWS CDK application |
| `AwsCdkConstructLibraryProject` | `awscdk.AwsCdkConstructLibrary` | Publishable AWS CDK construct |

### Quick start

```typescript
import { TypeScriptProject } from "@nikovirtala/projen-constructs";

const project = new TypeScriptProject({
    name: "my-project",
    repositoryUrl: "https://github.com/you/my-project.git",
});

project.synth();
```

That's it. No bikeshedding over formatter settings, linter rules, or CI workflow YAML.

## What You Get

Every project type comes pre-wired with:

- **Biome** — formatting and linting in one fast tool; ESLint, Prettier, and ts-node are removed
- **Vitest** — test runner with V8 coverage
- **Mise** — pinned Node.js version via `mise.toml`, reproducible across machines
- **Homebrew** — `Brewfile` for local tooling
- **pnpm** — fast, disk-efficient package management
- **ESM** — `TypeScriptProject` and `AwsCdkTypeScriptAppProject` use native ES modules; JSII projects stay CommonJS by necessity
- **GitHub Actions** — auto-approve and auto-merge for dependency PRs; trusted NPM publishing for publishable projects
- **VSCode** — Biome extension recommended, format-on-save configured out of the box

## Version Management

Version numbers are intentionally absent from this README — they'd be stale the moment a new release ships.

Instead, the library keeps itself current automatically:

1. A weekly `upgrade-main` GitHub Actions workflow runs `npm-check-updates` to bump all dependencies to their latest minor versions.
2. As part of that upgrade run, a custom `update-versions` step queries the NPM registry for the latest `aws-cdk-lib` and `typescript` releases, and the official Node.js release index for the latest LTS patch of the current major. Results are written to `src/versions.json`.
3. After the version update, `projen` re-synthesises all project files so the generated code reflects the new defaults.
4. The resulting PR is automatically approved and merged — using the same auto-approve/auto-merge setup that all generated projects themselves inherit.

The versions you'll get are always the latest stable LTS Node.js for the current major, the latest `typescript`
release, and the latest `aws-cdk-lib` — as of the last upgrade cycle.

## Customization

Every option from the underlying Projen project type is available. Anything you pass in is deep-merged with
the defaults, so you only need to override what you care about:

```typescript
const project = new JsiiProject({
    name: "my-project",
    repositoryUrl: "https://github.com/nikovirtala/my-project.git",
    // pin a different Node version
    minNodeVersion: "20.0.0",
    // disable a component
    mise: false,
    // relax a TypeScript compiler option
    tsconfig: {
        compilerOptions: {
            noUnusedLocals: false,
        },
    },
    // tweak Biome
    biomeOptions: {
        biomeConfig: {
            formatter: {
                lineWidth: 100,
            },
        },
    },
});
```

## Components

Components are reusable building blocks. Project types include the ones that make sense for them; you can
also compose components directly into any Projen project.

### Vitest

[Vitest](https://vitest.dev) testing framework with configurable coverage and environment:

```typescript
import { Vitest, CoverageProvider, CoverageReporter } from "@nikovirtala/projen-constructs";

new Vitest(project, {
    config: {
        coverageProvider: CoverageProvider.V8,
        coverageReporters: [CoverageReporter.TEXT, CoverageReporter.LCOV],
    },
});
```

### TypeDoc

[TypeDoc](https://typedoc.org) API documentation generation:

```typescript
import { TypeDoc, EntryPointStrategy } from "@nikovirtala/projen-constructs";

new TypeDoc(project, {
    typeDocConfig: {
        entryPointStrategy: EntryPointStrategy.EXPAND,
        out: "docs/api",
        exclude: ["**/*.test.ts"],
    },
});
```

### Mise

[Mise](https://mise.jdx.dev) dev tool and runtime version management:

```typescript
import { Mise } from "@nikovirtala/projen-constructs";

new Mise(project, { nodeVersion: "24.0.0" });
```

### Homebrew

[Homebrew](https://brew.sh) package management via `Brewfile`:

```typescript
import { Homebrew } from "@nikovirtala/projen-constructs";

const homebrew = new Homebrew(project, { packages: ["jq", "yq"] });
homebrew.addPackage("gh");
```

### Colima

[Colima](https://github.com/abiosoft/colima) — a lighter Docker alternative for local container workloads:

```typescript
import { Colima } from "@nikovirtala/projen-constructs";

new Colima(project);
```

### LocalStack

[LocalStack](https://www.localstack.cloud) for running AWS services locally:

```typescript
import { LocalStack } from "@nikovirtala/projen-constructs";

new LocalStack(project, {
    services: ["s3", "lambda", "dynamodb"],
    port: 4566,
    debug: true,
});
```

### Lambda Function Construct Generator

Generates CDK `Function` constructs and bundles their handler code with esbuild:

```typescript
import { LambdaFunctionConstructGenerator } from "@nikovirtala/projen-constructs";

new LambdaFunctionConstructGenerator(project, {
    sourceDir: "src/handlers",
    outputDir: "src/constructs/lambda",
    filePattern: "*.lambda.ts",
    esbuildOptions: { minify: true, sourcemap: true },
});
```

## License

Apache-2.0 © [Niko Virtala](https://github.com/nikovirtala)
