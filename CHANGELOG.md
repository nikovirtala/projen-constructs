# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Releases are published automatically with [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) from Conventional Commit history. GitHub also hosts auto-generated release notes for every tag at [the releases page](https://github.com/nikovirtala/projen-constructs/releases); the entries below summarize the breaking and otherwise notable changes.

## [Unreleased]

Nothing yet.

## [0.5.0] - 2026-11-03

### Changed

- **BREAKING:** Generated TypeScript and AWS CDK app projects now run `.projenrc.ts` and the app itself with `node` using native type stripping instead of `tsx`. Project code must use only erasable TypeScript syntax, mark type-only imports with `import type`, import relative files with their `.ts` extension, and can no longer rely on `tsconfig` path aliases (#248).

### Removed

- **BREAKING:** Dropped the `tsx` fallback for Node.js versions that lack native type stripping. Running these projects now requires a Node.js version with type-stripping support (#248).

## [0.4.1] - 2026-11-03

Maintenance release. No notable changes.

## [0.4.0] - 2026-11-02

### Changed

- **BREAKING:** Default to Node.js 26 LTS. Generated projects now require Node.js `>= 26.13.0` and receive `@types/node ^26` unless `minNodeVersion` is set explicitly (#242).
- **BREAKING:** Default to pnpm 12. Generated projects pin pnpm `12.16.1` unless `pnpmVersion` is set. A globally installed pnpm older than 11 cannot switch to this version, and `--frozen-lockfile false` and `--resolution-only` are no longer accepted flags (#243).
- **BREAKING:** Default to Vitest 5. It requires Node.js `>= 22.12` and Vite `>= 6.4`, enables `clearMocks` by default, and throws when `vi.mock` is called outside the top level of a module. Set `vitestVersion: '^4'` to stay on Vitest 4 (#241).

## Earlier releases

Releases before `0.4.0` (the `0.3.x` line and earlier) are not detailed here. See the [automated GitHub release notes](https://github.com/nikovirtala/projen-constructs/releases) for the full history of older tags.

[Unreleased]: https://github.com/nikovirtala/projen-constructs/compare/v0.5.0...HEAD
[0.5.0]: https://github.com/nikovirtala/projen-constructs/compare/v0.4.1...v0.5.0
[0.4.1]: https://github.com/nikovirtala/projen-constructs/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/nikovirtala/projen-constructs/compare/v0.3.0...v0.4.0
