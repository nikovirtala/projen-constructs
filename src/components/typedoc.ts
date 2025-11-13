import { Component } from "projen/lib/component";
import type { NodeProject } from "projen/lib/javascript/node-project";
import { JsonFile } from "projen/lib/json";
import type { Project } from "projen/lib/project";
import type { Task } from "projen/lib/task";
import { deepMerge } from "projen/lib/util";
import { EntryPointStrategy, type TypeDocConfiguration, toJson_TypeDocConfiguration } from "./typedoc-config";

const DEFAULT_CONFIG: TypeDocConfiguration = {
    entryPointStrategy: EntryPointStrategy.EXPAND,
    out: "docs/api",
    exclude: ["**/*.test.ts"],
    excludePrivate: true,
    disableSources: true,
};

export interface TypeDocOptions {
    readonly version?: string;
    readonly typeDocConfig?: TypeDocConfiguration;
}

export class TypeDoc extends Component {
    public static of(project: Project): TypeDoc | undefined {
        const isTypeDoc = (c: Component): c is TypeDoc => c instanceof TypeDoc;
        return project.components.find(isTypeDoc);
    }

    private readonly typeDocConfiguration: Record<string, unknown>;
    public readonly task: Task;
    public readonly file: JsonFile;

    constructor(project: NodeProject, options: TypeDocOptions = {}) {
        super(project);

        const typedoc = "typedoc";
        project.addDevDeps(`${typedoc}@${options.version ?? "^0.28"}`);

        this.typeDocConfiguration = deepMerge(
            [toJson_TypeDocConfiguration(DEFAULT_CONFIG), toJson_TypeDocConfiguration(options.typeDocConfig ?? {})],
            { mergeArrays: true },
        );

        this.file = new JsonFile(this, "typedoc.jsonc", {
            obj: this.typeDocConfiguration,
            allowComments: true,
            marker: true,
            readonly: false,
        });

        this.task = project.addTask("typedoc", {
            description: "Generate TypeDoc documentation",
            steps: [
                {
                    exec: "typedoc",
                },
            ],
        });
        project.testTask.spawn(this.task);
    }
}

export * from "./typedoc-config";
