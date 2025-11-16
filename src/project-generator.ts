import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import type { Assembly, Property } from "@jsii/spec";
import { ProjenStruct, Struct } from "@mrgrain/jsii-struct-builder";
import type { Project, SourceCodeOptions, typescript } from "projen";
import { Component, TextFile } from "projen";
import { InvalidBaseClassFormatError, InvalidFilePathError, InvalidIndentLevelError } from "./errors";
import type { ProjectType } from "./project-type";

/**
 * Default components applied to all generated projects
 */
const DEFAULT_COMPONENTS: ComponentConfig[] = [
    { component: require("./components/mise").Mise },
    {
        component: require("./components/vitest").Vitest,
        optionsProperty: {
            name: "vitestOptions",
            type: "@nikovirtala/projen-constructs.VitestOptions",
            docs: "Vitest configuration",
        },
    },
];

/**
 * Configuration for a component to be integrated into a generated project
 *
 * @example
 * ```typescript
 * const config: ComponentConfig = {
 *   component: Vitest,
 *   optionsProperty: "vitestOptions"
 * };
 * ```
 */
interface ComponentConfig<T extends Component = Component> {
    /**
     * Component class constructor
     */
    readonly component: new (
        project: never,
        options?: never,
    ) => T;

    /**
     * Options property configuration for the generated options interface
     *
     * When specified, adds an options property to the interface allowing
     * users to configure the component.
     */
    readonly optionsProperty?: {
        /**
         * Name of the options property (e.g., "vitestOptions")
         */
        readonly name: string;
        /**
         * Fully qualified type name (e.g., "@nikovirtala/projen-constructs.VitestOptions")
         */
        readonly type: string;
        /**
         * Documentation summary
         */
        readonly docs?: string;
    };
}

/**
 * Options for ProjectGenerator component
 *
 * Configures the generation of a TypeScript project class that extends a Projen base class
 * with standard configuration and component integration.
 *
 * @example
 * ```typescript
 * new ProjectGenerator(project, {
 *   name: "TypeScriptProject",
 *   baseClass: "typescript.TypeScriptProject",
 *   filePath: "src/projects/typescript.generated.ts",
 *   components: [{ component: Vitest, optionsProperty: "vitestOptions" }]
 * });
 * ```
 */
export interface ProjectGeneratorOptions extends SourceCodeOptions {
    /**
     * Name of the generated class (e.g., "TypeScriptProject")
     *
     * The options interface will be named `${name}Options`.
     */
    readonly name: string;

    /**
     * Project type identifier
     *
     * Specifies which Projen base class to extend and which default configuration to apply.
     *
     * @example ProjectType.TYPESCRIPT
     * @example ProjectType.JSII
     */
    readonly projectType: ProjectType;

    /**
     * Output file path for the generated class
     *
     * Must contain a directory separator. The options interface will be generated
     * in the same directory with a ".generated.ts" suffix.
     *
     * @example "src/projects/typescript.generated.ts"
     */
    readonly filePath: string;

    /**
     * Components to integrate into the project
     *
     * Each component will be instantiated during project construction and can be
     * configured via an optional options property in the generated interface.
     *
     * @default [{ component: Mise }, { component: Vitest, optionsProperty: { name: "vitestOptions", type: "...", docs: "..." } }]
     */
    readonly components?: ComponentConfig[];

    /**
     * Additional properties to add to the generated options interface
     *
     * Use this to extend the base options with custom properties specific to
     * your project type.
     */
    readonly additionalOptions?: Property[];

    /**
     * Property names to omit from the base options interface
     *
     * Use this to hide base class options that should not be configurable
     * in the generated project type.
     */
    readonly omitOptions?: string[];
}

/**
 * Buffer for building indented code with automatic line management
 *
 * Maintains indentation level and provides methods for adding lines,
 * opening/closing blocks, and flushing accumulated content.
 */
