import type { IConstruct } from "constructs";
import type { Project } from "projen";
import { Component } from "projen/lib/component";
import { Homebrew } from "./homebrew";

export class Colima extends Component {
    constructor(scope: IConstruct) {
        super(scope);

        const project = this.project as Project;

        let homebrew = Homebrew.of(project);
        if (!homebrew) {
            homebrew = new Homebrew(project);
        }

        homebrew.addPackage("colima");
        homebrew.addPackage("docker");

        project.addTask("colima", {
            exec: "colima status >/dev/null 2>&1 || colima start",
        });
    }
}
