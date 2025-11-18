import { execSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";

/**
 * Integration tests that verify the package can be installed and used
 *
 * These tests simulate the actual user experience of installing the package
 * and creating projects from templates. They catch issues like:
 * - Missing bundled dependencies
 * - Incorrect dependency declarations
 * - Runtime import errors during project creation
 */
describe("Package installation integration tests", { timeout: 120000 }, () => {
    let tempDir: string;
    let packagePath: string;

    beforeAll(() => {
        /* Build and pack the package once for all tests */
        console.log("Building and packing package...");
        execSync("pnpm run package:js", { stdio: "inherit" });

        /* Find the packed tarball */
        const distDir = join(process.cwd(), "dist", "js");
        const files = execSync("ls -t", { cwd: distDir, encoding: "utf-8" })
            .split("\n")
            .filter((f) => f.endsWith(".tgz"));

        if (files.length === 0) {
            throw new Error("No packed tarball found in dist/js");
        }

        packagePath = join(distDir, files[0]);
        console.log(`Using package: ${packagePath}`);
    }, 60000); /* 60 second timeout for building */

    beforeEach(() => {
        /* Create temporary directory for each test */
        tempDir = mkdtempSync(join(tmpdir(), "projen-pkg-test-"));
    });

    afterEach(() => {
        /* Clean up temporary directory */
        if (tempDir && existsSync(tempDir)) {
            rmSync(tempDir, { recursive: true, force: true });
        }
    }, 30000); /* 30 second timeout for cleanup */

    /* Note: We don't clean up the dist directory because it's managed by the build process */

    it.concurrent("can install package and create TypeScriptProject", () => {
        const projectDir = join(tempDir, "test-typescript");
        mkdirSync(projectDir, { recursive: true });

        /* Initialize npm project */
        execSync("npm init -y", { cwd: projectDir, stdio: "inherit" });

        /* Install the packed package */
        console.log("Installing package...");
        execSync(`npm install ${packagePath} projen`, { cwd: projectDir, stdio: "inherit" });

        /* Create .projenrc.ts that uses TypeScriptProject */
        const projenrc = `
import { TypeScriptProject } from "@nikovirtala/projen-constructs";

const project = new TypeScriptProject({
    name: "test-typescript",
    defaultReleaseBranch: "main",
    depsUpgrade: false,
    package: false,
    projenCommand: "echo",
});

project.synth();
`;
        writeFileSync(join(projectDir, ".projenrc.ts"), projenrc);

        /* Run projen to generate project files */
        console.log("Running projen...");
        execSync("npx tsx .projenrc.ts", {
            cwd: projectDir,
            stdio: "inherit",
            env: { ...process.env, CI: "false" },
        });

        /* Verify generated files exist */
        expect(existsSync(join(projectDir, "package.json"))).toBe(true);
        expect(existsSync(join(projectDir, "tsconfig.json"))).toBe(true);
        expect(existsSync(join(projectDir, "mise.toml"))).toBe(true);

        /* Verify package.json content */
        const packageJson = JSON.parse(readFileSync(join(projectDir, "package.json"), "utf-8"));
        expect(packageJson.name).toBe("test-typescript");
        expect(packageJson.type).toBe("module");
    });

    it.concurrent("can install package and create JsiiProject", () => {
        const projectDir = join(tempDir, "test-jsii");
        mkdirSync(projectDir, { recursive: true });

        /* Initialize npm project */
        execSync("npm init -y", { cwd: projectDir, stdio: "inherit" });

        /* Install the packed package */
        console.log("Installing package...");
        execSync(`npm install ${packagePath} projen`, { cwd: projectDir, stdio: "inherit" });

        /* Create .projenrc.ts that uses JsiiProject */
        const projenrc = `
import { JsiiProject } from "@nikovirtala/projen-constructs";

const project = new JsiiProject({
    name: "test-jsii",
    author: "Test Author",
    authorAddress: "test@example.com",
    repositoryUrl: "https://github.com/test/test.git",
    defaultReleaseBranch: "main",
    depsUpgrade: false,
    package: false,
    projenCommand: "echo",
});

project.synth();
`;
        writeFileSync(join(projectDir, ".projenrc.ts"), projenrc);

        /* Run projen to generate project files */
        console.log("Running projen...");
        execSync("npx tsx .projenrc.ts", {
            cwd: projectDir,
            stdio: "inherit",
            env: { ...process.env, CI: "false" },
        });

        /* Verify generated files exist */
        expect(existsSync(join(projectDir, "package.json"))).toBe(true);
        expect(existsSync(join(projectDir, "tsconfig.json")) || existsSync(join(projectDir, "tsconfig.dev.json"))).toBe(
            true,
        );

        /* Verify JSII configuration */
        const packageJson = JSON.parse(readFileSync(join(projectDir, "package.json"), "utf-8"));
        expect(packageJson.jsii).toBeDefined();
    });

    it.concurrent("can install package and create AwsCdkTypeScriptAppProject", () => {
        const projectDir = join(tempDir, "test-cdk-app");
        mkdirSync(projectDir, { recursive: true });

        /* Initialize npm project */
        execSync("npm init -y", { cwd: projectDir, stdio: "inherit" });

        /* Install the packed package */
        console.log("Installing package...");
        execSync(`npm install ${packagePath} projen`, { cwd: projectDir, stdio: "inherit" });

        /* Create .projenrc.ts that uses AwsCdkTypeScriptAppProject */
        const projenrc = `
import { AwsCdkTypeScriptAppProject } from "@nikovirtala/projen-constructs";

const project = new AwsCdkTypeScriptAppProject({
    name: "test-cdk-app",
    cdkVersion: "2.1.0",
    defaultReleaseBranch: "main",
    depsUpgrade: false,
    package: false,
    projenCommand: "echo",
});

project.synth();
`;
        writeFileSync(join(projectDir, ".projenrc.ts"), projenrc);

        /* Run projen to generate project files */
        console.log("Running projen...");
        execSync("npx tsx .projenrc.ts", {
            cwd: projectDir,
            stdio: "inherit",
            env: { ...process.env, CI: "false" },
        });

        /* Verify generated files exist */
        expect(existsSync(join(projectDir, "package.json"))).toBe(true);
        expect(existsSync(join(projectDir, "tsconfig.json"))).toBe(true);

        /* Verify CDK dependencies */
        const packageJson = JSON.parse(readFileSync(join(projectDir, "package.json"), "utf-8"));
        expect(packageJson.dependencies).toHaveProperty("aws-cdk-lib");
    });

    it.concurrent("verifies bundled dependencies are included in package", () => {
        const projectDir = join(tempDir, "verify-bundle");
        mkdirSync(projectDir, { recursive: true });

        /* Initialize npm project */
        execSync("npm init -y", { cwd: projectDir, stdio: "inherit" });

        /* Install the packed package */
        console.log("Installing package...");
        execSync(`npm install ${packagePath} projen`, { cwd: projectDir, stdio: "inherit" });

        /* Verify bundled dependencies are present in node_modules */
        const packageNodeModules = join(
            projectDir,
            "node_modules",
            "@nikovirtala",
            "projen-constructs",
            "node_modules",
        );

        /* Check for @mrgrain/jsii-struct-builder (bundled dependency) */
        const jsiiStructBuilderPath = join(packageNodeModules, "@mrgrain", "jsii-struct-builder");
        expect(existsSync(jsiiStructBuilderPath)).toBe(true);

        /* Check for case (bundled dependency) */
        const casePath = join(packageNodeModules, "case");
        expect(existsSync(casePath)).toBe(true);

        /* Create a simple project to verify runtime works */
        const projenrc = `
import { TypeScriptProject } from "@nikovirtala/projen-constructs";

const project = new TypeScriptProject({
    name: "verify-bundle",
    defaultReleaseBranch: "main",
    depsUpgrade: false,
    package: false,
    projenCommand: "echo",
});

project.synth();
`;
        writeFileSync(join(projectDir, ".projenrc.ts"), projenrc);

        /* This should not throw if bundled dependencies are properly included */
        expect(() => {
            execSync("npx tsx .projenrc.ts", {
                cwd: projectDir,
                stdio: "inherit",
                env: { ...process.env, CI: "false" },
            });
        }).not.toThrow();
    });
});
