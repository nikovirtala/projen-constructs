import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import type { Assembly } from "@jsii/spec";
import { ProjenStruct, Struct } from "@mrgrain/jsii-struct-builder";
import type { Project, SourceCodeOptions, typescript } from "projen";
import * as projen from "projen";
import {
    ComponentResolutionError,
    InvalidBaseClassFormatError,
    InvalidFilePathError,
    InvalidIndentLevelError,
    ManifestLoadError,
} from "./errors";
import type { ProjectType } from "./project-type";

/**
 * Default components applied to all generated projects
 */
function getDefaultComponents(): Component[] {
    return [
        { componentClass: require("./components/mise").Mise },
        {
            componentClass: require("./components/vitest").Vitest,
            optionsProperty: {
                name: "vitestOptions",
                type: "@nikovirtala/projen-constructs.VitestOptions",
                docs: "Vitest configuration",
            },
        },
    ];
}

/**
 * Configuration for a component to be integrated into a generated project
 */
export interface Component {
    /**
     * Component class reference
     *
     * @jsii ignore
     */
    readonly componentClass: any;

    /**
     * Fully qualified name of the component class
     *
     * Optional - auto-detected by searching JSII manifests.
     */
    readonly fqn?: string;

    /**
     * Options property configuration for the generated options interface
     *
     * Optional - auto-detected from component constructor.
     * Set to false to disable options property generation.
     * Set to string or object to customize the property name.
     */
    readonly optionsProperty?: string | ComponentOptions | false;
}

/**
 * Options property configuration
 */
export interface ComponentOptions {
    /**
     * Name of the options property
     */
    readonly name: string;
    /**
     * Fully qualified type name (optional, auto-detected from component constructor)
     */
    readonly type?: string;
    /**
     * Documentation summary (optional, auto-detected from component constructor)
     */
    readonly docs?: string;
}