class CodeBuffer {
    private lines: string[] = [];
    private indentLevel = 0;

    /**
     * @param indent - String to use for each indentation level (default: single space)
     */
    constructor(private readonly indent = " ") {}

    /**
     * Returns all accumulated lines and resets the buffer
     *
     * @returns Array of code lines with proper indentation
     */
    flush(): string[] {
        const current = this.lines;
        this.reset();
        return current;
    }

    /**
     * Adds a line of code at the current indentation level
     *
     * @param code - Code to add (optional, adds blank line if omitted)
     */
    line(code?: string) {
        const prefix = this.indent.repeat(this.indentLevel);
        this.lines.push((prefix + (code ?? "")).trimEnd());
    }

    /**
     * Opens a new indentation block
     *
     * @param code - Optional code to add before increasing indent (e.g., opening brace)
     */
    open(code?: string) {
        if (code) {
            this.line(code);
        }
        this.indentLevel++;
    }

    /**
     * Closes the current indentation block
     *
     * @param code - Optional code to add after decreasing indent (e.g., closing brace)
     * @throws {InvalidIndentLevelError} When attempting to decrease indent below zero
     */
    close(code?: string) {
        if (this.indentLevel === 0) {
            throw new InvalidIndentLevelError();
        }
        this.indentLevel--;
        if (code) {
            this.line(code);
        }
    }

    /**
     * Resets the buffer to initial state
     */
    private reset(): void {
        this.lines = [];
        this.indentLevel = 0;
    }
}

/**
 * Renders TypeScript class code from ProjectGenerator options
 *
 * Generates a complete TypeScript class file including imports, options interface export,
 * class declaration, and constructor with component integration.
 *
 * Uses JSII manifest introspection to validate base classes and options interfaces.
 */
class TypeScriptClassRenderer {
    private buffer: CodeBuffer;
    private jsiiManifest: Assembly;

    /**
     * @param indent - Number of spaces per indentation level (default: 4)
     */
    constructor(indent = 4) {
        this.buffer = new CodeBuffer(" ".repeat(indent));
        /* Load Projen's JSII manifest for base class introspection */
        const projenPackageJson = require.resolve("projen/package.json");
        const projenRoot = dirname(projenPackageJson);
        const jsiiPath = join(projenRoot, ".jsii");
        this.jsiiManifest = JSON.parse(readFileSync(jsiiPath, "utf-8"));
    }

    /**
     * Renders complete TypeScript class code from options
     *
     * Orchestrates the rendering process: derives names, extracts component configuration,
     * builds import statements, and renders the class structure.
     *
     * @param options - Generator configuration
     * @returns Complete TypeScript class code as a string
     */
    render(options: ProjectGeneratorOptions): string {
        this.buffer.flush();

        /* Derive interface and type names from the class name */
        const optionsInterface = `${options.name}Options`;
        const baseOptionsFqn = this.getBaseOptionsFqn(options.projectType);
        const baseOptionsType = baseOptionsFqn.replace(/^projen\./, "");

        /* Use provided components or fall back to defaults (Mise + Vitest) */
        const components = options.components ?? DEFAULT_COMPONENTS;

        /* Extract component configuration for constructor generation */
        const { destructure, componentArray } = this.extractComponentOptions(components);
        const imports = this.extractImports(options, optionsInterface);

        /* Render all sections of the class file */
        this.renderImports(imports);
        this.buffer.line();
        this.renderExport(optionsInterface);
        this.buffer.line();
        this.renderClass(options, optionsInterface, baseOptionsType, destructure, componentArray);
        this.buffer.line();

        return this.buffer.flush().join("\n");
    }

