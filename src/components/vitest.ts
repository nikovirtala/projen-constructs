import * as path from "node:path";
import { Component } from "projen/lib/component";
import { DependencyType } from "projen/lib/dependencies";
import { Jest, type NodeProject } from "projen/lib/javascript";
import { TextFile } from "projen/lib/textfile";

export enum Environment {
    EDGE_RUNTIME = "edge-runtime",
    HAPPY_DOM = "happy-dom",
    JSDOM = "jsdom",
    NODE = "node",
}

export enum Pool {
    FORKS = "forks",
    THREADS = "threads",
    VMFORKS = "vmforks",
    VMTHREADS = "vmthreads",
}

export enum CoverageProvider {
    ISTANBUL = "istanbul",
    V8 = "v8",
}

export enum CoverageReporter {
    CLOVER = "clover",
    HTML = "html",
    JSON = "json",
    LCOV = "lcov",
    TEXT = "text",
}

export interface VitestConfigOptions {
    readonly include?: Array<string>;
    readonly exclude?: Array<string>;
    readonly environment?: Environment;
    readonly isolate?: boolean;
    readonly pool?: Pool;
    readonly globals?: boolean;
    readonly coverageEnabled?: boolean;
    readonly coverageProvider?: CoverageProvider;
    readonly coverageReporters?: Array<CoverageReporter>;
    readonly coverageDirectory?: string;
    readonly typecheckEnabled?: boolean;
    readonly typecheckChecker?: string;
    readonly typecheckTsconfig?: string;
    readonly passWithNoTests?: boolean;
    readonly bail?: number;
    readonly updateSnapshots?: boolean;
    readonly printConsoleTrace?: boolean;
    readonly slowTestThreshold?: number;
}

export interface VitestOptions {
    readonly configFilePath?: string;
    readonly config?: VitestConfigOptions;
    readonly vitestVersion?: string;
}

export class Vitest extends Component {
    public static of(project: NodeProject): Vitest | undefined {
        const isVitest = (c: Component): c is Vitest => c instanceof Vitest;
        return project.components.find(isVitest);
    }

    private readonly configFilePath: string;
    private readonly include: Set<string>;
    private readonly exclude: Set<string>;
    private readonly isolate: boolean;
    private readonly pool: Pool;
    private readonly coverageEnabled: boolean;
    private readonly typecheckEnabled: boolean;
    private readonly typecheckChecker: string;
    private readonly typecheckTsconfig: string;
    private readonly passWithNoTests: boolean;
    private readonly bail: number;
    private readonly updateSnapshots: boolean;
    private environment: string;
    private globals: boolean;
    private coverageProvider: CoverageProvider;
    private coverageReporters: Array<CoverageReporter>;
    private coverageDirectory: string;
    private version: string;
    private readonly printConsoleTrace: boolean;
    private readonly slowTestThreshold: number;

    constructor(project: NodeProject, options: VitestOptions = {}) {
        super(project);

        this.configFilePath = options.configFilePath ?? "vitest.config.ts";
        this.include = new Set(options.config?.include ?? ["**/*.{test,spec}.?(c|m)[jt]s?(x)"]);
        this.exclude = new Set(
            options.config?.exclude ?? [
                "**/node_modules/**",
                "**/dist/**",
                "**/cypress/**",
                "**/.{idea,git,cache,output,temp}/**",
                "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*",
            ],
        );
        this.isolate = options.config?.isolate ?? true;
        this.pool = options.config?.pool ?? Pool.FORKS;
        this.coverageEnabled = options.config?.coverageEnabled ?? true;
        this.typecheckEnabled = options.config?.typecheckEnabled ?? this.isTypescriptProject();
        this.typecheckChecker = options.config?.typecheckChecker ?? "tsc --noEmit";
        this.typecheckTsconfig = options.config?.typecheckTsconfig ?? "tsconfig.dev.json";
        this.passWithNoTests = options.config?.passWithNoTests ?? true;
        this.bail = options.config?.bail ?? 0;
        this.environment = options.config?.environment ?? Environment.NODE;
        this.globals = options.config?.globals ?? false;
        this.coverageProvider = options.config?.coverageProvider ?? CoverageProvider.V8;
        this.coverageReporters = options.config?.coverageReporters ?? [CoverageReporter.TEXT, CoverageReporter.LCOV];
        this.coverageDirectory = options.config?.coverageDirectory ?? "coverage";
        this.version = options.vitestVersion ?? "^4";
        this.updateSnapshots = options.config?.updateSnapshots ?? true;
        this.printConsoleTrace = options.config?.printConsoleTrace ?? true;
        this.slowTestThreshold = options.config?.slowTestThreshold ?? 300;

        project.addDevDeps(`vitest@${this.version}`);
        this.configureCoverageProvider(this.coverageProvider);

        if (this.globals && this.isTypescriptProject() && this.project.tryFindObjectFile(this.typecheckTsconfig)) {
            this.configureGlobals();
        }

        const coverageDirectoryPath = path.posix.join("/", this.coverageDirectory, "/");
        project.npmignore?.exclude(coverageDirectoryPath);
        project.gitignore.exclude(coverageDirectoryPath);

        this.addTestCommand();
        this.synthesizeConfig();
    }

