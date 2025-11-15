# ProjenProjectClass

A Projen component that generates project class implementations following the jsii-struct-builder pattern.

## Overview

`ProjenProjectClass` automatically generates boilerplate project classes that extend Projen base classes with custom configuration. This eliminates manual maintenance of repetitive code across multiple project types.

## Architecture

The implementation follows the jsii-struct-builder pattern with three main components:

### 1. CodeBuffer

Manages code generation with proper indentation:

- `line(code)` - Add a line of code
- `open(code)` - Add a line and increase indentation
- `close(code)` - Decrease indentation and add a line
- `flush()` - Return generated lines and reset

### 2. TypeScriptClassRenderer

Renders TypeScript class code:

- Extracts and sorts imports (external packages first, then relative)
- Generates type-only imports for interface files
- Renders class with constructor pattern
- Handles custom options extraction and default config application

### 3. ProjenProjectClass (Component)

Projen component that orchestrates generation:

- Extends `Component` for lifecycle integration
- Runs during `preSynthesize()` phase
- Creates `TypeScriptClassFile` with generated content

## Usage

```typescript
new ProjenProjectClass(project, {
  name: "TypeScriptProject",
  baseClass: "typescript.TypeScriptProject",
  optionsInterface: "TypeScriptProjectOptions",
  baseOptionsType: "typescript.TypeScriptProjectOptions",
  defaultConfig: "typescriptProjectDefaultOptions",
  filePath: "./src/projects/typescript.generated.ts",
});
```

## Generated Code Pattern

Each generated class follows this pattern:

```typescript
import { baseModule } from "projen";
import { applyDefaultConfig, defaultConfig } from "../config";
import { deepMerge } from "../utils";
import type { OptionsInterface } from "./options-file.generated";

export { OptionsInterface } from "./options-file.generated";

export class ClassName extends BaseClass {
  constructor(options: OptionsInterface) {
    const { mise, vitest, vitestOptions, ...baseOptions } = options;

    super(deepMerge<BaseOptionsType>(defaultConfig, baseOptions));

    applyDefaultConfig(this, vitest, vitestOptions, mise);
  }
}
```

## Benefits

1. **Single Source of Truth**: All project classes defined in `.projenrc.ts`
2. **Consistency**: Identical pattern across all project types
3. **Maintainability**: Changes to the pattern update all classes automatically
4. **Type Safety**: Full TypeScript support with proper imports
5. **JSII Compatible**: Generates code that works with JSII compilation

## Comparison with jsii-struct-builder

| Feature  | jsii-struct-builder                  | ProjenProjectClass    |
| -------- | ------------------------------------ | --------------------- |
| Purpose  | Generate interfaces                  | Generate classes      |
| Input    | JSII specs                           | Configuration objects |
| Output   | TypeScript interfaces                | TypeScript classes    |
| Pattern  | Builder pattern with transformations | Direct rendering      |
| Use Case | Type definitions                     | Implementation code   |
