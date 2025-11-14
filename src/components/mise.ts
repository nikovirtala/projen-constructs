import { Component } from "projen/lib/component";
import type { Project } from "projen/lib/project";
import { TextFile } from "projen/lib/textfile";
import { Homebrew } from "./homebrew";

export interface MiseOptions {
    readonly nodeVersion?: string;
}

export class Mise extends Component {
    public static of(project: Project): Mise | undefined {
        const isMise = (c: Component): c is Mise => c instanceof Mise;
        return project.components.find(isMise);
    }

    constructor(project: Project, options: MiseOptions = {}) {
        super(project);

        const homebrew = Homebrew.of(project) ?? new Homebrew(project);
        homebrew.addPackage("mise");

        new TextFile(this, "mise.toml", {
            committed: true,
            readonly: true,
            lines: ["[tools]", `node = "${options.nodeVersion}"`],
        });

        project.addTask("mise:trust", {
            exec: "mise trust",
        });
    }
}
