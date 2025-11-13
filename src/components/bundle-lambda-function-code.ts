import * as path from "node:path";
import { basename, dirname, extname, join, posix, sep } from "node:path";
import { pascal } from "case";
import { Component, DependencyType, javascript, type Project, SourceCode, type Task, type typescript } from "projen";

export function renderBundleName(entrypoint: string) {
    const parts = join(entrypoint).split(sep);
    if (parts[0] === "src") {
        parts.shift();
    }
    const p = parts.join(sep);
    const dir = dirname(p);
    const base = basename(p, extname(p));
    return join(dir, base);
}

export function convertToPosixPath(p: string) {
    return p.split(sep).join(posix.sep);
}

export interface BundlerOptions {
    readonly esbuildVersion?: string;
    readonly assetsDir?: string;
    readonly addToPreCompile?: boolean;
    readonly loaders?: { [key: string]: string };
}

export class Bundler extends Component {
    public static of(project: Project): Bundler | undefined {
        const isBundler = (o: Component): o is Bundler => o instanceof Bundler;
        return project.components.find(isBundler);
    }

    public readonly esbuildVersion: string | undefined;
    public readonly bundledir: string;

    private _task: Task | undefined;
    private readonly addToPreCompile: boolean;
    private readonly loaders?: { [key: string]: string };

    constructor(project: Project, options: BundlerOptions = {}) {
        super(project);
        this.esbuildVersion = options.esbuildVersion;
        this.bundledir = options.assetsDir ?? "assets";
        this.addToPreCompile = options.addToPreCompile ?? true;
        this.loaders = options.loaders;
    }

    public get bundleTask(): Task {
        if (!this._task) {
            this.addBundlingSupport();
            this._task = this.project.tasks.addTask("bundle", {
                description: "Prepare assets",
            });
            if (this.addToPreCompile) {
                this.project.preCompileTask.spawn(this._task);
            }
        }
        return this._task;
    }

    public addBundle(entrypoint: string, options: BundlingOptions): Bundle {
        const name = renderBundleName(entrypoint);
        const outdir = path.posix.join(this.bundledir, name);
        const outfile = path.posix.join(outdir, options.outfile ?? "index.mjs");
        const target = options.target ?? "esnext";
        const platform = options.platform ?? "node";
        const format = options.format ?? "esm";
        const sourcemap = options.sourcemap ?? true;
        const sourcesContent = options.sourcesContent ?? false;
        const minify = options.minify ?? true;
        const mainFields = options.mainFields ?? "module,main";
        const banner =
            options.banner ??
            ":js=import { createRequire as topLevelCreateRequire } from 'module';const require = topLevelCreateRequire(import.meta.url)";

        const args = [
            "esbuild",
            "--bundle",
            entrypoint,
            `--target="${target}"`,
            `--platform="${platform}"`,
            `--outfile="${outfile}"`,
        ];

        const tsconfig = options.tsconfigPath ?? false;
        if (tsconfig) {
            args.push(`--tsconfig="${tsconfig}"`);
        }

        for (const x of options.externals ?? []) {
            args.push(`--external:${x}`);
        }

        if (sourcemap) {
            args.push("--sourcemap");
        }

        if (sourcesContent) {
            args.push(`--sources-content=${sourcesContent}`);
        }

        if (minify) {
            args.push("--minify");
        }

        if (format) {
            args.push(`--format=${format}`);
        }

        if (mainFields) {
            args.push(`--main-fields=${mainFields}`);
        }

        if (banner) {
            args.push(`--banner${banner}`);
        }

        const loaders = (options.loaders ?? false) ? options.loaders : (this.loaders ?? false);
        if (loaders) {
            for (const [extension, loader] of Object.entries(loaders)) {
                args.push(`--loader:.${extension}=${loader}`);
            }
        }

        const bundleTask = this.project.addTask(`bundle:${name}`, {
            description: `Create a JavaScript bundle from ${entrypoint}`,
            exec: args.join(" "),
        });

        this.bundleTask.spawn(bundleTask);

        return {
            bundleTask: bundleTask,
            outdir: outdir,
            outfile: outfile,
        };
    }