    /**
     * Derives the fully qualified options interface name from project type
     *
     * Transforms project type into the corresponding Projen options interface name
     * by appending "Options" suffix and prefixing with "projen." namespace.
     * Validates that the base class exists in Projen's JSII manifest.
     *
     * @param projectType - Project type identifier
     * @returns Fully qualified options interface name
     * @throws {InvalidBaseClassFormatError} When projectType format is invalid or class not found
     *
     * @example
     * getBaseOptionsFqn(ProjectType.TYPESCRIPT) // "projen.typescript.TypeScriptProjectOptions"
     * getBaseOptionsFqn(ProjectType.JSII) // "projen.cdk.JsiiProjectOptions"
     */
    getBaseOptionsFqn(projectType: ProjectType): string {
        const baseClass = projectType.valueOf();
        /* Validate base class format: must contain module.ClassName structure */
        if (!baseClass.includes(".")) {
            throw new InvalidBaseClassFormatError(baseClass);
        }

        const baseClassFqn = `projen.${baseClass}`;
        const optionsFqn = `${baseClassFqn}Options`;

        /* Validate base class exists in JSII manifest */
        if (!this.jsiiManifest.types?.[baseClassFqn]) {
            throw new InvalidBaseClassFormatError(`Base class not found in JSII manifest: ${baseClassFqn}`);
        }

        /* Validate options interface exists in JSII manifest */
        if (!this.jsiiManifest.types?.[optionsFqn]) {
            throw new InvalidBaseClassFormatError(`Options interface not found in JSII manifest: ${optionsFqn}`);
        }

        return optionsFqn;
    }

    /**
     * Extracts component configuration for constructor code generation
     *
     * Transforms component configurations into:
     * 1. Destructure list: variable names to extract from options
     * 2. Component array: code string for applyDefaults() call
     *
     * @param components - Component configurations
     * @returns Object with destructure array and componentArray code string
     *
     * @example
     * Input: [{ component: Vitest, optionsProperty: { name: "vitestOptions", ... } }]
     * Output: {
     *   destructure: ["vitest", "vitestOptions"],
     *   componentArray: "[{ component: Vitest, enabled: vitest, options: vitestOptions }]"
     * }
     */
    private extractComponentOptions(components: ComponentConfig[]): { destructure: string[]; componentArray: string } {
        const destructure: string[] = [];
        const componentParts: string[] = [];

        for (const c of components) {
            /* Convert component class name to camelCase variable name (e.g., Vitest -> vitest) */
            const name = c.component.name.charAt(0).toLowerCase() + c.component.name.slice(1);
            destructure.push(name);

            /* Build component config object for applyDefaults() call */
            const parts = [`component: ${c.component.name}`];
            if (c.optionsProperty) {
                /* Component has configurable options - include both enabled flag and options */
                destructure.push(c.optionsProperty.name);
                parts.push(`enabled: ${name}`, `options: ${c.optionsProperty.name}`);
            } else {
                /* Component has no options - only include enabled flag */
                parts.push(`enabled: ${name}`);
            }
            componentParts.push(`{ ${parts.join(", ")} }`);
        }

        return { destructure, componentArray: `[${componentParts.join(", ")}]` };
    }

    /**
     * Builds import statements map for the generated class
     *
     * Collects all required imports:
     * - Projen base module (typescript, cdk, awscdk)
     * - Config utilities (applyDefaults, defaultOptions)
     * - Component classes
     * - Utility functions (deepMerge)
     * - Generated options interface (type-only import)
     *
     * @param options - Generator configuration
     * @param optionsInterface - Name of the generated options interface
     * @returns Map of module paths to sets of imported names
     */
    private extractImports(options: ProjectGeneratorOptions, optionsInterface: string): Map<string, Set<string>> {
        const imports = new Map<string, Set<string>>();

        /* Extract base module name from projectType (e.g., "typescript" from "typescript.TypeScriptProject") */
        const baseModule = options.projectType.valueOf().split(".")[0];
        const optionsFileName = this.getOptionsFileName(optionsInterface);

        /* Projen base module import */
        imports.set("projen", new Set([baseModule]));

        /* Configuration utilities import */
        imports.set("../config", new Set(["applyDefaults", "defaultOptions"]));

        /* Component class imports - derive module path from component class name */
        const components = options.components ?? DEFAULT_COMPONENTS;
        for (const c of components) {
            const componentName = c.component.name;
            const modulePath = `../components/${componentName.toLowerCase()}`;
            if (!imports.has(modulePath)) {
                imports.set(modulePath, new Set());
            }
            const moduleImports = imports.get(modulePath);
            if (moduleImports) {
                moduleImports.add(componentName);
            }
        }

        /* Utility functions import */
        imports.set("../utils", new Set(["deepMerge"]));

        /* Generated options interface import (type-only to avoid circular dependencies) */
        imports.set(`./${optionsFileName}.generated`, new Set([optionsInterface]));

        return imports;
    }

