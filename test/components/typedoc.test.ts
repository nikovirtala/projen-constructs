import { javascript } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it, test } from "vitest";
import { EntryPointStrategy, TypeDoc, type TypeDocConfiguration } from "../../src/components";

const getTestProject = () => {
    return new javascript.NodeProject({
        name: "test-project",
        defaultReleaseBranch: "main",
    });
};

function snapshotTypeDocConfig(project: javascript.NodeProject): TypeDocConfiguration {
    return synthSnapshot(project)["typedoc.jsonc"];
}

describe("TypeDoc", () => {
    describe("with default configuration", () => {
        test("generates correct snapshot for typedoc.jsonc", () => {
            const project = getTestProject();
            new TypeDoc(project);

            const config = snapshotTypeDocConfig(project);
            expect(config).toMatchSnapshot();
        });
    });

    describe("with", () => {
        it("custom configuration", () => {
            const project = getTestProject();
            new TypeDoc(project, {
                typeDocConfig: {
                    entryPointStrategy: EntryPointStrategy.RESOLVE,
                    name: "My Project",
                    theme: "default",
                },
            });

            const config = snapshotTypeDocConfig(project);
            expect(config.entryPointStrategy).toBe("resolve");
            expect(config.name).toBe("My Project");
            expect(config.theme).toBe("default");
            expect(config.excludePrivate).toBe(true);
        });

        it("custom version", () => {
            const project = getTestProject();
            new TypeDoc(project, { version: "^0.26" });

            const typedocDep = project.deps.all.find((d) => d.name === "typedoc");
            expect(typedocDep).toBeDefined();
            expect(typedocDep?.version).toBe("^0.26");
        });
    });

    describe("of", () => {
        it("returns TypeDoc instance when found", () => {
            const project = getTestProject();
            const typedoc = new TypeDoc(project);

            const found = TypeDoc.of(project);
            expect(found).toBe(typedoc);
        });

        it("returns undefined when not found", () => {
            const project = getTestProject();
            const found = TypeDoc.of(project);
            expect(found).toBeUndefined();
        });
    });
});
