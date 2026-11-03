# Product Overview

`@nikovirtala/projen-constructs` is a library that provides opinionated Projen project types with standard configuration for consistent project setup across repositories.

## Core Purpose

Automates project scaffolding and configuration for TypeScript, JSII, and AWS CDK projects with pre-configured tooling and best practices.

## Key Features

- **Standard Configuration**: Opinionated defaults for author, release branch, package manager, Node.js, TypeScript, and tooling
- **Automatic Project Type Discovery**: Generates `ProjectType` enum from Projen's JSII manifest (<!-- generated:project-type-count-start -->21<!-- generated:project-type-count-end --> project types)
- **Component System**: Reusable components (Vitest, Mise, TypeDoc, LocalStack, Homebrew, Colima, etc.)
- **Code Generation**: `ProjectGenerator` creates project classes with standard configuration
- **ES Modules**: TypeScript and CDK App projects use ES modules (JSII uses CommonJS)

## Standard Defaults

<!-- generated:product-defaults-start -->
- Author: Niko Virtala (niko.virtala@hey.com)
- Package Manager: pnpm 12
- Node Version: 26.13.0
- TypeScript: 6.0.3
- CDK Version: 2.275.0
<!-- generated:product-defaults-end -->
- Code Quality: Biome for formatting and linting
- Testing: Vitest with coverage
- Version Management: mise

## Target Users

Developers creating TypeScript, JSII, or AWS CDK projects who want consistent, opinionated project setup with minimal configuration.
