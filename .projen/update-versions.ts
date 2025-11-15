import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const nodeJsMajorVersion = 22;

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

async function main() {
    const [cdkVersion, constructsVersion, typescriptVersion, nodeVersion] = await Promise.all([
        getLatestVersion("aws-cdk-lib"),
        getLatestVersion("constructs"),
        getLatestVersion("typescript"),
        getLatestNodeLts(),
    ]);

    const versions = {
        cdkVersion,
        constructsVersion,
        typescriptVersion,
        minNodeVersion: nodeVersion,
    };

    writeFileSync(resolve(__dirname, "../src/versions.json"), JSON.stringify(versions, null, 4));

    console.log("Updated versions:", versions);
}

main().catch(console.error);