    /**
     * Derives the config path for accessing default options
     *
     * Transforms project type into the corresponding path in the defaultOptions
     * configuration object exported from config.ts.
     *
     * @param projectType - Project type identifier
     * @returns Config path for accessing default options
     *
     * @example
     * getConfigPath(ProjectType.TYPESCRIPT) // "defaultOptions.typescript.TypeScriptProject"
     */
    private getConfigPath(projectType: ProjectType): string {
        return `defaultOptions.${projectType.valueOf()}`;
    }

    /**
     * Renders import statements in sorted order
     *
     * Sorts imports with external packages first, then relative imports.
     * Uses type-only imports for generated files to avoid circular dependencies.
     *
     * @param imports - Map of module paths to imported names
     */
    private renderImports(imports: Map<string, Set<string>>) {
        /* Sort modules: external packages first, then relative imports alphabetically */
        const sortedModules = Array.from(imports.keys()).sort((a, b) => {
            const aIsRelative = a.startsWith(".");
            const bIsRelative = b.startsWith(".");
            if (aIsRelative !== bIsRelative) {
                return aIsRelative ? 1 : -1;
            }
            return a.localeCompare(b);
        });

        for (const mod of sortedModules) {
            const names = Array.from(imports.get(mod) || []).sort();
            /* Use type-only import for generated files to prevent circular dependencies */
            const isTypeOnly = mod.includes(".generated");
            const importStmt = isTypeOnly ? "import type" : "import";
            this.buffer.line(`${importStmt} { ${names.join(", ")} } from "${mod}";`);
        }
    }

    /**
     * Renders re-export statement for the generated options interface
     *
     * @param optionsInterface - Name of the options interface to export
     */
    private renderExport(optionsInterface: string) {
        const optionsFileName = this.getOptionsFileName(optionsInterface);
        this.buffer.line();
        this.buffer.line(`export { ${optionsInterface} } from "./${optionsFileName}.generated";`);
    }

    /**
     * Renders the class declaration and constructor
     *
     * @param options - Generator configuration
     * @param optionsInterface - Name of the options interface
     * @param baseOptionsType - Base options type without "projen." prefix
     * @param destructure - Variable names to destructure from options
     * @param componentArray - Code string for component array
     */
    private renderClass(
        options: ProjectGeneratorOptions,
        optionsInterface: string,
        baseOptionsType: string,
        destructure: string[],
        componentArray: string,
    ) {
        this.buffer.line();
        this.buffer.line("/**");
        this.buffer.line(` * ${options.name} with standard configuration and component integration`);
        this.buffer.line(" *");
        this.buffer.line(" * Extends Projen's base class with opinionated defaults and automatic component setup.");
        this.buffer.line(" */");
        this.buffer.open(`export class ${options.name} extends ${options.projectType.valueOf()} {`);
        this.renderConstructor(options, optionsInterface, baseOptionsType, destructure, componentArray);
        this.buffer.close("}");
    }

