import * as path from "node:path";
import { fileURLToPath } from "node:url";
import * as esbuild from "esbuild";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
	const entrypoint = path.resolve(__dirname, "./vitest-define-config-entry.ts");
	const outDir = path.resolve(__dirname, "../lib/components");
	const tsconfig = path.resolve(__dirname, "../tsconfig.dev.json");

	await esbuild.build({
		entryPoints: [entrypoint],
		bundle: true,
		platform: "node",
		outfile: path.join(outDir, "vitest-bundled-define-config.js"),
		external: ["vitest"],
		tsconfig: tsconfig,
	});
})().catch(console.error);
