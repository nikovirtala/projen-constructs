# ProjenProjectGenerator

A Projen component that generates project class implementations following the jsii-struct-builder pattern.

## Overview

`ProjenProjectGenerator` automatically generates boilerplate project classes that extend Projen base classes with custom configuration. This eliminates manual maintenance of repetitive code across multiple project types.

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

### 3. ProjenProjectGenerator (Component)

Projen component that orchestrates generation:

- Extends `Component` for lifecycle integration
- Runs during `preSynthesize()` phase
- Creates `TypeScriptClassFile` with generated content

## Usage

```typescript
new ProjenProjectGenerator(project, {
  name: "TypeScriptProject",
  baseClass: "typescript.TypeScriptProject",
  filePath: "./src/projects/typescript.generated.ts",
  components: [
    { component: Mise },
    { component: Vitest, optionsProperty: "vitestOptions" },
  ],
  additionalOptions: projectOptions,
  omitOptions: projectOmits,
});
```

## Generated Code Pattern

Each generated class follows this pattern:

```typescript
import { baseModule } from "projen";
import { Mise } from "../components/mise";
import { Vitest } from "../components/vitest";
import { applyDefaults, defaultOptions } from "../config";
import { deepMerge } from "../utils";
import type { OptionsInterface } from "./options-file.generated";

export { OptionsInterface } from "./options-file.generated";

export class ClassName extends BaseClass {
  constructor(options: OptionsInterface) {
    const { mise, vitest, vitestOptions, ...baseOptions } = options;

    super(deepMerge<BaseOptionsType>(defaultOptions.module.ClassName, baseOptions));

    applyDefaults(this, [
      { component: Mise, enabled: mise },
      { component: Vitest, enabled: vitest, options: vitestOptions },
    ]);
  }
}
```

## Benefits

1. **Single Source of Truth**: All project classes defined in `.projenrc.ts`
2. **Consistency**: Identical pattern across all project types
3. **Maintainability**: Changes to the pattern update all classes automatically
4. **Type Safety**: Full TypeScript support with proper imports
5. **JSII Compatible**: Generates code that works with JSII compilation

## Key Features

1. **Derived Configuration**: Config names and paths are derived from base class names, eliminating hardcoded mappings
2. **Component-Based**: Components are passed as class references, enabling dynamic instantiation
3. **Structured Defaults**: Default options follow the base class structure (`defaultOptions.typescript.TypeScriptProject`)
4. **Type-Safe**: Uses `never` type for flexible component constructor signatures

## Comparison with jsii-struct-builder

| Feature  | jsii-struct-builder                  | ProjenProjectGenerator |
| -------- | ------------------------------------ | ---------------------- |
| Purpose  | Generate interfaces                  | Generate classes       |
| Input    | JSII specs                           | Configuration objects  |
| Output   | TypeScript interfaces                | TypeScript classes     |
| Pattern  | Builder pattern with transformations | Code generation        |
| Use Case | Type definitions                     | Implementation code    |

## Integration

The `index.ts` file directly exports from generated files:

```typescript
export * from "./awscdk-construct-library.generated";
export * from "./awscdk-typescript-app.generated";
export * from "./jsii.generated";
export * from "./typescript.generated";
```

No intermediate wrapper files are needed, keeping the codebase clean and minimal.
