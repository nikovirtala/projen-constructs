# Product Overview

`@nikovirtala/projen-constructs` is a library that provides opinionated Projen project types with standard configuration for consistent project setup across repositories.

## Core Purpose

Automates project scaffolding and configuration for TypeScript, JSII, and AWS CDK projects with pre-configured tooling and best practices.

## Key Features

- **Standard Configuration**: Opinionated defaults for author, release branch, package manager, Node.js, TypeScript, and tooling
- **Automatic Project Type Discovery**: Generates `ProjectType` enum from Projen's JSII manifest (18 project types)
- **Component System**: Reusable components (Vitest, Mise, TypeDoc, LocalStack, Homebrew, Colima, etc.)
- **Code Generation**: `ProjectGenerator` creates project classes with standard configuration
- **ES Modules**: TypeScript and CDK App projects use ES modules (JSII uses CommonJS)

## Standard Defaults

- Author: Niko Virtala (niko.virtala@hey.com)
- Package Manager: pnpm 10
- Node Version: 24.11.1
- TypeScript: 5.9.3
- CDK Version: 2.223.0
- Code Quality: Biome for formatting and linting
- Testing: Vitest with coverage
- Version Management: mise

## Target Users

Developers creating TypeScript, JSII, or AWS CDK projects who want consistent, opinionated project setup with minimal configuration.
