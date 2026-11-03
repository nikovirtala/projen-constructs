import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Regenerates the volatile values embedded in the documentation from their
 * authoritative sources, so they fail the build when they drift instead of being
 * hand-maintained.
 *
 * The generated values are delimited by explicit HTML-comment markers. Only the
 * content between a start and end marker is rewritten; all hand-written prose
 * outside the markers is preserved. A span is applied to whichever documentation
 * file carries its markers, so the generated values can live wherever the prose
 * structure puts them: the project-type count sits inline in the README feature
 * list, while the version table lives in `docs/configuration.md`.
 */

const repositoryRoot = join(__dirname, "..");

/**
 * Documentation files that may carry generated markers, in the order they are
 * searched and rewritten. A file that does not exist is skipped, so the generator
 * works whether or not the extracted `docs/` reference pages are present.
 */
const documentationFiles = ["README.md", join("docs", "configuration.md")];

interface GeneratedSpan {
    readonly start: string;
    readonly end: string;
    /** Rendered content placed between the markers (markers excluded). */
    readonly content: string;
}

/**
 * Reads the authoritative version values. `src/versions.json` is the generated
 * source of truth for CDK, TypeScript and Node.js versions; `src/config.ts` holds
 * the hand-set constructs and pnpm versions and derives the jsii version.
 */
function readVersions(): {
    pnpmVersion: string;
    minNodeVersion: string;
    typescriptVersion: string;
    cdkVersion: string;
    jsiiVersion: string;
    constructsVersion: string;
} {
    const versions = JSON.parse(readFileSync(join(repositoryRoot, "src", "versions.json"), "utf-8")) as {
        cdkVersion: string;
        typescriptVersion: string;
        minNodeVersion: string;
    };

    const config = readFileSync(join(repositoryRoot, "src", "config.ts"), "utf-8");

    const constructsVersion = matchOne(config, /constructsVersion:\s*"([^"]+)"/, "constructsVersion in src/config.ts");
    const pnpmVersion = matchOne(config, /pnpmVersion:\s*"([^"]+)"/, "pnpmVersion in src/config.ts");

    return {
        pnpmVersion,
        minNodeVersion: versions.minNodeVersion,
        typescriptVersion: versions.typescriptVersion,
        cdkVersion: versions.cdkVersion,
        // mirrors the `jsiiVersion` getter in src/config.ts defaults (`~${typescriptVersion}`)
        jsiiVersion: `~${versions.typescriptVersion}`,
        constructsVersion,
    };
}

/**
 * Counts the members of the generated `ProjectType` enum in src/project-type.ts,
 * so the count stays in sync with the committed enum.
 */
function countProjectTypes(): number {
    const source = readFileSync(join(repositoryRoot, "src", "project-type.ts"), "utf-8");
    const members = source.match(/^\s+[A-Z0-9_]+\s*=\s*"[^"]+",/gm);
    if (!members || members.length === 0) {
        throw new Error("Could not find any ProjectType enum members in src/project-type.ts");
    }
    return members.length;
}

function matchOne(source: string, pattern: RegExp, description: string): string {
    const match = source.match(pattern);
    if (!match) {
        throw new Error(`Could not find ${description}`);
    }
    return match[1];
}

/**
 * Builds the list of generated spans from the current source values.
 *
 * The version table uses sentence-case labels so it matches the extracted
 * `docs/configuration.md` reference page verbatim.
 */
export function buildGeneratedSpans(): GeneratedSpan[] {
    const versions = readVersions();
    const projectTypeCount = countProjectTypes();

    const versionTable = [
        "- **Author**: Niko Virtala (niko.virtala@hey.com)",
        "- **Default release branch**: main",
        `- **Package manager**: pnpm ${versions.pnpmVersion}`,
        `- **Node version**: ${versions.minNodeVersion}`,
        `- **TypeScript**: ${versions.typescriptVersion}`,
        `- **CDK version**: ${versions.cdkVersion} (for CDK projects)`,
        `- **JSII version**: ${versions.jsiiVersion} (for JSII projects)`,
    ].join("\n");

    return [
        {
            start: "<!-- generated:version-table-start -->",
            end: "<!-- generated:version-table-end -->",
            content: `\n${versionTable}\n`,
        },
        {
            start: "<!-- generated:project-type-count-start -->",
            end: "<!-- generated:project-type-count-end -->",
            content: `${projectTypeCount}`,
        },
    ];
}

/**
 * Applies a single generated span to the content of a file. Returns the rewritten
 * content, or `undefined` if the file does not carry the span's markers.
 * Throws if only one marker of the pair is present, or they are out of order, so
 * a half-present marker set can't silently drift.
 */
function applySpan(fileName: string, content: string, span: GeneratedSpan): string | undefined {
    const startIndex = content.indexOf(span.start);
    const endIndex = content.indexOf(span.end);
    if (startIndex === -1 && endIndex === -1) {
        return undefined;
    }
    if (startIndex === -1 || endIndex === -1) {
        throw new Error(`${fileName} has only one of the markers ${span.start} / ${span.end}`);
    }
    if (endIndex < startIndex) {
        throw new Error(`${fileName} has ${span.end} before ${span.start}`);
    }
    const before = content.slice(0, startIndex + span.start.length);
    const after = content.slice(endIndex);
    return `${before}${span.content}${after}`;
}

/**
 * Applies the generated spans to a single file's content. Spans whose markers are
 * absent from the file are left for another file to own. Returns the rewritten
 * content and the set of span start markers that were applied here.
 */
export function applyGeneratedSpans(content: string, spans: GeneratedSpan[], fileName = "README.md"): string {
    let result = content;
    for (const span of spans) {
        const next = applySpan(fileName, result, span);
        if (next !== undefined) {
            result = next;
        }
    }
    return result;
}

/**
 * Regenerates every documentation file that carries generated markers, rewriting
 * only the content between markers. Throws if a span's markers are not found in
 * any documentation file, so markers can't silently drift out of existence.
 *
 * Returns the list of files that changed.
 */
export function updateDocumentation(): string[] {
    const spans = buildGeneratedSpans();
    const applied = new Set<string>();
    const changed: string[] = [];

    for (const relativePath of documentationFiles) {
        const absolutePath = join(repositoryRoot, relativePath);
        if (!existsSync(absolutePath)) {
            continue;
        }
        const current = readFileSync(absolutePath, "utf-8");
        let next = current;
        for (const span of spans) {
            const rewritten = applySpan(relativePath, next, span);
            if (rewritten !== undefined) {
                next = rewritten;
                applied.add(span.start);
            }
        }
        if (next !== current) {
            writeFileSync(absolutePath, next);
            changed.push(relativePath);
        }
    }

    const missing = spans.filter((span) => !applied.has(span.start));
    if (missing.length > 0) {
        const names = missing.map((span) => `${span.start} / ${span.end}`).join(", ");
        throw new Error(
            `No documentation file carries the markers ${names}. Searched: ${documentationFiles.join(", ")}`,
        );
    }

    return changed;
}

// Run as a script (projen `update-readme` task) only when executed directly.
if (require.main === module) {
    const changed = updateDocumentation();
    console.log(changed.length > 0 ? `Regenerated: ${changed.join(", ")}` : "Documentation already up to date");
}
