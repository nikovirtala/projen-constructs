import { Component } from "projen/lib/component";
import type { Project } from "projen/lib/project";
import { TaskShell } from "projen/lib/task-shell";
import { TextFile } from "projen/lib/textfile";

/**
 * Returns the tap of a fully qualified formula name (`user/repository/formula`), or `undefined`
 * for a formula from Homebrew's default tap.
 */
function tapOf(packageName: string): string | undefined {
    const parts = packageName.split("/");
    return parts.length === 3 ? `${parts[0]}/${parts[1]}` : undefined;
}

export interface HomebrewOptions {
    /**
     * Formulae to install, by name (`jq`) or fully qualified (`user/repository/formula`).
     *
     * A fully qualified formula adds a `tap` entry for its tap. Formulae from non-official taps
     * are marked `trusted: true` in the `Brewfile`, since Homebrew 6 only loads trusted formulae
     * from non-official taps. Only the formula is trusted, not the rest of its tap.
     *
     * @default []
     * @see https://docs.brew.sh/Tap-Trust
     */
    readonly packages?: string[];
}

export class Homebrew extends Component {
    public static of(project: Project): Homebrew | undefined {
        const isHomebrew = (c: Component): c is Homebrew => c instanceof Homebrew;
        return project.components.find(isHomebrew);
    }

    private readonly packages: Set<string>;

    constructor(project: Project, options: HomebrewOptions = {}) {
        super(project);

        this.packages = new Set(options.packages ?? []);

        const brewInstallTask = project.addTask("install:homebrew", {
            // brace groups, `eval` and multiple redirects are not supported by projen's
            // built-in cross-platform shell, so run this through bash
            shell: TaskShell.bash(),
            exec: 'command -v brew >/dev/null 2>&1 || { NONINTERACTIVE=1 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" && eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv 2>/dev/null || /opt/homebrew/bin/brew shellenv 2>/dev/null)"; }',
        });

        project.defaultTask?.spawn(brewInstallTask);

        this.synthesizeBrewfile();
    }

    public addPackage(packageName: string): void {
        this.packages.add(packageName);
        this.synthesizeBrewfile();
    }

    private synthesizeBrewfile(): void {
        if (this.packages.size === 0) return;

        this.project.tryRemoveFile("Brewfile");

        const lines: string[] = [];
        const taps = new Set<string>();

        for (const pkg of this.packages) {
            const tap = tapOf(pkg);
            if (tap) {
                taps.add(tap);
            }
        }

        for (const tap of Array.from(taps).sort()) {
            lines.push(`tap "${tap}"`);
        }

        for (const pkg of Array.from(this.packages).sort()) {
            /* Since Homebrew 6, formulae from non-official taps only load when trusted. Trust
             * the formula that was asked for by name rather than its whole tap. */
            const tap = tapOf(pkg);
            const trusted = tap !== undefined && !tap.startsWith("homebrew/");
            lines.push(trusted ? `brew "${pkg}", trusted: true` : `brew "${pkg}"`);
        }

        new TextFile(this, "Brewfile", {
            lines,
        });

        const brewBundleTask =
            this.project.tasks.tryFind("homebrew:bundle") ??
            this.project.addTask("homebrew:bundle", {
                // `eval` and multiple redirects are not supported by projen's built-in
                // cross-platform shell, so run this through bash
                shell: TaskShell.bash(),
                exec: 'command -v brew >/dev/null 2>&1 || eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv 2>/dev/null || /opt/homebrew/bin/brew shellenv 2>/dev/null)" && brew bundle',
            });

        const brewInstallTask = this.project.tasks.tryFind("install:homebrew");
        if (brewInstallTask && !brewInstallTask.steps.some((s) => s.spawn === "homebrew:bundle")) {
            brewInstallTask.spawn(brewBundleTask);
        }
    }
}
