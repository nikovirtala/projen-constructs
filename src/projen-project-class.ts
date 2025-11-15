import type { Project, SourceCodeOptions } from "projen";
import { Component, TextFile } from "projen";

export interface ProjenProjectClassOptions extends SourceCodeOptions {
    /**
     * The name of the generated class
     */
    readonly name: string;

    /**
     * The base class to extend (e.g., "typescript.TypeScriptProject")
     */
    readonly baseClass: string;

    /**
     * The options interface name (e.g., "TypeScriptProjectOptions")
     */
    readonly optionsInterface: string;

    /**
     * The base options type (e.g., "typescript.TypeScriptProjectOptions")
     */
    readonly baseOptionsType: string;

    /**
     * The default config constant name (e.g., "typescriptProjectDefaultOptions")
     */
    readonly defaultConfig: string;

    /**
     * Output file path
     */
    readonly filePath: string;

    /**
     * Custom options to extract from constructor
     * @default ["mise", "vitest", "vitestOptions"]
     */
    readonly customOptions?: string[];

    /**
     * Indentation size
     * @default 4
     */
    readonly indent?: number;
}

class CodeBuffer {
    private lines = [] as string[];
    private indentLevel = 0;

    constructor(private readonly indent = " ") {}

    flush(): string[] {
        const current = this.lines;
        this.reset();
        return current;
    }

    line(code?: string) {
        const prefix = this.indent.repeat(this.indentLevel);
        this.lines.push((prefix + (code ?? "")).trimEnd());
    }

    open(code?: string) {
        if (code) {
            this.line(code);
        }
        this.indentLevel++;
    }

    close(code?: string) {
        if (this.indentLevel === 0) {
            throw new Error("Cannot decrease indent level below zero");
        }
        this.indentLevel--;
        if (code) {
            this.line(code);
        }
    }

    private reset(): void {
        this.lines = [] as string[];
        this.indentLevel = 0;
    }
}

class TypeScriptClassRenderer {
    private buffer: CodeBuffer;

    constructor(indent = 4) {
        this.buffer = new CodeBuffer(" ".repeat(indent));
    }

    render(options: ProjenProjectClassOptions): string {
        this.buffer.flush();

        const customOptions = options.customOptions ?? ["mise", "vitest", "vitestOptions"];
        const imports = this.extractImports(options);

        this.renderImports(imports);
        this.buffer.line();
        this.renderExport(options);
        this.buffer.line();
        this.renderClass(options, customOptions);
        this.buffer.line();

        return this.buffer.flush().join("\n");
    }

    private extractImports(options: ProjenProjectClassOptions): Map<string, Set<string>> {
        const imports = new Map<string, Set<string>>();
        const baseModule = options.baseClass.split(".")[0];
        const optionsFileName = this.getOptionsFileName(options.optionsInterface);

        // Projen imports
        imports.set("projen", new Set([baseModule]));

        // Config imports
        imports.set("../config", new Set(["applyDefaultConfig", options.defaultConfig]));

        // Utils imports
        imports.set("../utils", new Set(["deepMerge"]));

        // Options interface import (type-only)
        imports.set(`./${optionsFileName}.generated`, new Set([options.optionsInterface]));

        return imports;
    }

    private renderImports(imports: Map<string, Set<string>>) {
        const sortedModules = Array.from(imports.keys()).sort((a, b) => {
            // Sort: external packages first, then relative imports
            const aIsRelative = a.startsWith(".");
            const bIsRelative = b.startsWith(".");
            if (aIsRelative !== bIsRelative) {
                return aIsRelative ? 1 : -1;
            }
            return a.localeCompare(b);
        });

        for (const mod of sortedModules) {
            const names = Array.from(imports.get(mod) || []).sort();
            const isTypeOnly = mod.includes(".generated");
            const importStmt = isTypeOnly ? "import type" : "import";
            this.buffer.line(`${importStmt} { ${names.join(", ")} } from "${mod}";`);
        }
    }

    private renderExport(options: ProjenProjectClassOptions) {
        const optionsFileName = this.getOptionsFileName(options.optionsInterface);
        this.buffer.line(`export { ${options.optionsInterface} } from "./${optionsFileName}.generated";`);
    }

    private renderClass(options: ProjenProjectClassOptions, customOptions: string[]) {
        this.buffer.open(`export class ${options.name} extends ${options.baseClass} {`);
        this.renderConstructor(options, customOptions);
        this.buffer.close("}");
    }

    private renderConstructor(options: ProjenProjectClassOptions, customOptions: string[]) {
        this.buffer.open(`constructor(options: ${options.optionsInterface}) {`);
        this.buffer.line(`const { ${customOptions.join(", ")}, ...baseOptions } = options;`);
        this.buffer.line();
        this.buffer.line(`super(deepMerge<${options.baseOptionsType}>(${options.defaultConfig}, baseOptions));`);
        this.buffer.line();
        this.buffer.line("applyDefaultConfig(this, vitest, vitestOptions, mise);");
        this.buffer.close("}");
    }

    private getOptionsFileName(optionsInterface: string): string {
        // Map known interfaces to their file names
        const mapping: Record<string, string> = {
            TypeScriptProjectOptions: "typescript-options",
            JsiiProjectOptions: "jsii-options",
            AwsCdkTypeScriptAppProjectOptions: "awscdk-typescript-app-options",
            AwsCdkConstructLibraryProjectOptions: "awscdk-construct-library-options",
        };

        return mapping[optionsInterface] || optionsInterface.toLowerCase();
    }
}

export class ProjenProjectClass extends Component {
    private renderer: TypeScriptClassRenderer;

    constructor(
        project: Project,
        private readonly options: ProjenProjectClassOptions,
    ) {
        super(project);
        this.renderer = new TypeScriptClassRenderer(options.indent);
    }

    preSynthesize(): void {
        const content = this.renderer.render(this.options);

        new TypeScriptClassFile(this.project, this.options.filePath, content, {
            readonly: this.options.readonly ?? true,
        });
    }
}

class TypeScriptClassFile extends TextFile {
    constructor(project: Project, filePath: string, content: string, options: SourceCodeOptions = {}) {
        super(project, filePath, options);
        this.addLine(`// ${this.marker}`);
        this.addLine(content);
    }
}
