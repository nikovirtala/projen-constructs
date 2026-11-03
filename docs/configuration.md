# Configuration

This page covers the configuration that `@nikovirtala/projen-constructs` applies to generated
projects: package manager settings, the TypeScript configs, native TypeScript execution, and how
you override any of it.

## Standard configuration

Every project type ships with the same opinionated defaults:

- **Author**: Niko Virtala (niko.virtala@hey.com)
- **Default release branch**: main
- **Package manager**: pnpm 12.16.1
- **Node version**: 26.13.0
- **TypeScript**: 6.0.3
- **CDK version**: 2.275.0 (for CDK projects)
- **JSII version**: ~6.0.3 (for JSII projects)

The AWS CDK, Node.js and TypeScript versions live in `src/versions.json` and are refreshed by the
`update-versions` task, which the dependency upgrade workflow runs.

## pnpm

pnpm reads its settings from `pnpm-workspace.yaml`, not `.npmrc`, since pnpm 11. Generated projects
get:

| Setting                | Value             | Reason                                                                                                       |
| ---------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------ |
| `nodeLinker`           | `hoisted`         | jsii tooling resolves dependencies from a flat `node_modules`                                                |
| `allowBuilds`          | `esbuild: true`   | esbuild links its platform binary in a postinstall script, and pnpm 11 fails an install with ignored builds   |
| `verifyDepsBeforeRun`  | `false`           | projen resolves the task `PATH` with `$(pnpm -c exec ...)`, which otherwise re-enters `pnpm install` and deadlocks |
| `minimumReleaseAge`    | `0`              | the pnpm 11 default of 1440 minutes makes pnpm write `minimumReleaseAgeExclude` entries into this generated file |

## TypeScript configuration

Projen renders three configs, and you should not edit any of them directly:

- `tsconfig.json` compiles `src` to `lib`. For JSII projects, jsii validates it against its `strict`
  rule set, so it only carries compiler options jsii accepts.
- `test/tsconfig.json` extends it and is type-check only. This is the config Vitest type checking and
  the editor use, and the one `tsconfigDev` points at.
- `projenrc/tsconfig.json` covers `.projenrc.ts`.

## Native TypeScript

TypeScript and AWS CDK app projects run TypeScript with Node.js's built-in
[type stripping](https://nodejs.org/api/typescript.html#type-stripping) instead of `tsx` or
`ts-node`: the default task is `node .projenrc.ts`, and the cdk.json `app` is `node src/main.ts`.
Their `tsconfig.json` sets `erasableSyntaxOnly` and `verbatimModuleSyntax`, so `tsc` reports code
that Node.js cannot run before Node.js does.

Code in these projects must therefore:

- only use syntax that can be stripped: no `enum`s (use an `as const` object), no namespaces with
  values, and no constructor parameter properties
- mark type-only imports with `type` (Biome's `useImportType` fixes these)
- import relative files with their `.ts` extension, and never import a directory
- use Node.js [subpath imports](https://nodejs.org/api/packages.html#subpath-imports)
  (`#stacks` in `package.json` `imports`) instead of tsconfig `paths`, which Node.js does not read
- import packages without an `exports` map either from the package root or with an explicit file,
  e.g. `projen/lib/component.js` rather than `projen/lib/component`

Lambda handlers bundled by esbuild and tests run by Vitest are not run by Node.js directly, but the
same compiler options apply to them.

JSII and AWS CDK construct library projects keep using `tsx`, because jsii compiles to CommonJS, and
their `.projenrc.ts` often imports their own `src`.

When you start a new project by hand, make sure `package.json` has `"type": "module"` before the
first `node .projenrc.ts`: `npm init` writes `"type": "commonjs"`, which makes Node.js reject the
`import` statements in `.projenrc.ts`.

## Customization

Override any option by passing it to the constructor:

```typescript
import { JsiiProject } from "@nikovirtala/projen-constructs";

const project = new JsiiProject({
  name: "my-project",
  author: "Custom Author",
  authorAddress: "custom@example.com",
  repositoryUrl: "https://github.com/nikovirtala/my-project.git",
  minNodeVersion: "26.0.0",
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

project.synth();
```

Every component is exposed as an enable flag (`mise`, `vitest`, ...) plus an options property
(`miseOptions`, `vitestOptions`, ...).
