import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { expect, it } from "vitest";
import { Homebrew, Mise } from "../../src/components";

it("creates mise.toml with node version", () => {
    const project = new Project({ name: "test" });
    new Mise(project, { nodeVersion: "22.21.1" });
    const snapshot = synthSnapshot(project);
    expect(snapshot["mise.toml"]).toContain("[tools]");
    expect(snapshot["mise.toml"]).toContain('node = "22.21.1"');
});

it("creates mise:trust task", () => {
    const project = new Project({ name: "test" });
    new Mise(project, { nodeVersion: "22.21.1" });
    const snapshot = synthSnapshot(project);
    const tasks = snapshot[".projen/tasks.json"];
    expect(tasks.tasks["mise:trust"]).toBeDefined();
    expect(tasks.tasks["mise:trust"].steps[0].exec).toBe("mise trust");
});

it("ensures homebrew component exists", () => {
    const project = new Project({ name: "test" });
    new Mise(project, { nodeVersion: "22.21.1" });
    const homebrew = Homebrew.of(project);
    expect(homebrew).toBeDefined();
});

it("adds mise to homebrew packages", () => {
    const project = new Project({ name: "test" });
    new Mise(project, { nodeVersion: "22.21.1" });
    const snapshot = synthSnapshot(project);
    expect(snapshot.Brewfile).toContain('brew "mise"');
});

it("reuses existing homebrew component", () => {
    const project = new Project({ name: "test" });
    new Homebrew(project, { packages: ["jq"] });
    new Mise(project, { nodeVersion: "22.21.1" });
    const snapshot = synthSnapshot(project);
    expect(snapshot.Brewfile).toContain('brew "jq"');
    expect(snapshot.Brewfile).toContain('brew "mise"');
});
