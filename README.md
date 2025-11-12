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
- **Module Type**: ES modules
- **Code Quality**: Biome for formatting and linting
- **Testing**: Vitest
- **Auto-merge**: Enabled with auto-approve
- **VSCode**: Recommended extensions and settings
- **mise**: Node version management
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