    public override preSynthesize() {
        super.preSynthesize();

        for (const component of this.project.components) {
            if (component instanceof Jest) {
                throw new Error("vitest cannot be used together with jest");
            }
        }
    }

    public addInclude(pattern: string): void {
        this.include.add(pattern);
        this.synthesizeConfig();
    }

    public addExclude(pattern: string): void {
        this.exclude.add(pattern);
        this.synthesizeConfig();
    }

    public configureEnvironment(environment: Environment): void {
        this.environment = environment;
        this.synthesizeConfig();
    }

    public configureCoverageProvider(provider: CoverageProvider): void {
        const providerPackages = {
            [CoverageProvider.V8]: `@vitest/coverage-v8@${this.version}`,
            [CoverageProvider.ISTANBUL]: `@vitest/coverage-istanbul@${this.version}`,
        };

        for (const providerPackage of Object.values(providerPackages)) {
            try {
                this.project.deps.removeDependency(providerPackage);
            } catch {
                // ignore
            }
        }

        this.project.deps.addDependency(providerPackages[provider], DependencyType.DEVENV);
        this.coverageProvider = provider;
        this.synthesizeConfig();
    }

    public configureCoverageReporters(reporters: Array<CoverageReporter>): void {
        this.coverageReporters = reporters;
        this.synthesizeConfig();
    }

    public configureGlobals(): void {
        this.updateTsConfig();
        this.synthesizeConfig();
    }

    private updateTsConfig(): void {
        const tsconfig = this.project.tryFindObjectFile(this.typecheckTsconfig);

        if (!tsconfig) {
            throw new Error("unable to find tsconfig");
        }

        tsconfig.addToArray("compilerOptions.types", "vitest/globals");
    }

    private isTypescriptProject(): boolean {
        return this.project.deps.tryGetDependency("typescript") !== undefined;
    }

    private addTestCommand(): void {
        this.project.testTask.exec("vitest run", {
            receiveArgs: true,
        });

        const testWatch = this.project.tasks.tryFind("test:watch");
        if (!testWatch) {
            this.project.addTask("test:watch", {
                exec: "vitest watch",
                receiveArgs: true,
            });
        }

        const testUpdateSnapshots = this.project.tasks.tryFind("test:update");
        if (!testUpdateSnapshots) {
            this.project.addTask("test:update", {
                exec: "vitest --update",
                receiveArgs: true,
            });
        }
    }

    private synthesizeConfig(): void {
        this.project.tryRemoveFile(this.configFilePath);

        new TextFile(this, this.configFilePath, {
            lines: this.renderConfig(),
        });
    }

    private renderConfig(): Array<string> {
        const project = this.project as NodeProject;
        const packageName = project.package.packageName;
        const defineConfigImport =
            packageName === "@nikovirtala/projen-vitest"
                ? 'import { defineConfig } from "vitest/config";'
                : 'import { defineConfig } from "@nikovirtala/projen-vitest/lib/bundled-define-config";';

        return [
            defineConfigImport,
            "",
            "export default defineConfig({",
            "  test: {",
            ...this.renderTestOptions(),
            "  },",
            "});",
        ];
    }

    private renderTestOptions(): Array<string> {
        const lines: Array<string> = [];

        lines.push(`    bail: ${this.bail},`);
        lines.push("    coverage: {");
        lines.push(`      enabled: ${this.coverageEnabled},`);
        lines.push(`      provider: "${this.coverageProvider}",`);
        lines.push(`      reporter: ${JSON.stringify(this.coverageReporters)},`);
        lines.push(`      reportsDirectory: "${this.coverageDirectory}",`);
        lines.push("    },");
        lines.push(`    environment: "${this.environment}",`);
        lines.push(`    exclude: ${JSON.stringify(Array.from(this.exclude))},`);
        lines.push(`    globals: ${this.globals},`);
        lines.push(`    include: ${JSON.stringify(Array.from(this.include))},`);
        lines.push(`    isolate: ${this.isolate},`);
        lines.push(`    passWithNoTests: ${this.passWithNoTests},`);
        lines.push(`    printConsoleTrace: ${this.printConsoleTrace},`);
        lines.push(`    pool: "${this.pool}",`);
        lines.push(`    slowTestThreshold: ${this.slowTestThreshold},`);
        lines.push("    typecheck: {");
        lines.push(`      enabled: ${this.typecheckEnabled},`);
        lines.push(`      checker: "${this.typecheckChecker}",`);
        lines.push(`      tsconfig: "${this.typecheckTsconfig}",`);
        lines.push("    },");
        lines.push(`    update: ${this.updateSnapshots},`);

        return lines;
    }
}