/**
 * Options for ProjectGenerator component
 *
 * Configures the generation of a TypeScript project class that extends a Projen base class
 * with standard configuration and component integration.
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
    readonly components?: Component[];

    /**
     * Additional properties to add to the generated options interface
     *
     * Use this to extend the base options with custom properties specific to
     * your project type.
     *
     * @jsii ignore
     */
    readonly additionalOptions?: any[];

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
    public jsiiManifest: Assembly;

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
        const components = options.components ?? getDefaultComponents();

        /* Extract component configuration for constructor generation */
        const { destructure, componentArray } = this.extractComponentOptions(components);
        const imports = this.extractImports(options, optionsInterface);

        /* Render all sections of the class file */
        this.renderImports(imports);
        this.buffer.line();
        this.renderExport(optionsInterface);
        this.buffer.line();
        this.renderClass(options, optionsInterface, baseOptionsType, destructure, componentArray);

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
    private extractComponentOptions(components: Component[]): { destructure: string[]; componentArray: string } {
        const destructure: string[] = [];
        const componentParts: string[] = [];

        for (const c of components) {
            /* Convert component class name to camelCase variable name (e.g., Vitest -> vitest) */
            const name = c.componentClass.name.charAt(0).toLowerCase() + c.componentClass.name.slice(1);
            destructure.push(name);

            /* Build component config object for applyDefaults() call */
            const parts = [`component: ${c.componentClass.name}`];
            if (c.optionsProperty && typeof c.optionsProperty !== "boolean") {
                /* Component has configurable options - include both enabled flag and options */
                const propName = typeof c.optionsProperty === "string" ? c.optionsProperty : c.optionsProperty.name;
                destructure.push(propName);
                parts.push(`enabled: ${name}`, `options: ${propName}`);
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
        const components = options.components ?? getDefaultComponents();
        for (const c of components) {
            const componentName = c.componentClass.name;
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
 * with opinionated defaults and component integration.
 */
export class ProjectGenerator extends projen.Component {
    private renderer: TypeScriptClassRenderer;
    private static enumGenerated = false;

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

        /* Generate ProjectType enum once on first instantiation */
        if (!ProjectGenerator.enumGenerated) {
            this.generateProjectTypeEnum();
            ProjectGenerator.enumGenerated = true;
        }

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
        const components = options.components ?? getDefaultComponents();
        const { PrimitiveType } = require("@jsii/spec");

        for (const c of components) {
            const name = c.componentClass.name.charAt(0).toLowerCase() + c.componentClass.name.slice(1);

            /* Add enabled flag for the component */
            struct.add({
                name,
                type: { primitive: PrimitiveType.Boolean },
                optional: true,
                docs: {
                    summary: `Enable ${c.componentClass.name} component`,
                    default: "true",
                },
            });

            /* Add options property if component is configurable */
            if (c.optionsProperty !== false) {
                try {
                    const optionsType = this.resolveComponentOptionsType(c);
                    if (optionsType && this.isFqnAvailable(optionsType.fqn)) {
                        struct.add({
                            name: optionsType.name,
                            type: { fqn: optionsType.fqn },
                            optional: true,
                            docs: {
                                summary: optionsType.docs ?? `${c.componentClass.name} configuration`,
                                default: `- default ${c.componentClass.name} configuration`,
                            },
                        });
                    }
                } catch (error) {
                    /* Component has no options parameter or resolution failed - skip */
                    console.warn(
                        JSON.stringify({
                            message: "Failed to resolve component options type",
                            component: c.componentClass.name,
                            error: error instanceof Error ? error.message : String(error),
                        }),
                    );
                }
            }
        }

        /* Add custom options to the interface */
        if (options.additionalOptions && options.additionalOptions.length > 0) {
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

    /**
     * Checks if an FQN is available in any JSII manifest
     */
    private isFqnAvailable(fqn: string): boolean {
        try {
            const manifest = this.loadManifestForFqn(fqn);
            return manifest.types?.[fqn] !== undefined;
        } catch {
            return false;
        }
    }

    /**
     * Resolves component options type from JSII manifest
     *
     * Auto-detects options from JSII manifest when optionsProperty is undefined.
     * Returns null only when optionsProperty is explicitly set to false.
     */
    private resolveComponentOptionsType(component: Component): { name: string; fqn: string; docs?: string } | null {
        /* Normalize optionsProperty to ComponentOptions */
        let optionsConfig: ComponentOptions | undefined;
        if (typeof component.optionsProperty === "string") {
            optionsConfig = { name: component.optionsProperty };
        } else if (component.optionsProperty && typeof component.optionsProperty === "object") {
            optionsConfig = component.optionsProperty;
        }

        /* Use explicit type if provided */
        if (optionsConfig?.type) {
            return {
                name: optionsConfig.name,
                fqn: optionsConfig.type,
                docs: optionsConfig.docs,
            };
        }

        /* Find component in JSII manifests */
        const componentFqn = component.fqn ?? this.findComponentFqn(component.componentClass.name);
        const manifest = this.loadManifestForFqn(componentFqn);

        const classType = manifest.types?.[componentFqn];
        if (!classType || classType.kind !== "class") {
            throw new ComponentResolutionError(componentFqn, "Component not found in JSII manifest");
        }

        const initializer = (classType as { initializer?: { parameters?: Array<{ type?: { fqn?: string } }> } })
            .initializer;
        if (!initializer?.parameters?.[1]) {
            return null; /* Component has no options parameter */
        }

        const optionsParam = initializer.parameters[1];
        const optionsFqn = optionsParam.type?.fqn;

        if (!optionsFqn) {
            return null; /* Options parameter has no FQN */
        }

        const optionsType = manifest.types?.[optionsFqn];
        const docs = (optionsType as { docs?: { summary?: string } } | undefined)?.docs?.summary;

        /* Auto-generate property name if not provided */
        const name = component.componentClass.name;
        const defaultName = `${name.charAt(0).toLowerCase()}${name.slice(1)}Options`;
        const propertyName = optionsConfig?.name ?? defaultName;

        return { name: propertyName, fqn: optionsFqn, docs };
    }

    /**
     * Finds component FQN by searching all JSII manifests
     */
    private findComponentFqn(componentName: string): string {
        /* Try own package first */
        const ownFqn = `@nikovirtala/projen-constructs.${componentName}`;
        try {
            const ownManifest = this.loadOwnManifest();
            if (ownManifest.types?.[ownFqn]) {
                return ownFqn;
            }
        } catch (error) {
            /* Own manifest not available yet during development - this is expected */
            console.warn(
                JSON.stringify({
                    message: "Own manifest not available",
                    component: componentName,
                    error: error instanceof Error ? error.message : String(error),
                }),
            );
        }

        /* Search in node_modules for JSII packages */
        const nodeModulesPath = join(__dirname, "../../node_modules");
        const packages = this.findJsiiPackages(nodeModulesPath);

        for (const pkg of packages) {
            try {
                const manifest = this.loadManifestFromPackage(pkg);
                for (const fqn of Object.keys(manifest.types ?? {})) {
                    if (fqn.endsWith(`.${componentName}`)) {
                        return fqn;
                    }
                }
            } catch (error) {
                /* Skip packages with invalid manifests - log for debugging */
                console.warn(
                    JSON.stringify({
                        message: "Failed to load manifest from package",
                        package: pkg,
                        error: error instanceof Error ? error.message : String(error),
                    }),
                );
            }
        }

        throw new ComponentResolutionError(componentName, "Component not found in any JSII manifest");
    }

    /**
     * Finds all JSII packages in node_modules
     */
    private findJsiiPackages(nodeModulesPath: string): string[] {
        const packages: string[] = [];
        const { readdirSync, statSync, existsSync } = require("node:fs");

        if (!existsSync(nodeModulesPath)) {
            return packages;
        }

        const resolvedBase = resolve(nodeModulesPath);

        for (const entry of readdirSync(nodeModulesPath)) {
            const entryPath = resolve(nodeModulesPath, entry);

            /* Prevent path traversal attacks */
            if (!entryPath.startsWith(resolvedBase)) {
                continue;
            }

            if (entry.startsWith("@")) {
                /* Scoped package - recurse into scope */
                const scopePath = entryPath;
                for (const scopedEntry of readdirSync(scopePath)) {
                    const pkgPath = resolve(scopePath, scopedEntry);

                    /* Prevent path traversal attacks */
                    if (!pkgPath.startsWith(resolvedBase)) {
                        continue;
                    }

                    if (existsSync(join(pkgPath, ".jsii"))) {
                        packages.push(pkgPath);
                    }
                }
            } else if (statSync(entryPath).isDirectory()) {
                /* Regular package */
                if (existsSync(join(entryPath, ".jsii"))) {
                    packages.push(entryPath);
                }
            }
        }

        return packages;
    }

    /**
     * Loads JSII manifest for a given FQN
     *
     * Extracts package name from FQN. For scoped packages like @scope/package.ClassName,
     * the package name is everything before the first dot (i.e., @scope/package).
     */
    private loadManifestForFqn(fqn: string): Assembly {
        const dotIndex = fqn.indexOf(".");
        const packageName = dotIndex > 0 ? fqn.substring(0, dotIndex) : fqn;

        /* Try own package */
        if (packageName === "@nikovirtala/projen-constructs") {
            return this.loadOwnManifest();
        }

        /* Try node_modules */
        try {
            const pkgJsonPath = require.resolve(`${packageName}/package.json`);
            return this.loadManifestFromPackage(dirname(pkgJsonPath));
        } catch (error) {
            throw new ManifestLoadError(packageName, error instanceof Error ? error.message : String(error));
        }
    }

    /**
     * Loads JSII manifest from a package directory
     */
    private loadManifestFromPackage(packagePath: string): Assembly {
        const jsiiPath = join(packagePath, ".jsii");
        return JSON.parse(readFileSync(jsiiPath, "utf-8"));
    }

    /**
     * Loads this package's JSII manifest
     */
    private loadOwnManifest(): Assembly {
        const jsiiPath = join(__dirname, "../.jsii");
        return JSON.parse(readFileSync(jsiiPath, "utf-8"));
    }

    /**
     * Generates ProjectType enum from Projen's JSII manifest
     */
    private generateProjectTypeEnum(): void {
        const projectTypes = this.discoverProjectTypes();

        const lines: string[] = [];
        lines.push("/**");
        lines.push(" * Enum defining all supported project types");
        lines.push(" *");
        lines.push(" * Each project type corresponds to a generated project class and its configuration");
        lines.push(" * in the defaultOptions structure.");
        lines.push(" *");
        lines.push(" * @generated Automatically generated from Projen's JSII manifest");
        lines.push(" */");
        lines.push("export enum ProjectType {");

        for (const [enumName, value, docs] of projectTypes) {
            lines.push("    /**");
            lines.push(`     * ${docs}`);
            lines.push("     */");
            lines.push(`    ${enumName} = "${value}",`);
            lines.push("");
        }

        lines.push("}");

        new projen.TextFile(this.project, "src/project-type.ts", {
            readonly: true,
            lines,
        });
    }

    /**
     * Discovers all project types that extend projen.Project
     */
    private discoverProjectTypes(): Array<[string, string, string]> {
        const projectTypes: Array<[string, string, string]> = [];
        const baseClass = "projen.Project";

        for (const [fqn, type] of Object.entries(this.renderer.jsiiManifest.types ?? {})) {
            if (type.kind !== "class") {
                continue;
            }

            const classType = type as {
                abstract?: boolean;
                base?: string;
                docs?: { summary?: string };
            };

            if (classType.abstract) {
                continue;
            }

            if (!this.extendsBase(classType, baseClass)) {
                continue;
            }

            const parts = fqn.split(".");
            if (parts.length < 3 || parts[0] !== "projen") {
                continue;
            }

            const module = parts[1];
            const className = parts.slice(2).join(".");
            const enumName = className
                .replace(/([A-Z])/g, "_$1")
                .toUpperCase()
                .replace(/^_/, "");
            const value = `${module}.${className}`;
            const docs = classType.docs?.summary ?? className;

            projectTypes.push([enumName, value, docs]);
        }

        return projectTypes.sort((a, b) => a[0].localeCompare(b[0]));
    }

    /**
     * Checks if a class extends the base class
     */
    private extendsBase(classType: { inheritancePath?: string[]; base?: string }, baseClass: string): boolean {
        if (classType.inheritancePath) {
            return classType.inheritancePath.includes(baseClass);
        }

        let currentBase = classType.base;
        while (currentBase) {
            if (currentBase === baseClass) {
                return true;
            }
            const baseType = this.renderer.jsiiManifest.types?.[currentBase];
            if (!baseType || baseType.kind !== "class") {
                break;
            }
            currentBase = (baseType as { base?: string }).base;
        }

        return false;
    }
}

/**
 * Text file for generated TypeScript class code
 *
 * Extends Projen's TextFile to add the generated file marker comment
 * at the beginning of the file.
 */
class TypeScriptClassFile extends projen.TextFile {
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
