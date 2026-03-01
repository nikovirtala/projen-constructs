# @nikovirtala/projen-constructs

Opinionated [Projen](https://github.com/projen/projen) project types with standard configuration for
consistent project setup across repositories.

## Installation

```bash
pnpm add -D @nikovirtala/projen-constructs projen constructs
```

## Project Types

| Class | Base |
|---|---|
| `TypeScriptProject` | `typescript.TypeScriptProject` |
| `JsiiProject` | `cdk.JsiiProject` |
| `AwsCdkTypeScriptAppProject` | `awscdk.AwsCdkTypeScriptApp` |
| `AwsCdkConstructLibraryProject` | `awscdk.AwsCdkConstructLibrary` |

```typescript
import { TypeScriptProject } from "@nikovirtala/projen-constructs";

const project = new TypeScriptProject({
    name: "my-project",
    repositoryUrl: "https://github.com/you/my-project.git",
});

project.synth();
```

## Defaults

All project types share a common baseline configuration:

- **Tooling**: Biome for formatting and linting; ESLint, Prettier, and ts-node are removed
- **Testing**: Vitest with V8 coverage
- **Runtime management**: Mise, with a pinned Node.js version in `mise.toml`
- **Package management**: pnpm
- **Local tooling**: Homebrew `Brewfile`
- **Module format**: ESM for `TypeScriptProject` and `AwsCdkTypeScriptAppProject`; CommonJS for JSII-based projects
- **CI**: Auto-approve and auto-merge for dependency upgrade PRs; trusted NPM publishing for publishable projects
- **VSCode**: Biome extension recommended, format-on-save enabled

### Version update process

Dependency versions are kept current by an automated weekly cycle:

1. The `upgrade-main` GitHub Actions workflow runs `npm-check-updates` to bump all dependencies to their latest minor versions.
2. A custom `update-versions` step queries the NPM registry for the latest `aws-cdk-lib` and `typescript` releases, and the Node.js release index for the latest LTS patch of the current major. Results are written to `src/versions.json`.
3. `projen` re-synthesises all project files to reflect the updated defaults.
4. The resulting PR is auto-approved and auto-merged.

## Customization

User-provided options are deep-merged with the defaults. Only specify what you want to override:

```typescript
const project = new JsiiProject({
    name: "my-project",
    repositoryUrl: "https://github.com/nikovirtala/my-project.git",
    minNodeVersion: "20.0.0",
    mise: false,
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

## Components

Reusable components that can be composed into any Projen project. Project types include a default set;
additional components can be added manually.

### Vitest

[Vitest](https://vitest.dev) test runner:

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

[Colima](https://github.com/abiosoft/colima) container runtime:

```typescript
import { Colima } from "@nikovirtala/projen-constructs";

new Colima(project);
```

### LocalStack

[LocalStack](https://www.localstack.cloud) AWS service emulation:

```typescript
import { LocalStack } from "@nikovirtala/projen-constructs";

new LocalStack(project, {
    services: ["s3", "lambda", "dynamodb"],
    port: 4566,
    debug: true,
});
```

### LambdaFunctionConstructGenerator

Generates CDK `Function` constructs and bundles handler code with esbuild:

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
