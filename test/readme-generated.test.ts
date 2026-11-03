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
 * `.kiro/steering/*.md` conventions docs carry their own version/count spans
 * (`product-defaults`, `tech-core`, `vitest-major`). The generator applies each
 * span to whichever of these files carries its markers, so the drift guard
 * searches the same set.
 */
const documentationFiles = [
    "README.md",
    join("docs", "configuration.md"),
    join(".kiro", "steering", "product.md"),
    join(".kiro", "steering", "tech.md"),
    join(".kiro", "steering", "structure.md"),
];

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
        throw new Error(
            `No documentation file carries the marker ${marker}. Searched: ${documentationFiles.join(", ")}`,
        );
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

/**
 * Independent checks for the `.kiro/steering/*.md` spans. These read the
 * authoritative sources directly (versions.json, config.ts, vitest.ts and the
 * ProjectType enum) rather than re-running the generator, so a drift in either
 * the committed docs or the generator surfaces here.
 */
describe("steering generated spans", () => {
    // pnpm major from src/config.ts, read independently of the generator.
    const pnpmMajor = (() => {
        const config = readFileSync(join(repositoryRoot, "src", "config.ts"), "utf-8");
        const match = config.match(/pnpmVersion:\s*"(\d+)/);
        if (!match) {
            throw new Error("Could not find pnpmVersion in src/config.ts");
        }
        return match[1];
    })();

    // Default Vitest major from src/components/vitest.ts, read independently.
    const vitestMajor = (() => {
        const source = readFileSync(join(repositoryRoot, "src", "components", "vitest.ts"), "utf-8");
        const match = source.match(/options\.vitestVersion\s*\?\?\s*"\^(\d+)"/);
        if (!match) {
            throw new Error("Could not find the default vitestVersion in src/components/vitest.ts");
        }
        return match[1];
    })();

    it("renders the product.md defaults from source", () => {
        const defaults = documentWith("<!-- generated:product-defaults-start -->");
        expect(defaults).toContain(`- Package Manager: pnpm ${pnpmMajor}`);
        expect(defaults).toContain(`- Node Version: ${versions.minNodeVersion}`);
        expect(defaults).toContain(`- TypeScript: ${versions.typescriptVersion}`);
        expect(defaults).toContain(`- CDK Version: ${versions.cdkVersion}`);
    });

    it("renders the product.md project-type count from the ProjectType enum", () => {
        const projectTypeCount = Object.keys(ProjectType).length;
        expect(documentWith("<!-- generated:product-defaults-start -->")).toBeTruthy();
        expect(documentWith("<!-- generated:project-type-count-start -->")).toContain(
            `<!-- generated:project-type-count-start -->${projectTypeCount}<!-- generated:project-type-count-end -->`,
        );
    });

    it("renders the tech.md core technologies from source", () => {
        const core = documentWith("<!-- generated:tech-core-start -->");
        expect(core).toContain(`- **TypeScript ${versions.typescriptVersion}** - Primary language`);
        expect(core).toContain(`- **Node.js ${versions.minNodeVersion}** - Runtime (managed via mise)`);
        expect(core).toContain(`- **JSII ~${versions.typescriptVersion}** - Multi-language library support`);
        expect(core).toContain(`- **pnpm ${pnpmMajor}** - Package manager`);
    });

    it("renders the tech.md Vitest major from the Vitest component default", () => {
        expect(documentWith("<!-- generated:vitest-major-start -->")).toContain(
            `<!-- generated:vitest-major-start -->${vitestMajor}<!-- generated:vitest-major-end -->`,
        );
    });
});
