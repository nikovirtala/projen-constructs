# Migrating from the standalone packages

The components used to be published as separate packages. Those packages are deprecated and will not
get new features or fixes. Every class, interface, enum and function they exported is exported from
`@nikovirtala/projen-constructs` under the same name, except `AwsCdkApp` (see below).

| Deprecated package | Replacement in `@nikovirtala/projen-constructs` |
| --- | --- |
| `@nikovirtala/projen-vitest` | `Vitest`, `VitestOptions`, `VitestConfigOptions`, `Environment`, `Pool`, `CoverageProvider`, `CoverageReporter` |
| `@nikovirtala/projen-typedoc` | `TypeDoc`, `TypeDocOptions`, `TypeDocConfiguration` and its enums |
| `@nikovirtala/projen-homebrew` | `Homebrew`, `HomebrewOptions` |
| `@nikovirtala/projen-colima` | `Colima` |
| `@nikovirtala/projen-localstack` | `LocalStack`, `LocalStackOptions` |
| `@nikovirtala/projen-bundle-lambda-function-code` | `Bundler`, `LambdaFunctionCodeBundle`, `LambdaFunctionCodeBundler` and their options |
| `@nikovirtala/projen-lambda-function-construct-generator` | `LambdaFunctionConstructGenerator`, `LambdaFunctionConstructGeneratorOptions` |
| `@nikovirtala/projen-aws-cdk-app` | `AwsCdkTypeScriptAppProject`, `AwsCdkTypeScriptAppProjectOptions` |

## Steps

1. In `.projenrc.ts`, replace the old package in `devDeps` with `@nikovirtala/projen-constructs`, and
   change the imports:

   ```typescript
   // before
   import { Vitest } from "@nikovirtala/projen-vitest";
   // after
   import { Vitest } from "@nikovirtala/projen-constructs";
   ```

2. Check the peer dependencies. `@nikovirtala/projen-constructs` needs `projen` ^0.104, `constructs`
   ^10 and `@mrgrain/cdk-esbuild` ^5. The standalone packages accepted older projen versions, so you
   may have to upgrade projen in the same change.
3. Install the new package, run `npx projen` and review the changes to the generated files.

## Changes to expect

These are the differences in behaviour or generated files between the standalone packages and this
library.

**Vitest**

- `vitest.config.ts` imports `defineConfig` from
  `@nikovirtala/projen-constructs/lib/vitest-define-config` instead of
  `@nikovirtala/projen-vitest/lib/bundled-define-config`. Projen rewrites the file, so there is
  nothing to change by hand.
- The config is rendered as JSON, so its keys are quoted. The settings are the same.
- `config.typecheckTsconfig` defaults to the project's development tsconfig (`test/tsconfig.json`
  in current projen) instead of `tsconfig.dev.json`.
- JSII and construct library projects exclude `vitest.config.ts` from the published package.
- New: `extraTestConfig` and `extraConfig` for Vitest settings that `config` does not cover.

**Homebrew and Colima**

- Packages from a tap (`owner/tap/formula`) also add a `tap` line to the `Brewfile`, and the
  `Brewfile` is sorted.
- The `install:homebrew`, `homebrew:bundle` and `colima` tasks run in bash. `homebrew:bundle` also
  finds a freshly installed `brew` that is not on the `PATH` yet.

**LocalStack**

- `imageTag` is applied: LocalStack starts with `localstack/localstack:<imageTag>`. It used to be
  ignored.

**Bundler / LambdaFunctionCodeBundler**

- `LambdaFunctionCodeBundler.bundleOptions` applies to every discovered entrypoint. Its `entrypoint`
  used to replace them all.

**LambdaFunctionConstructGenerator**

- The bundle task runs `tsx` with the project's development tsconfig instead of `tsconfig.dev.json`.

**TypeDoc**: no changes.

## From `AwsCdkApp` to `AwsCdkTypeScriptAppProject`

```typescript
// before
import { AwsCdkApp } from "@nikovirtala/projen-aws-cdk-app";
const project = new AwsCdkApp({ name: "my-app", cdkVersion: "2.221.0" });

// after
import { AwsCdkTypeScriptAppProject } from "@nikovirtala/projen-constructs";
const project = new AwsCdkTypeScriptAppProject({ name: "my-app", cdkVersion: "2.221.0" });
```

Both are ES module apps using pnpm, Biome, Vitest and mise. The differences:

- **Native TypeScript**: `.projenrc.ts` and the app run with `node` instead of `tsx`, and the
  tsconfig sets `erasableSyntaxOnly` and `verbatimModuleSyntax` (see
  [Native TypeScript](./configuration.md#native-typescript)).
- **`nvm` is removed.** Use mise (on by default), which pins the Node.js version in `mise.toml`.
- **Homebrew is on by default.** The project gets a `Brewfile`, and `npx projen` runs
  `install:homebrew` (installs Homebrew if `brew` is missing) and `homebrew:bundle`. Set
  `homebrew: false` to turn it off.
- **cdk.json `app`** is `node src/main.ts` instead of `tsx --tsconfig tsconfig.json src/main.ts`.
- **Defaults** come from this library: Node.js, TypeScript, CDK and pnpm versions (pnpm 12 instead
  of 10), Dependabot off, auto-merge on, `auto-approve` and `auto-merge` labels on dependency
  upgrade PRs, and auto-approval of PRs by `nikovirtala`. Any option you set explicitly still wins,
  so set `autoApproveOptions` if you are not `nikovirtala`.
- **tsconfig**: `noImplicitOverride` and `allowSyntheticDefaultImports` move from `tsconfig.json`
  to the development tsconfig (`test/tsconfig.json`).
- **Options removed from the interface**: `eslint`, `jest`, `prettier` (and their options),
  `sampleCode` and `tsJestOptions`.
- `vitestOptions` takes the `VitestOptions` of this library, and now also `homebrewOptions` and
  `miseOptions`.
