import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { TypeScriptProject } from "../src/";

describe("applyDefaultConfig", () => {
    it("uses DEFAULT_NODE_VERSION when minNodeVersion is not specified", () => {
        const project = new TypeScriptProject({
            name: "test-project",
            defaultReleaseBranch: "main",
            minNodeVersion: undefined,
        });

        const snapshot = synthSnapshot(project);

        expect(snapshot["mise.toml"]).toContain('node = "22.21.1"');
    });
});
