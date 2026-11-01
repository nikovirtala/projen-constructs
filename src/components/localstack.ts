import type { IConstruct } from "constructs";
import { Component } from "projen/lib/component";
import { NodeProject } from "projen/lib/javascript";
import { Colima } from "./colima";
import { Homebrew } from "./homebrew";

/**
 * Options for LocalStack component.
 */
export interface LocalStackOptions {
    /**
     * LocalStack services to enable.
     * @default - all services enabled
     */
    readonly services?: string[];

    /**
     * LocalStack gateway port.
     * @default 4566
     */
    readonly port?: number;

    /**
     * Enable LocalStack debug mode.
     * @default false
     */
    readonly debug?: boolean;

    /**
     * LocalStack Docker image tag, e.g. `"4.9"` to pin a version.
     *
     * When set, LocalStack starts with the `localstack/localstack:<imageTag>` image, passed to
     * `localstack start` through the `IMAGE_NAME` environment variable. That's the community
     * image, even if a `LOCALSTACK_AUTH_TOKEN` would otherwise select the Pro image.
     *
     * Must be a valid Docker tag.
     *
     * @default - the LocalStack CLI's default image
     * @see https://docs.localstack.cloud/aws/customization/configuration-options/
     */
    readonly imageTag?: string;
}

/**
 * LocalStack component for projen projects.
 *
 * Adds LocalStack support to your project with automatic Docker/Colima setup.
 */
export class LocalStack extends Component {
    constructor(scope: IConstruct, options: LocalStackOptions = {}) {
        super(scope);

        const project = NodeProject.of(this);
        if (!(project instanceof NodeProject)) {
            throw new Error("LocalStack component requires a NodeProject");
        }

        const port = options.port ?? 4566;
        const debug = options.debug ?? false;

        /* The tag ends up in a shell command, so only accept valid Docker tags */
        if (options.imageTag !== undefined && !/^[\w][\w.-]{0,127}$/.test(options.imageTag)) {
            throw new Error(`LocalStack imageTag "${options.imageTag}" is not a valid Docker image tag`);
        }

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
        if (options.imageTag !== undefined) {
            envVars.push(`IMAGE_NAME=localstack/localstack:${options.imageTag}`);
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