    /**
     * Renders the constructor implementation
     *
     * The constructor:
     * 1. Destructures component flags and options from the options parameter
     * 2. Merges default configuration with user-provided options
     * 3. Calls super() with merged options
     * 4. Applies component defaults via applyDefaults()
     *
     * @param options - Generator configuration
     * @param optionsInterface - Name of the options interface
     * @param baseOptionsType - Base options type without "projen." prefix
     * @param destructure - Variable names to destructure from options
     * @param componentArray - Code string for component array
     */
    private renderConstructor(
        options: ProjectGeneratorOptions,
        optionsInterface: string,
        baseOptionsType: string,
        destructure: string[],
        componentArray: string,
    ) {
        const configPath = this.getConfigPath(options.projectType);
        this.buffer.line("/**");
        this.buffer.line(" * @param options - Project configuration");
        this.buffer.line(" */");
        this.buffer.open(`constructor(options: ${optionsInterface}) {`);
        this.buffer.line("/* Separate component configuration from base Projen options */");
        this.buffer.line(`const { ${destructure.join(", ")}, ...baseOptions } = options;`);
        this.buffer.line();
        this.buffer.line("/* Merge default configuration with user options and initialize base class */");
        this.buffer.line(`super(deepMerge<${baseOptionsType}>(${configPath}, baseOptions));`);
        this.buffer.line();
        this.buffer.line("/* Apply component defaults and instantiate enabled components */");
        this.buffer.line(`applyDefaults(this, ${componentArray});`);
        this.buffer.close("}");
    }

    /**
     * Maps options interface name to file name
     *
     * Converts PascalCase interface names to kebab-case file names.
     * Falls back to lowercase conversion for unmapped interfaces.
     *
     * @param optionsInterface - Options interface name
     * @returns Kebab-case file name without extension
     *
     * @example
     * getOptionsFileName("TypeScriptProjectOptions") // "typescript-options"
     */
    getOptionsFileName(optionsInterface: string): string {
        const mapping: Record<string, string> = {
            TypeScriptProjectOptions: "typescript-options",
            JsiiProjectOptions: "jsii-options",
            AwsCdkTypeScriptAppProjectOptions: "awscdk-typescript-app-options",
            AwsCdkConstructLibraryProjectOptions: "awscdk-construct-library-options",
        };
        return mapping[optionsInterface] || optionsInterface.toLowerCase();
    }
}

/**
 * Projen component that generates TypeScript project classes with standard configuration
 *
 * This component automates the creation of project classes that extend Projen base classes
 * with opinionated defaults and component integration. It generates both:
 * 1. An options interface (via ProjenStruct) that extends the base Projen options
 * 2. A project class that applies default configuration and instantiates components
 *
 * The generated code follows a consistent pattern:
 * - Imports required modules and components
 * - Re-exports the generated options interface
 * - Defines a class extending the Projen base class
 * - Constructor merges defaults with user options and applies components
 *
 * @example
 * ```typescript
 * new ProjectGenerator(project, {
 *   name: "TypeScriptProject",
 *   baseClass: "typescript.TypeScriptProject",
 *   filePath: "src/projects/typescript.generated.ts",
 *   components: [{ component: Vitest, optionsProperty: "vitestOptions" }]
 * });
 * ```
 */
export class ProjectGenerator extends Component {
    private renderer: TypeScriptClassRenderer;

