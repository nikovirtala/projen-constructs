import * as path from "node:path";
import { basename, dirname, extname, join, posix, sep } from "node:path";
import { pascal } from "case";
import {
    Component,
    cdk,
    DependencyType,
    javascript,
    type Project,
    SourceCode,
    type Task,
    type typescript,
} from "projen";

/**
 * Renders the bundle name of an entrypoint: its path without the extension and without a leading `src` directory.
 *
 * @example renderBundleName("src/handlers/foo.lambda.ts") // "handlers/foo.lambda"
 */
export function renderBundleName(entrypoint: string) {
    const parts = join(entrypoint).split(sep);
    if (parts[0] === "src") {
        parts.shift(); // just remove 'src' if its the first element for ergonomics
    }
    const p = parts.join(sep);
    const dir = dirname(p);
    const base = basename(p, extname(p));
    return join(dir, base);
}

/**
 * Converts the given path string to posix if it wasn't already.
 */
export function convertToPosixPath(p: string) {
    return p.split(sep).join(posix.sep);
}

/**
 * Options for `Bundler`.
 */
export interface BundlerOptions {
    /**
     * The semantic version requirement for `esbuild`.
     *
     * @default - no specific version (implies latest)
     */
    readonly esbuildVersion?: string;

    /**
     * Output directory for all bundles.
     *
     * @default "assets"
     */
    readonly assetsDir?: string;

    /**
     * Install the `bundle` command as a pre-compile phase.
     *
     * @default true
     */
    readonly addToPreCompile?: boolean;

    /**
     * Map of file extensions (without dot) and loaders to use for this file type.
     * Loaders are appended to the esbuild command by `--loader:.extension=loader`
     *
     * @default - no loaders
     */
    readonly loaders?: { [key: string]: string };
}

/**
 * Adds support for bundling JavaScript applications and dependencies into a
 * single file.
 */
export class Bundler extends Component {
    /**
     * Returns the `Bundler` instance associated with a project or `undefined` if
     * there is no Bundler.
     *
     * @param project The project
     * @returns A bundler
     */
    public static of(project: Project): Bundler | undefined {
        const isBundler = (o: Component): o is Bundler => o instanceof Bundler;
        return project.components.find(isBundler);
    }

    /**
     * The semantic version requirement for `esbuild` (if defined).
     */
    public readonly esbuildVersion: string | undefined;

    /**
     * Root bundle directory.
     */
    public readonly bundledir: string;

    private _task: Task | undefined;
    private readonly addToPreCompile: boolean;
    private readonly loaders?: { [key: string]: string };

    /**
     * Creates a `Bundler`.
     */
    constructor(project: Project, options: BundlerOptions = {}) {
        super(project);
        this.esbuildVersion = options.esbuildVersion;
        this.bundledir = options.assetsDir ?? "assets";
        this.addToPreCompile = options.addToPreCompile ?? true;
        this.loaders = options.loaders;
    }

    /**
     * Gets or creates the singleton "bundle" task of the project.
     *
     * If the project doesn't have a "bundle" task, it will be created and spawned
     * during the pre-compile phase (unless `addToPreCompile` is `false`).
     */
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

    /**
     * Adds a task to the project which bundles a specific entrypoint and all of
     * its dependencies into a single javascript output file.
     *
     * @param entrypoint The relative path of the artifact within the project
     * @param options Bundling options
     */
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

    /**
     * Add bundling support to a project. This is called implicitly when
     * `bundleTask` is referenced first. It adds the dependency on `esbuild`,
     * gitignore/npmignore, etc.
     */
    private addBundlingSupport() {
        const ignoreEntry = `/${this.bundledir}/`;
        this.project.addGitIgnore(ignoreEntry);
        this.project.addPackageIgnore(`!${ignoreEntry}`);
        const dep = this.esbuildVersion ? `esbuild@${this.esbuildVersion}` : "esbuild";
        this.project.deps.addDependency(dep, DependencyType.BUILD);
    }
}

/**
 * A bundle created by `Bundler.addBundle`.
 */
export interface Bundle {
    /**
     * The task that produces this bundle.
     */
    readonly bundleTask: Task;

    /**
     * Location of the output file (relative to project root).
     */
    readonly outfile: string;

    /**
     * Base directory containing the output file (relative to project root).
     */
    readonly outdir: string;
}

/**
 * Options for bundling.
 */
export interface BundlingOptions {
    /**
     * You can mark a file or a package as external to exclude it from your build.
     * Instead of being bundled, the import will be preserved (using require for
     * the iife and cjs formats and using import for the esm format) and will be
     * evaluated at run time instead.
     *
     * This has several uses. First of all, it can be used to trim unnecessary
     * code from your bundle for a code path that you know will never be executed.
     * For example, a package may contain code that only runs in node but you will
     * only be using that package in the browser. It can also be used to import
     * code in node at run time from a package that cannot be bundled. For
     * example, the fsevents package contains a native extension, which esbuild
     * doesn't support.
     *
     * @default []
     */
    readonly externals?: string[];

    /**
     * Include a source map in the bundle.
     *
     * @default true
     */
    readonly sourcemap?: boolean;

    /**
     * esbuild target.
     *
     * @default "esnext"
     */
    readonly target?: string;

    /**
     * esbuild platform.
     *
     * @default "node"
     */
    readonly platform?: string;

