import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { applyGeneratedSpans, buildGeneratedSpans } from "../projenrc/update-readme";
import { ProjectType } from "../src/project-type";
import * as versions from "../src/versions.json";

const repositoryRoot = join(__dirname, "..");

/**
 * Documentation files that may carry generated markers. The version table lives
 * in `docs/configuration.md` once the reference pages are extracted, and in the
 * README before that; the project-type count stays inline in the README. The
 * generator applies each span to whichever of these files carries its markers,
 * so the drift guard searches the same set.
 */
const documentationFiles = ["README.md", join("docs", "configuration.md")];

function readDocumentation(): { relativePath: string; content: string }[] {
    return documentationFiles
        .map((relativePath) => ({ relativePath, absolutePath: join(repositoryRoot, relativePath) }))
        .filter(({ absolutePath }) => existsSync(absolutePath))
        .map(({ relativePath, absolutePath }) => ({ relativePath, content: readFileSync(absolutePath, "utf-8") }));
}

/** The content of whichever documentation file carries the given marker. */
function documentWith(marker: string): string {
    const match = readDocumentation().find(({ content }) => content.includes(marker));
    if (!match) {
        throw new Error(`No documentation file carries the marker ${marker}. Searched: ${documentationFiles.join(", ")}`);
    }
    return match.content;
}

describe("README generated spans", () => {
    it("has the committed documentation match the values generated from source", () => {
        const spans = buildGeneratedSpans();
        for (const { relativePath, content } of readDocumentation()) {
            const expected = applyGeneratedSpans(content, spans, relativePath);

            // If this fails, run `pnpm exec tsx projenrc/update-readme.ts` (or re-synth) and commit the docs.
            expect(content, `${relativePath} is out of date with its generated values`).toBe(expected);
        }
    });

    it("renders the CDK version from src/versions.json", () => {
        expect(documentWith("<!-- generated:version-table-start -->")).toContain(
            `**CDK version**: ${versions.cdkVersion} (for CDK projects)`,
        );
    });

    it("renders the Node.js and TypeScript versions from src/versions.json", () => {
        const table = documentWith("<!-- generated:version-table-start -->");
        expect(table).toContain(`**Node version**: ${versions.minNodeVersion}`);
        expect(table).toContain(`**TypeScript**: ${versions.typescriptVersion}`);
        expect(table).toContain(`**JSII version**: ~${versions.typescriptVersion} (for JSII projects)`);
    });

    it("renders the project-type count from the ProjectType enum", () => {
        // Count the imported enum directly, so this is an independent check rather
        // than a re-run of the generator's own source-parsing regex.
        const projectTypeCount = Object.keys(ProjectType).length;
        expect(projectTypeCount).toBeGreaterThan(0);

        expect(documentWith("<!-- generated:project-type-count-start -->")).toContain(
            `<!-- generated:project-type-count-start -->${projectTypeCount}<!-- generated:project-type-count-end -->`,
        );
    });
});
