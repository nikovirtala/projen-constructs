import { Jest } from "projen/lib/javascript";
import { JsonFile } from "projen/lib/json";
import { TypeScriptProject } from "projen/lib/typescript";
import { synthSnapshot } from "projen/lib/util/synth";
import { beforeEach, describe, expect, test } from "vitest";
import { configDefaults } from "vitest/config";
import { CoverageProvider, CoverageReporter, Environment, Pool, Vitest } from "../../src/components";

const configPrefix = "export default defineConfig(";

/**
 * Parses the object passed to `defineConfig` in a generated vitest config file.
 *
 * The result is untyped JSON, so tests can reach into nested options without casts.
 */
// biome-ignore lint/suspicious/noExplicitAny: parsed JSON of arbitrary shape
type ParsedConfig = { test: Record<string, any>; [key: string]: any };

function parseConfig(file: string): ParsedConfig {
    const start = file.indexOf(configPrefix);
    expect(start, "defineConfig call not found").toBeGreaterThan(-1);
    expect(file.trimEnd().endsWith(");"), "defineConfig call must end the file").toBe(true);

    return JSON.parse(file.slice(start + configPrefix.length, file.trimEnd().length - 2));
}

describe("jest", () => {
    test("throws when jest is enabled", () => {
        const project = new TypeScriptProject({
            name: "test-node-project",
            githubOptions: { mergify: false },
            projenDevDependency: false,
            defaultReleaseBranch: "main",
            jest: true,
        });

        new Vitest(project);
        expect(() => synthSnapshot(project)).toThrow("vitest cannot be used together with jest");
    });

    test("throws when jest is added after vitest", () => {
        const project = new TypeScriptProject({
            name: "test-node-project",
            githubOptions: { mergify: false },
            projenDevDependency: false,
            defaultReleaseBranch: "main",
            jest: false,
        });

        new Vitest(project);
        new Jest(project);
        expect(() => synthSnapshot(project)).toThrow("vitest cannot be used together with jest");
    });
});