    /**
     * Bundler output path relative to the asset's output directory.
     *
     * @default "index.mjs"
     */
    readonly outfile?: string;

    /**
     * The path of the tsconfig.json file to use for bundling.
     *
     * `LambdaFunctionCodeBundle` always sets this to the project's development tsconfig.
     *
     * @default - no tsconfig is passed to esbuild
     */
    readonly tsconfigPath?: string;

    /**
     * Map of file extensions (without dot) and loaders to use for this file type.
     * Loaders are appended to the esbuild command by `--loader:.extension=loader`
     *
     * @default - the loaders of the `Bundler`
     */
    readonly loaders?: { [key: string]: string };

    /**
     * Output format for the generated JavaScript files: `"iife"`, `"cjs"` or `"esm"`.
     *
     * @default "esm"
     * @see https://esbuild.github.io/api/#format
     */
    readonly format?: string;

    /**
     * Minify the bundle.
     *
     * @default true
     * @see https://esbuild.github.io/api/#minify
     */
    readonly minify?: boolean;

    /**
     * Include the original source code in the source map.
     *
     * @default false
     * @see https://esbuild.github.io/api/#sources-content
     */
    readonly sourcesContent?: boolean;

    /**
     * Comma-separated list of `package.json` fields esbuild tries when resolving a package.
     *
     * @default "module,main"
     * @see https://esbuild.github.io/api/#main-fields
     */
    readonly mainFields?: string;

    /**
     * esbuild `--banner` argument, appended as is (so it starts with the file type, e.g. `:js=`).
     *
     * The default defines `require` so that CommonJS dependencies work in an ES module bundle.
     *
     * @default ":js=import { createRequire as topLevelCreateRequire } from 'module';const require = topLevelCreateRequire(import.meta.url)"
     * @see https://esbuild.github.io/api/#banner
     */
    readonly banner?: string;
}

/**
 * Options for `LambdaFunctionCodeBundle`.
 */
export interface LambdaFunctionCodeBundleOptions {
    /**
     * A path from the project root directory to a TypeScript file which contains
     * the AWS Lambda handler entrypoint (exports a `handler` function).
     *
     * This is relative to the root directory of the project.
     *
     * @example "src/subdir/foo.lambda.ts"
     */
    readonly entrypoint: string;

    /**
     * Suffix for AWS Lambda handlers.
     *
     * @example ".lambda.ts"
     */
    readonly extension: string;

    /**
     * The name of the generated TypeScript source file. This file should also be
     * under the source tree.
     *
     * @default - The path of the entrypoint file, with the `-code.ts` suffix
     * instead of the extension (e.g. `src/foo-code.ts`).
     */
    readonly constructFile?: string;

    /**
     * The name of the generated `aws_lambda.Code` constant.
     *
     * @default - A pascal cased version of the name of the entrypoint file, with
     * the suffix `FunctionCode` (e.g. `ResizeImageFunctionCode`).
     */
    readonly constructName?: string;

    /**
     * Bundling options for this AWS Lambda Function.
     *
     * @default - the defaults of `BundlingOptions`
     */
    readonly bundlingOptions?: BundlingOptions;
}

/**
 * Generates a pre-bundled AWS Lambda Function code asset from handler code.
 *
 * Adds a task to the project's `Bundler` that uses `esbuild` to bundle the
 * handler into the assets directory, and generates a file (e.g. `src/foo-code.ts`)
 * exporting an `aws_lambda.Code` constant (e.g. `FooFunctionCode`) that points to
 * the bundle. Pass it as the `code` of an `aws_lambda.Function`.
 *
 * Requires a `Bundler` component in the project.
 *
 * @example
 *
 * new Bundler(myProject);
 * new LambdaFunctionCodeBundle(myProject, {
 *   entrypoint: "src/foo.lambda.ts",
 *   extension: ".lambda.ts",
 * });
 */
export class LambdaFunctionCodeBundle extends Component {
    /**
     * Defines a pre-bundled AWS Lambda Function code asset from handler code.
     *
     * @param project The project to use
     * @param options Options
     */
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

/**
 * Options for `LambdaFunctionCodeBundler`
 */
export interface LambdaFunctionCodeBundlerOptions {
    /**
     * Locate files with the given extension.
     *
     * @example ".lambda.ts"
     */
    readonly extension: string;

    /**
     * Project source tree (relative to project output directory).
     */
    readonly srcdir: string;

    /**
     * Options for AWS Lambda Function bundling, applied to every discovered entrypoint.
     *
     * The `entrypoint` and `extension` given here are ignored: each bundle uses its
     * discovered entrypoint and the `extension` of the bundler.
     *
     * @default - the defaults of `LambdaFunctionCodeBundleOptions`
     */
    readonly bundleOptions?: LambdaFunctionCodeBundleOptions;
}

/**
 * Creates Lambda Function code bundles from entrypoints discovered in the project's source tree.
 */
export class LambdaFunctionCodeBundler extends cdk.AutoDiscoverBase {
    constructor(project: Project, options: LambdaFunctionCodeBundlerOptions) {
        super(project, {
            projectdir: options.srcdir,
            extension: options.extension,
        });

        for (const entrypoint of this.entrypoints) {
            new LambdaFunctionCodeBundle(this.project, {
                ...options.bundleOptions,
                entrypoint: entrypoint,
                extension: options.extension,
            });
        }
    }
}
