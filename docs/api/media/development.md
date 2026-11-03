# Development

This project is managed by projen and generates itself: `.projenrc.ts` defines the project using the
`JsiiProject` type from `src/`. Configuration changes belong in `.projenrc.ts`, never in the
generated files.

## Commands

```bash
pnpm projen           # synthesize project files
pnpm build            # synthesize, compile, test and package
pnpm test             # biome, vitest, typedoc
pnpm test:watch       # vitest in watch mode
pnpm test:update      # update snapshots
pnpm biome            # format and lint
pnpm docgen           # regenerate API.md from the .jsii manifest
pnpm update-versions  # refresh src/versions.json
pnpm upgrade          # upgrade dependencies
```

## Build process

The diagram below shows how synthesis, compile, test and package connect. Each node names a task or
artifact, and the arrows show the order they run in.

```mermaid
flowchart TD
    projenrc[".projenrc.ts"]

    subgraph synthesize["default (synthesize)"]
        direction TB
        synth["tsx .projenrc.ts"]
        generator["ProjectGenerator"]
        generated["src/project-type.ts<br/>src/projects/*.generated.ts<br/>src/projects/*-options.generated.ts"]
        projenfiles["package.json, tsconfig.json,<br/>pnpm-workspace.yaml, workflows, ..."]
        brew["install:homebrew<br/>brew bundle"]
        definecfg["bundle-vitest-define-config<br/>esbuild → lib/vitest-define-config.js"]

        synth --> generator --> generated
        synth --> projenfiles
        synth --> brew
        synth --> definecfg
    end

    subgraph compile["compile"]
        direction TB
        jsii["jsii<br/>validates tsconfig.json against the strict rule set"]
        lib["lib/**"]
        manifest[".jsii manifest"]

        jsii --> lib
        jsii --> manifest
    end

    subgraph test["test"]
        direction TB
        biome["biome check --write"]
        vitest["vitest run<br/>+ type checking"]
        typedoc["typedoc → docs/api"]

        biome --> vitest --> typedoc
    end

    subgraph package["package"]
        direction TB
        pacmak["jsii-pacmak<br/>--pack-command 'pnpm pack'"]
        dist["dist/js/*.tgz"]

        pacmak --> dist
    end

    projenrc --> synthesize
    synthesize --> compile
    compile --> test
    test --> package

    manifest -. "component options FQNs<br/>read on the next synthesis" .-> generator
    docgen["docgen<br/>jsii-docgen → API.md"]
    manifest --> docgen

    classDef artifact fill:#eef,stroke:#88a
    class generated,projenfiles,lib,manifest,dist artifact
```

The dashed edge is the part worth knowing about: `ProjectGenerator` reads the committed `.jsii`
manifest to resolve component options types, so the manifest produced by `compile` feeds the *next*
synthesis. This is why `.jsii` is committed rather than ignored. A component options type that is
missing from the manifest is reported as a warning and its options property is left out of the
generated interface, which is expected only while a new component is being introduced: compile once,
then synthesize again.

`package` runs `package:js` on CI and `package-all` locally; both end up in `jsii-pacmak`.
`docgen` is not part of `build` and has to be run explicitly after the manifest changes.
