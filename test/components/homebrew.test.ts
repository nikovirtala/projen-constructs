import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { expect, it } from "vitest";
import { Homebrew } from "../../src/components";

it("creates Brewfile with packages", () => {
    const project = new Project({ name: "test" });
    new Homebrew(project, { packages: ["jq", "yq"] });
    const snapshot = synthSnapshot(project);
    expect(snapshot.Brewfile).toContain('brew "jq"');
    expect(snapshot.Brewfile).toContain('brew "yq"');
});

it("addPackage adds to Brewfile", () => {
    const project = new Project({ name: "test" });
    const homebrew = new Homebrew(project);
    homebrew.addPackage("gh");
    const snapshot = synthSnapshot(project);
    expect(snapshot.Brewfile).toContain('brew "gh"');
});

it("creates install:homebrew and homebrew:bundle tasks", () => {
    const project = new Project({ name: "test" });
    new Homebrew(project, { packages: ["jq"] });
    const snapshot = synthSnapshot(project);
    const tasks = snapshot[".projen/tasks.json"];

    expect(tasks.tasks["install:homebrew"]).toBeDefined();
    expect(tasks.tasks["homebrew:bundle"]).toBeDefined();
});

it("creates brew tasks that can be spawned", () => {
    const project = new Project({ name: "test" });
    new Homebrew(project, { packages: ["jq"] });

    const brewInstallTask = project.tasks.tryFind("install:homebrew");
    const brewBundleTask = project.tasks.tryFind("homebrew:bundle");

    expect(brewInstallTask).toBeDefined();
    expect(brewBundleTask).toBeDefined();
    expect(brewInstallTask?.steps[0].exec).toContain("brew");
    expect(brewBundleTask?.steps[0].exec).toContain("brew bundle");
});

it("default task spawns install:homebrew which spawns homebrew:bundle", () => {
    const project = new Project({ name: "test" });
    new Homebrew(project, { packages: ["jq"] });

    const defaultSteps = project.defaultTask?.steps ?? [];
    const brewInstallIndex = defaultSteps.findIndex((s) => s.spawn === "install:homebrew");
    expect(brewInstallIndex).toBeGreaterThanOrEqual(0);

    const brewInstallTask = project.tasks.tryFind("install:homebrew");
    const brewInstallSteps = brewInstallTask?.steps ?? [];
    const brewBundleIndex = brewInstallSteps.findIndex((s) => s.spawn === "homebrew:bundle");
    expect(brewBundleIndex).toBeGreaterThanOrEqual(0);
});

it("automatically adds tap for third-party formulas", () => {
    const project = new Project({ name: "test" });
    new Homebrew(project, { packages: ["clojure/tools/clojure"] });
    const snapshot = synthSnapshot(project);
    expect(snapshot.Brewfile).toContain('tap "clojure/tools"');
    expect(snapshot.Brewfile).toContain('brew "clojure/tools/clojure"');
});

it("adds multiple taps for multiple third-party formulas", () => {
    const project = new Project({ name: "test" });
    new Homebrew(project, {
        packages: ["clojure/tools/clojure", "homebrew/cask/docker", "jq"],
    });
    const snapshot = synthSnapshot(project);
    expect(snapshot.Brewfile).toContain('tap "clojure/tools"');
    expect(snapshot.Brewfile).toContain('tap "homebrew/cask"');
    expect(snapshot.Brewfile).toContain('brew "clojure/tools/clojure"');
    expect(snapshot.Brewfile).toContain('brew "homebrew/cask/docker"');
    expect(snapshot.Brewfile).toContain('brew "jq"');
});

it("does not duplicate taps for formulas from same tap", () => {
    const project = new Project({ name: "test" });
    new Homebrew(project, {
        packages: ["clojure/tools/clojure", "clojure/tools/clj-kondo"],
    });
    const snapshot = synthSnapshot(project);
    const tapMatches = snapshot.Brewfile.match(/tap "clojure\/tools"/g);
    expect(tapMatches).toHaveLength(1);
});

it("sorts taps and packages alphabetically", () => {
    const project = new Project({ name: "test" });
    new Homebrew(project, {
        packages: ["zsh", "aws/tap/aws-sam-cli", "jq"],
    });
    const snapshot = synthSnapshot(project);
    const lines = snapshot.Brewfile.split("\n").filter((line: string) => line.trim());
    expect(lines[0]).toBe('tap "aws/tap"');
    expect(lines[1]).toBe('brew "aws/tap/aws-sam-cli"');
    expect(lines[2]).toBe('brew "jq"');
    expect(lines[3]).toBe('brew "zsh"');
});
