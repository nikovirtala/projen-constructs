import type { IConstruct } from "constructs";
import { Component } from "projen/lib/component";
import { NodeProject } from "projen/lib/javascript";
import { Colima } from "./colima";
import { Homebrew } from "./homebrew";

/**
 * Options for Floci component.
 */
export interface FlociOptions {
    /**
     * AWS services to enable.
     * @default - all services enabled
     */
    readonly services?: string[];

    /**
     * Floci AWS emulator host port.
     * @default 4566
     */
    readonly port?: number;

    /**
     * Floci Docker image, e.g. `"floci/floci:1.5.0"` to pin a version.
     *
     * When set, Floci starts from this image, passed to `floci start` through its `--image`
     * flag. Otherwise the Floci CLI uses its default image.
     *
     * Must be a valid Docker image reference (`name` or `name:tag`).
     *
     * @default - the Floci CLI's default image
     * @see https://floci.io
     */
    readonly image?: string;
}

/**
 * Floci component for projen projects.
 *
 * Adds Floci (https://floci.io) support to your project with automatic Docker/Colima setup.
 * Floci is a local cloud emulator and a drop-in replacement for LocalStack; this component
 * delivers its AWS emulator.
 */
export class Floci extends Component {
    constructor(scope: IConstruct, options: FlociOptions = {}) {
        super(scope);

        const project = NodeProject.of(this);
        if (!(project instanceof NodeProject)) {
            throw new Error("Floci component requires a NodeProject");
        }

        const port = options.port ?? 4566;

        /* The image ends up in a shell command, so only accept valid Docker image references */
        if (options.image !== undefined && !/^[\w][\w./-]*(:[\w][\w.-]{0,127})?$/.test(options.image)) {
            throw new Error(`Floci image "${options.image}" is not a valid Docker image reference`);
        }

        new Colima(project);

        let homebrew = Homebrew.of(project);
        if (!homebrew) {
            homebrew = new Homebrew(project);
        }

        homebrew.addPackage("floci-io/floci/floci");

        const colimaTask = project.tasks.tryFind("colima");

        const startArgs = [`--port ${port}`];
        if (options.services) {
            startArgs.push(`--services ${options.services.join(",")}`);
        }
        if (options.image !== undefined) {
            startArgs.push(`--image ${options.image}`);
        }

        const flociTask = project.addTask("floci", {
            exec: `floci status >/dev/null 2>&1 || floci start --detach ${startArgs.join(" ")}`,
        });

        if (colimaTask) {
            flociTask.prependSpawn(colimaTask);
        }

        project.addDevDeps("aws-cdk-local");

        const testTask = project.tasks.tryFind("test");
        if (testTask) {
            testTask.prependSpawn(flociTask);
        }
    }
}