describe("vitest", () => {
    let project: TypeScriptProject;

    beforeEach(() => {
        project = new TypeScriptProject({
            name: "test-node-project",
            githubOptions: { mergify: false },
            projenDevDependency: false,
            defaultReleaseBranch: "main",
            jest: false,
        });
    });

    test("node project with vitest defaults", () => {
        expect(() => new Vitest(project)).not.toThrow();

        const snapshot = synthSnapshot(project);

        expect(snapshot["package.json"].devDependencies.vitest).toBe("^5");
        expect(snapshot["package.json"].devDependencies["@vitest/coverage-v8"]).toBe("^5");
        expect(snapshot["package.json"].scripts["test:update"]).toBe("projen test:update");
        expect(snapshot["package.json"].scripts["test:watch"]).toBe("projen test:watch");

        const file = snapshot["vitest.config.ts"];
        expect(file).toMatch(
            /^import \{ defineConfig \} from "@nikovirtala\/projen-constructs\/lib\/vitest-define-config";\n/,
        );

        expect(parseConfig(file)).toEqual({
            test: {
                bail: 0,
                coverage: {
                    enabled: true,
                    provider: "v8",
                    reporter: ["text", "lcov"],
                    reportsDirectory: "coverage",
                },
                environment: "node",
                exclude: [
                    "**/node_modules/**",
                    "**/dist/**",
                    "**/cypress/**",
                    "**/.{idea,git,cache,output,temp}/**",
                    "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*",
                ],
                globals: false,
                include: configDefaults.include,
                isolate: true,
                passWithNoTests: true,
                printConsoleTrace: true,
                pool: "forks",
                slowTestThreshold: 300,
                typecheck: {
                    enabled: true,
                    checker: "tsc --noEmit",
                    tsconfig: "test/tsconfig.json",
                },
                update: true,
            },
        });
    });

    test("custom environment", () => {
        const vitest = new Vitest(project);
        vitest.configureEnvironment(Environment.JSDOM);

        const snapshot = synthSnapshot(project);
        expect(parseConfig(snapshot["vitest.config.ts"]).test.environment).toBe("jsdom");
    });

    test("custom coverage provider", () => {
        const vitest = new Vitest(project);
        vitest.configureCoverageProvider(CoverageProvider.ISTANBUL);

        const snapshot = synthSnapshot(project);

        expect(parseConfig(snapshot["vitest.config.ts"]).test.coverage.provider).toBe("istanbul");
        expect(snapshot["package.json"].devDependencies["@vitest/coverage-istanbul"]).toBe("^5");
    });

    test("custom coverage reporters", () => {
        const vitest = new Vitest(project);
        vitest.configureCoverageReporters([CoverageReporter.HTML, CoverageReporter.JSON]);

        const snapshot = synthSnapshot(project);
        expect(parseConfig(snapshot["vitest.config.ts"]).test.coverage.reporter).toEqual(["html", "json"]);
    });

    test("custom include patterns", () => {
        const vitest = new Vitest(project);
        vitest.addInclude("**/*.spec.ts");

        const snapshot = synthSnapshot(project);
        expect(parseConfig(snapshot["vitest.config.ts"]).test.include).toContain("**/*.spec.ts");
    });

    test("custom exclude patterns", () => {
        const vitest = new Vitest(project);
        vitest.addExclude("**/*.test.js");

        const snapshot = synthSnapshot(project);
        expect(parseConfig(snapshot["vitest.config.ts"]).test.exclude).toContain("**/*.test.js");
    });

    describe("extra config", () => {
        test("deep-merges extraTestConfig into the test options", () => {
            new Vitest(project, {
                extraTestConfig: {
                    setupFiles: ["test/setup.ts"],
                    expect: { requireAssertions: true },
                    coverage: { exclude: ["src/generated/**"] },
                },
            });

            const { test } = parseConfig(synthSnapshot(project)["vitest.config.ts"]);

            expect(test.setupFiles).toEqual(["test/setup.ts"]);
            expect(test.expect).toEqual({ requireAssertions: true });
            /* nested objects are merged, so the generated coverage options are kept */
            expect(test.coverage).toEqual({
                enabled: true,
                provider: "v8",
                reporter: ["text", "lcov"],
                reportsDirectory: "coverage",
                exclude: ["src/generated/**"],
            });
        });

        test("extraTestConfig overrides generated test options", () => {
            new Vitest(project, {
                config: { environment: Environment.JSDOM },
                extraTestConfig: { environment: "happy-dom", include: ["only/**/*.test.ts"] },
            });

            const { test } = parseConfig(synthSnapshot(project)["vitest.config.ts"]);

            expect(test.environment).toBe("happy-dom");
            /* arrays replace the generated value */
            expect(test.include).toEqual(["only/**/*.test.ts"]);
        });

        test("adds extraConfig next to test", () => {
            new Vitest(project, {
                extraConfig: { resolve: { alias: { $amplify: "./.amplify/generated" } } },
            });

            const config = parseConfig(synthSnapshot(project)["vitest.config.ts"]);

            expect(config.resolve).toEqual({ alias: { $amplify: "./.amplify/generated" } });
            expect(config.test.environment).toBe("node");
        });

        test("throws when extraConfig contains test", () => {
            expect(() => new Vitest(project, { extraConfig: { test: { globals: true } } })).toThrow(
                "vitest extraConfig must not contain `test`, use extraTestConfig for test options",
            );
        });

        test("keeps extra config when the config is regenerated", () => {
            const vitest = new Vitest(project, {
                extraTestConfig: { setupFiles: ["test/setup.ts"] },
                extraConfig: { resolve: { alias: { "@": "/src" } } },
            });
            vitest.configureEnvironment(Environment.JSDOM);

            const config = parseConfig(synthSnapshot(project)["vitest.config.ts"]);

            expect(config.test.environment).toBe("jsdom");
            expect(config.test.setupFiles).toEqual(["test/setup.ts"]);
            expect(config.resolve).toEqual({ alias: { "@": "/src" } });
        });
    });

    test("handles non-existent dependencies gracefully", () => {
        const vitest = new Vitest(project);

        expect(() => vitest.configureCoverageProvider(CoverageProvider.V8)).not.toThrow();
        expect(() => vitest.configureCoverageProvider(CoverageProvider.ISTANBUL)).not.toThrow();
        expect(() => vitest.configureCoverageProvider(CoverageProvider.V8)).not.toThrow();
    });

    test("initialize with custom options", () => {
        new JsonFile(project, "tsconfig.custom.json", {
            obj: {
                compilerOptions: {
                    types: [],
                },
            },
            readonly: false,
        });

        new Vitest(project, {
            configFilePath: "custom.vitest.config.ts",
            vitestVersion: "^4",
            config: {
                environment: Environment.HAPPY_DOM,
                isolate: false,
                pool: Pool.THREADS,
                globals: false,
                coverageEnabled: false,
                coverageProvider: CoverageProvider.ISTANBUL,
                coverageReporters: [CoverageReporter.HTML],
                coverageDirectory: "custom-coverage",
                include: ["**/*.test.ts"],
                exclude: ["**/*.spec.js"],
                typecheckEnabled: false,
                typecheckChecker: "tsc",
                typecheckTsconfig: "tsconfig.custom.json",
                passWithNoTests: false,
                bail: 5,
                updateSnapshots: false,
                printConsoleTrace: false,
                slowTestThreshold: 500,
            },
        });

        const snapshot = synthSnapshot(project);
        expect(parseConfig(snapshot["custom.vitest.config.ts"])).toEqual({
            test: {
                bail: 5,
                coverage: {
                    enabled: false,
                    provider: "istanbul",
                    reporter: ["html"],
                    reportsDirectory: "custom-coverage",
                },
                environment: "happy-dom",
                exclude: ["**/*.spec.js"],
                globals: false,
                include: ["**/*.test.ts"],
                isolate: false,
                passWithNoTests: false,
                printConsoleTrace: false,
                pool: "threads",
                slowTestThreshold: 500,
                typecheck: {
                    enabled: false,
                    checker: "tsc",
                    tsconfig: "tsconfig.custom.json",
                },
                update: false,
            },
        });
        expect(snapshot["package.json"].devDependencies.vitest).toBe("^4");
    });

    describe("globals", () => {
        test("adds vitest/globals to tsconfig when globals enabled", () => {
            new Vitest(project, {
                config: {
                    globals: true,
                },
            });

            const snapshot = synthSnapshot(project);
            expect(snapshot["test/tsconfig.json"].compilerOptions.types).toContain("vitest/globals");
        });

        test("does not add vitest/globals to tsconfig when globals disabled", () => {
            new Vitest(project);

            const snapshot = synthSnapshot(project);
            expect(snapshot["test/tsconfig.json"].compilerOptions.types || []).not.toContain("vitest/globals");
        });

        test("updates tsconfig when globals configuration changes (false --> true)", () => {
            const vitest = new Vitest(project);

            vitest.configureGlobals();
            const snapshot = synthSnapshot(project);
            expect(snapshot["test/tsconfig.json"].compilerOptions.types).toContain("vitest/globals");
        });

        test("throws when tsconfig file doesn't exist", () => {
            const customProject = new TypeScriptProject({
                name: "test-project",
                defaultReleaseBranch: "main",
                jest: false,
            });

            const vitest = new Vitest(customProject, {
                config: {
                    globals: true,
                },
            });

            customProject.tryRemoveFile("test/tsconfig.json");

            expect(() => vitest.configureGlobals()).toThrow("unable to find tsconfig");
        });
    });

    describe("of", () => {
        test("returns vitest instance when found", () => {
            const vitest = new Vitest(project);

            const found = Vitest.of(project);
            expect(found).toBe(vitest);
        });

        test("returns undefined when not found", () => {
            const found = Vitest.of(project);
            expect(found).toBeUndefined();
        });
    });
});
