import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const nodeJsMajorVersion = 24;

async function getLatestVersion(packageName: string): Promise<string> {
    const response = await fetch(`https://registry.npmjs.org/${packageName}/latest`);
    const data = await response.json();
    return data.version;
}

async function getLatestNodeLts(): Promise<string> {
    const response = await fetch("https://nodejs.org/dist/index.json");
    const releases = await response.json();
    const lts = releases.find((r: any) => r.version.startsWith(`v${nodeJsMajorVersion}.`) && r.lts);
    return lts.version.slice(1);
}

/**
 * Get the TypeScript version supported by the latest jsii compiler.
 * jsii pins its TypeScript dependency to a specific minor (e.g. ~5.9),
 * so we resolve the latest published TypeScript version within that range.
 */
async function getJsiiCompatibleTypescriptVersion(): Promise<string> {
    // Get the latest jsii package metadata to find its TypeScript constraint
    const jsiiResponse = await fetch("https://registry.npmjs.org/jsii/latest");
    const jsiiData = await jsiiResponse.json();
    const tsConstraint = jsiiData.dependencies.typescript; // e.g. "~5.9"

    // Extract the major.minor from the constraint (strip ~, ^, etc.)
    const minorMatch = tsConstraint.match(/(\d+\.\d+)/);
    if (!minorMatch) {
        throw new Error(`Could not parse TypeScript constraint from jsii: ${tsConstraint}`);
    }
    const tsMajorMinor = minorMatch[1]; // e.g. "5.9"

    // Get all TypeScript versions and find the latest matching major.minor
    const tsResponse = await fetch("https://registry.npmjs.org/typescript");
    const tsData = await tsResponse.json();
    const allVersions = Object.keys(tsData.versions)
        .filter((v: string) => v.startsWith(`${tsMajorMinor}.`) && !v.includes("-"))
        .sort((a: string, b: string) => {
            const [, , patchA] = a.split(".").map(Number);
            const [, , patchB] = b.split(".").map(Number);
            return patchB - patchA;
        });

    if (allVersions.length === 0) {
        throw new Error(`No TypeScript versions found matching ${tsMajorMinor}.x`);
    }

    return allVersions[0];
}

async function main() {
    const [cdkVersion, typescriptVersion, nodeVersion] = await Promise.all([
        getLatestVersion("aws-cdk-lib"),
        getJsiiCompatibleTypescriptVersion(),
        getLatestNodeLts(),
    ]);

    const versions = {
        cdkVersion,
        typescriptVersion,
        minNodeVersion: nodeVersion,
    };

    writeFileSync(resolve(__dirname, "../src/versions.json"), JSON.stringify(versions, null, 4));

    console.log("Updated versions:", versions);
}

main().catch(console.error);