    private addBundlingSupport() {
        const ignoreEntry = `/${this.bundledir}/`;
        this.project.addGitIgnore(ignoreEntry);
        this.project.addPackageIgnore(`!${ignoreEntry}`);
        const dep = this.esbuildVersion ? `esbuild@${this.esbuildVersion}` : "esbuild";
        this.project.deps.addDependency(dep, DependencyType.BUILD);
    }
}

export interface Bundle {
    readonly bundleTask: Task;
    readonly outfile: string;
    readonly outdir: string;
}

export interface BundlingOptions {
    readonly externals?: string[];
    readonly sourcemap?: boolean;
    readonly target?: string;
    readonly platform?: string;
    readonly outfile?: string;
    readonly tsconfigPath?: string;
    readonly loaders?: { [key: string]: string };
    readonly format?: string;
    readonly minify?: boolean;
    readonly sourcesContent?: boolean;
    readonly mainFields?: string;
    readonly banner?: string;
}

export interface LambdaFunctionCodeBundleOptions {
    readonly entrypoint: string;
    readonly extension: string;
    readonly constructFile?: string;
    readonly constructName?: string;
    readonly bundlingOptions?: BundlingOptions;
}

export class LambdaFunctionCodeBundle extends Component {
    constructor(project: Project, options: LambdaFunctionCodeBundleOptions) {
        super(project);

        const bundler = Bundler.of(project);
        if (!bundler) {
            throw new Error("No bundler found. Please add a Bundler component to your project.");
        }

        const eslint = javascript.Eslint.of(project);
        eslint?.allowDevDeps(options.entrypoint);

        const entrypoint = options.entrypoint;
        const extension = options.extension ?? ".lambda.ts";

        if (!entrypoint.endsWith(extension)) {
            throw new Error(`${entrypoint} must have a ${extension} extension`);
        }

        const basePath = path.posix.join(path.dirname(entrypoint), path.basename(entrypoint, extension));
        const constructFile = options.constructFile ?? `${basePath}-code.ts`;

        if (path.extname(constructFile) !== ".ts") {
            throw new Error(`Construct file name "${constructFile}" must have a .ts extension`);
        }

        const constructName = options.constructName ?? `${pascal(path.basename(basePath))}FunctionCode`;

        const bundle = bundler.addBundle(entrypoint, {
            ...options.bundlingOptions,
            tsconfigPath: (project as typescript.TypeScriptProject)?.tsconfigDev?.fileName,
        });

        const outfileAbs = path.join(project.outdir, bundle.outfile);
        const constructAbs = path.join(project.outdir, constructFile);
        const relativeOutfile = path.relative(path.dirname(constructAbs), path.dirname(outfileAbs));

        const src = new SourceCode(project, constructFile);
        if (src.marker) {
            src.line(`// ${src.marker}`);
        }
        src.line("import * as path from 'path';");
        src.line("import { aws_lambda } from 'aws-cdk-lib';");
        src.line();
        src.open(`export const ${constructName} = aws_lambda.Code.fromAsset(`);
        src.line(`path.join(__dirname, '${convertToPosixPath(relativeOutfile)}'),`);
        src.close(");");

        this.project.logger.verbose(`${basePath}: construct "${constructName}" generated under "${constructFile}"`);
        this.project.logger.verbose(`${basePath}: bundle task "${bundle.bundleTask.name}"`);
    }
}

export interface LambdaFunctionCodeBundlerOptions {
    readonly extension: string;
    readonly srcdir: string;
    readonly bundleOptions?: LambdaFunctionCodeBundleOptions;
}

export class LambdaFunctionCodeBundler extends Component {
    constructor(project: Project, options: LambdaFunctionCodeBundlerOptions) {
        super(project);

        const entrypoints: string[] = [];

        for (const entrypoint of entrypoints) {
            new LambdaFunctionCodeBundle(this.project, {
                entrypoint: entrypoint,
                extension: options.extension,
                ...options.bundleOptions,
            });
        }
    }
}
