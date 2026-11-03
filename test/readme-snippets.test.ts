import * as fs from "node:fs";
import * as path from "node:path";
import * as ts from "typescript";
import { describe, expect, it } from "vitest";
import { ProjectType } from "../src/project-type";

/*
 * README / docs snippet type-check.
 *
 * Mechanism: the TypeScript compiler API (`ts.createProgram`). Vitest type checking is already
 * wired to `tsc` against `test/tsconfig.json`, so reusing the compiler keeps a single, consistent
 * type-checking toolchain and gives precise diagnostics. `@nikovirtala/projen-constructs` is
 * resolved to the local source (`src/index.ts`) through a `paths` mapping, so the snippets are
 * checked against the package's own types without depending on a prior `jsii` build.
 *
 * jsii-rosetta (a devDep) can also compile Markdown snippets against the committed `.jsii`
 * assembly, but it ties the check to a fresh compile and to rosetta's own fixture conventions. The
 * compiler-API approach is lighter, build-independent and matches the existing Vitest type-check
 * setup, so it is preferred here.
 *
 * Conventions for the snippets themselves (see also the README):
 * - Every snippet must import the symbols it uses from `@nikovirtala/projen-constructs`. Missing
 *   imports are real bugs and must fail this test.
 * - Snippets may reference a `project` created elsewhere. A documented shared preamble declaring
 *   `project` as a `NodeProject` (a superset of the `Project`/`NodeProject` the components accept)
 *   is injected only when a snippet uses `project` without declaring it. This is the one external
 *   fixture; it never imports package symbols, so it cannot hide a missing import.
 * - Migration "before" snippets that import a deprecated standalone `@nikovirtala/projen-*` package
 *   are illustrative only (those packages are removed) and are skipped.
 */

const repoRoot = path.resolve(__dirname, "..");
const packageName = "@nikovirtala/projen-constructs";

/** Shared preamble injected before snippets that reference an external `project` variable. */
const PROJECT_PREAMBLE = [
    'import { NodeProject } from "projen/lib/javascript";',
    "declare const project: NodeProject;",
    "",
].join("\n");

/** Deprecated standalone packages. A snippet importing one of these is a migration "before" example. */
const DEPRECATED_PACKAGE =
    /@nikovirtala\/projen-(vitest|typedoc|homebrew|colima|localstack|bundle-lambda-function-code|lambda-function-construct-generator|aws-cdk-app)\b/;

interface Snippet {
    readonly file: string;
    /** 1-based line of the snippet's first code line in the source Markdown. */
    readonly startLine: number;
    readonly code: string;
}

