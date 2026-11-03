import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { applyGeneratedSpans, buildGeneratedSpans } from "../projenrc/update-readme";
import * as versions from "../src/versions.json";

const repositoryRoot = join(__dirname, "..");
const readmePath = join(repositoryRoot, "README.md");

function readReadme(): string {
    return readFileSync(readmePath, "utf-8");
}

describe("README generated spans", () => {
    it("has the committed README match the values generated from source", () => {
        const committed = readReadme();
        const expected = applyGeneratedSpans(committed, buildGeneratedSpans());

        // If this fails, run `pnpm exec tsx projenrc/update-readme.ts` (or re-synth) and commit README.md.
        expect(committed).toBe(expected);
    });

    it("renders the CDK version from src/versions.json", () => {
        const committed = readReadme();
        expect(committed).toContain(`**CDK Version**: ${versions.cdkVersion} (for CDK projects)`);
    });

    it("renders the Node.js and TypeScript versions from src/versions.json", () => {
        const committed = readReadme();
        expect(committed).toContain(`**Node Version**: ${versions.minNodeVersion}`);
        expect(committed).toContain(`**TypeScript**: ${versions.typescriptVersion}`);
        expect(committed).toContain(`**JSII Version**: ~${versions.typescriptVersion} (for JSII projects)`);
    });

    it("renders the project-type count from the ProjectType enum", () => {
        const source = readFileSync(join(repositoryRoot, "src", "project-type.ts"), "utf-8");
        const enumMembers = source.match(/^\s+[A-Z0-9_]+\s*=\s*"[^"]+",/gm) ?? [];
        expect(enumMembers.length).toBeGreaterThan(0);

        const committed = readReadme();
        expect(committed).toContain(
            `<!-- generated:project-type-count-start -->${enumMembers.length}<!-- generated:project-type-count-end -->`,
        );
    });
});
