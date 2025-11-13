import type { IConstruct } from "constructs";
import { Component } from "projen/lib/component";
import { NodeProject } from "projen/lib/javascript";
import { Colima } from "./colima";
import { Homebrew } from "./homebrew";

export interface LocalStackOptions {
    readonly services?: string[];
    readonly port?: number;
    readonly debug?: boolean;
    readonly imageTag?: string;
}

export class LocalStack extends Component {
    constructor(scope: IConstruct, options: LocalStackOptions = {}) {
        super(scope);

        const project = NodeProject.of(this);
        if (!(project instanceof NodeProject)) {
            throw new Error("LocalStack component requires a NodeProject");
        }

        const port = options.port ?? 4566;
        const debug = options.debug ?? false;

        new Colima(project);

        let homebrew = Homebrew.of(project);
        if (!homebrew) {
            homebrew = new Homebrew(project);
        }

        homebrew.addPackage("localstack");

        const colimaTask = project.tasks.tryFind("colima");

        const envVars = [`LOCALSTACK_PORT=${port}`, `LOCALSTACK_DEBUG=${debug ? "1" : "0"}`];
        if (options.services) {
            envVars.push(`SERVICES=${options.services.join(",")}`);
        }

        const localstackTask = project.addTask("localstack", {
            exec: `localstack status | grep -q running || ${envVars.join(" ")} localstack start -d`,
        });

        if (colimaTask) {
            localstackTask.prependSpawn(colimaTask);
        }

        project.addDevDeps("aws-cdk-local");

        const testTask = project.tasks.tryFind("test");
        if (testTask) {
            testTask.prependSpawn(localstackTask);
        }
    }
}