    /**
     * @param project - Projen project instance
     * @param options - Generator configuration
     */
    constructor(
        project: Project,
        private readonly options: ProjectGeneratorOptions,
    ) {
        super(project);
        this.renderer = new TypeScriptClassRenderer();

        /* Generate the options interface using ProjenStruct for JSII compatibility */
        const optionsInterface = `${options.name}Options`;
        const baseOptionsFqn = this.renderer.getBaseOptionsFqn(options.projectType);
        const optionsFilePath = this.getOptionsFilePath(optionsInterface);

        /* ProjenStruct generates a concrete TypeScript interface from Projen's options
         * This is necessary because JSII doesn't support TypeScript utility types like Omit<>
         * The generated interface can be consumed by other languages (Python, Java, C#, Go) */
        const struct = new ProjenStruct(this.asTypeScriptProject(project), {
            name: optionsInterface,
            filePath: optionsFilePath,
            outputFileOptions: { readonly: true },
        })
            .mixin(Struct.fromFqn(baseOptionsFqn))
            .withoutDeprecated();

        /* Remove specified options from the base interface */
        if (options.omitOptions) {
            struct.omit(...options.omitOptions);
        }

        /* Add component-derived options to the interface */
        const components = options.components ?? DEFAULT_COMPONENTS;
        const { PrimitiveType } = require("@jsii/spec");

        for (const c of components) {
            const name = c.component.name.charAt(0).toLowerCase() + c.component.name.slice(1);

            /* Add enabled flag for the component */
            struct.add({
                name,
                type: { primitive: PrimitiveType.Boolean },
                optional: true,
                docs: {
                    summary: `Enable ${c.component.name} component`,
                    default: "true",
                },
            });

            /* Add options property if component is configurable */
            if (c.optionsProperty) {
                struct.add({
                    name: c.optionsProperty.name,
                    type: { fqn: c.optionsProperty.type },
                    optional: true,
                    docs: {
                        summary: c.optionsProperty.docs ?? `${c.component.name} configuration`,
                        default: `- default ${c.component.name} configuration`,
                    },
                });
            }
        }

        /* Add custom options to the interface */
        if (options.additionalOptions) {
            struct.add(...options.additionalOptions);
        }
    }

    /**
     * Casts project to TypeScript project type
     *
     * ProjenStruct requires a TypeScriptProject instance. This generator is only used
     * within TypeScript projects, so the cast is safe in practice.
     *
     * Note: Type assertion is necessary here because Projen's type system doesn't provide
     * a runtime type guard for TypeScriptProject.
     *
     * @param project - Projen project instance
     * @returns TypeScript project instance
     */
    private asTypeScriptProject(project: Project): typescript.TypeScriptProject {
        return project as unknown as typescript.TypeScriptProject;
    }

    /**
     * Derives the file path for the generated options interface
     *
     * Places the options interface file in the same directory as the class file
     * with a ".generated.ts" suffix.
     *
     * @param optionsInterface - Name of the options interface
     * @returns File path for the options interface
     * @throws {InvalidFilePathError} When filePath doesn't contain a directory separator
     */
    private getOptionsFilePath(optionsInterface: string): string {
        const lastSlash = this.options.filePath.lastIndexOf("/");
        if (lastSlash === -1) {
            throw new InvalidFilePathError(this.options.filePath);
        }

        const dir = this.options.filePath.substring(0, lastSlash);
        const optionsFileName = this.renderer.getOptionsFileName(optionsInterface);
        return `${dir}/${optionsFileName}.generated.ts`;
    }

    /**
     * Generates the TypeScript class file during Projen synthesis
     *
     * Called by Projen during the synthesis phase to generate the project class file.
     * The file is marked as readonly to prevent manual editing.
     */
    preSynthesize(): void {
        const content = this.renderer.render(this.options);

        new TypeScriptClassFile(this.project, this.options.filePath, content, {
            readonly: this.options.readonly ?? true,
        });
    }
}

/**
 * Text file for generated TypeScript class code
 *
 * Extends Projen's TextFile to add the generated file marker comment
 * at the beginning of the file.
 */
class TypeScriptClassFile extends TextFile {
    /**
     * @param project - Projen project instance
     * @param filePath - Output file path
     * @param content - TypeScript class code
     * @param options - Source code options (readonly, etc.)
     */
    constructor(project: Project, filePath: string, content: string, options: SourceCodeOptions = {}) {
        super(project, filePath, options);
        /* Add generated file marker to prevent manual editing */
        this.addLine(`// ${this.marker}`);
        this.addLine(content);
    }
}