/** Extract fenced ```typescript / ```ts code blocks from a Markdown document. */
function extractSnippets(file: string, markdown: string): Snippet[] {
    const snippets: Snippet[] = [];
    const lines = markdown.split("\n");

    let inBlock = false;
    let isTypeScript = false;
    let buffer: string[] = [];
    let startLine = 0;

    for (let i = 0; i < lines.length; i++) {
        const fence = lines[i].match(/^(\s*)```(\w*)\s*$/);
        if (fence) {
            if (!inBlock) {
                inBlock = true;
                isTypeScript = fence[2] === "typescript" || fence[2] === "ts";
                buffer = [];
                startLine = i + 2; // 1-based line of the first code line inside the fence
            } else {
                if (isTypeScript) {
                    // Strip the common leading indentation (snippets nested in list items are indented).
                    const indent = fence[1].length;
                    const code = buffer.map((line) => (indent > 0 ? line.slice(indent) : line)).join("\n");
                    snippets.push({ file, startLine, code });
                }
                inBlock = false;
            }
        } else if (inBlock) {
            buffer.push(lines[i]);
        }
    }

    return snippets;
}

/** The Markdown files whose TypeScript snippets are type-checked: README plus any docs/*.md. */
function markdownFiles(): string[] {
    const files = [path.join(repoRoot, "README.md")];
    const docsDir = path.join(repoRoot, "docs");
    if (fs.existsSync(docsDir)) {
        for (const entry of fs.readdirSync(docsDir)) {
            if (entry.endsWith(".md")) {
                files.push(path.join(docsDir, entry));
            }
        }
    }
    return files.filter((f) => fs.existsSync(f));
}

const compilerOptions: ts.CompilerOptions = ts.convertCompilerOptionsFromJson(
    {
        target: "ES2022",
        lib: ["es2022"],
        module: "node16",
        moduleResolution: "node16",
        strict: true,
        esModuleInterop: true,
        skipLibCheck: true,
        noEmit: true,
        types: ["node"],
        baseUrl: repoRoot,
        paths: {
            [packageName]: ["src/index.ts"],
            [`${packageName}/*`]: ["src/*"],
        },
    },
    repoRoot,
).options;

/** Whether the snippet uses a `project` it does not itself declare, so the preamble is needed. */
function needsProjectPreamble(code: string): boolean {
    return /\bproject\b/.test(code) && !/\b(?:const|let|var|declare\s+const)\s+project\b/.test(code);
}

/**
 * Type-check every checkable snippet in a single TypeScript program.
 *
 * Each snippet becomes its own virtual module (so snippets can't leak symbols into one another)
 * and they are compiled together, which parses the shared lib/source files once instead of per
 * snippet. Returns, keyed by virtual file name, the human-readable diagnostics for each snippet.
 */
function typeCheckAll(toCheck: { readonly file: string; readonly code: string }[]): Map<string, string[]> {
    const overrides: Record<string, string> = {};
    for (const entry of toCheck) {
        const source = (needsProjectPreamble(entry.code) ? PROJECT_PREAMBLE : "") + entry.code;
        overrides[entry.file] = source;
    }

    const host = ts.createCompilerHost(compilerOptions);
    const readFile = host.readFile.bind(host);
    host.readFile = (fileName) => overrides[fileName] ?? readFile(fileName);
    const fileExists = host.fileExists.bind(host);
    host.fileExists = (fileName) => fileName in overrides || fileExists(fileName);

    const program = ts.createProgram(Object.keys(overrides), compilerOptions, host);

    const byFile = new Map<string, string[]>();
    for (const file of Object.keys(overrides)) {
        byFile.set(file, []);
    }
    for (const diagnostic of ts.getPreEmitDiagnostics(program)) {
        const fileName = diagnostic.file?.fileName;
        if (fileName == null || !byFile.has(fileName)) {
            continue;
        }
        const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
        const where =
            diagnostic.start != null ? `:${diagnostic.file?.getLineAndCharacterOfPosition(diagnostic.start).line}` : "";
        byFile.get(fileName)?.push(`TS${diagnostic.code}${where}: ${message}`);
    }
    return byFile;
}

const snippets = markdownFiles().flatMap((file) => extractSnippets(file, fs.readFileSync(file, "utf8")));

const checkable = snippets
    .filter((snippet) => !DEPRECATED_PACKAGE.test(snippet.code))
    .map((snippet, index) => ({
        snippet,
        label: `${path.relative(repoRoot, snippet.file)}:${snippet.startLine}`,
        file: path.join(repoRoot, "test", `__readme_snippet_${index}__.ts`),
        code: snippet.code,
    }));

const diagnosticsByFile = typeCheckAll(checkable);

describe("README / docs TypeScript snippets", () => {
    it("finds TypeScript snippets to check", () => {
        expect(snippets.length).toBeGreaterThan(0);
        expect(checkable.length).toBeGreaterThan(0);
    });

    for (const snippet of snippets) {
        const label = `${path.relative(repoRoot, snippet.file)}:${snippet.startLine}`;
        if (DEPRECATED_PACKAGE.test(snippet.code)) {
            it.skip(`${label} (migration example for a deprecated package)`, () => {});
        }
    }

    for (const entry of checkable) {
        it(`compiles ${entry.label}`, () => {
            const diagnostics = diagnosticsByFile.get(entry.file) ?? [];
            expect(diagnostics, `snippet at ${entry.label} did not type-check:\n${diagnostics.join("\n")}`).toEqual([]);
        });
    }
});

describe("README install and `projen new` commands", () => {
    const readme = fs.readFileSync(path.join(repoRoot, "README.md"), "utf8");

    it("names the package exactly as package.json", () => {
        const pkg = JSON.parse(fs.readFileSync(path.join(repoRoot, "package.json"), "utf8")) as { name: string };
        expect(readme).toContain(`pnpm add -D ${pkg.name} projen constructs`);
    });

    it("references a real project type in `projen new`", () => {
        const match = readme.match(/projen new --from @nikovirtala\/projen-constructs (\S+)/);
        expect(match, "README is missing a `projen new --from ...` command").not.toBeNull();

        const projectTypeArg = match?.[1] ?? "";
        // `projen new` takes the project type id (e.g. `aws_cdk_construct_library`), which is the
        // JSII type name (the ProjectType enum value) snake-cased. Resolve it back to an enum value.
        const normalized = projectTypeArg.replace(/_/g, "").toLowerCase();
        const projectTypeNames = Object.values(ProjectType).map((value) => value.split(".").pop() ?? value);
        const matched = projectTypeNames.some((name) => name.toLowerCase() === normalized);
        expect(matched, `\`${projectTypeArg}\` is not one of the ProjectType values`).toBe(true);
    });
});
