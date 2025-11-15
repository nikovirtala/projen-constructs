import * as path from "node:path";
import * as esbuild from "esbuild";

(async () => {
    const entrypoint = path.resolve(__dirname, "./vitest-define-config-entry.ts");
    const outDir = path.resolve(__dirname, "../lib");
    const tsconfig = path.resolve(__dirname, "../tsconfig.dev.json");

    await esbuild.build({
        entryPoints: [entrypoint],
        bundle: true,
        platform: "node",
        outfile: path.join(outDir, "vitest-define-config.js"),
        external: ["vitest"],
        tsconfig: tsconfig,
    });
})().catch(console.error);
