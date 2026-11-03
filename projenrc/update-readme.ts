import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Regenerates the volatile values embedded in README.md from their authoritative
 * sources, so they fail the build when they drift instead of being hand-maintained.
 *
 * The generated spans are delimited by explicit HTML-comment markers. Only the
 * content between a start and end marker is rewritten; all hand-written prose
 * outside the markers is preserved.
 */

const repositoryRoot = join(__dirname, "..");
const readmePath = join(repositoryRoot, "README.md");

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
 * so the README count stays in sync with the committed enum.
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
 */
export function buildGeneratedSpans(): GeneratedSpan[] {
    const versions = readVersions();
    const projectTypeCount = countProjectTypes();

    const versionTable = [
        "- **Author**: Niko Virtala (niko.virtala@hey.com)",
        "- **Default Release Branch**: main",
        `- **Package Manager**: pnpm ${versions.pnpmVersion}`,
        `- **Node Version**: ${versions.minNodeVersion}`,
        `- **TypeScript**: ${versions.typescriptVersion}`,
        `- **CDK Version**: ${versions.cdkVersion} (for CDK projects)`,
        `- **JSII Version**: ${versions.jsiiVersion} (for JSII projects)`,
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
 * Applies the generated spans to README content and returns the result.
 * Throws if a marker pair is missing, so markers can't silently drift out.
 */
export function applyGeneratedSpans(readme: string, spans: GeneratedSpan[]): string {
    let result = readme;
    for (const span of spans) {
        const startIndex = result.indexOf(span.start);
        const endIndex = result.indexOf(span.end);
        if (startIndex === -1 || endIndex === -1) {
            throw new Error(`README.md is missing the markers ${span.start} / ${span.end}`);
        }
        if (endIndex < startIndex) {
            throw new Error(`README.md has ${span.end} before ${span.start}`);
        }
        const before = result.slice(0, startIndex + span.start.length);
        const after = result.slice(endIndex);
        result = `${before}${span.content}${after}`;
    }
    return result;
}

/**
 * Returns the README content as it should be, generated from the current sources.
 */
export function renderReadme(): string {
    const readme = readFileSync(readmePath, "utf-8");
    return applyGeneratedSpans(readme, buildGeneratedSpans());
}

/**
 * Writes the regenerated README to disk. Returns true if the file changed.
 */
export function updateReadme(): boolean {
    const current = readFileSync(readmePath, "utf-8");
    const next = applyGeneratedSpans(current, buildGeneratedSpans());
    if (current !== next) {
        writeFileSync(readmePath, next);
        return true;
    }
    return false;
}

// Run as a script (projen `update-readme` task) only when executed directly.
if (require.main === module) {
    const changed = updateReadme();
    console.log(changed ? "README.md regenerated" : "README.md already up to date");
}
