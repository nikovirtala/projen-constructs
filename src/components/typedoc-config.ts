/**
 * TypeDoc configuration
 *
 * @see https://typedoc.org/options/
 */
export interface TypeDocConfiguration {
    /**
     * Specifies the entry points to be documented by TypeDoc.
     *
     * @see https://typedoc.org/documents/Options.Input.html#entrypoints
     */
    readonly entryPoints?: string[];

    /**
     * Specifies the strategy to be used to convert entry points into documentation.
     *
     * @see https://typedoc.org/documents/Options.Input.html#entrypointstrategy
     */
    readonly entryPointStrategy?: EntryPointStrategy;

    /**
     * Define patterns to be excluded when expanding directories.
     *
     * @see https://typedoc.org/documents/Options.Input.html#exclude
     */
    readonly exclude?: string[];

    /**
     * Prevent externally resolved symbols from being documented.
     *
     * @see https://typedoc.org/documents/Options.Input.html#excludeexternals
     */
    readonly excludeExternals?: boolean;

    /**
     * Prevent private members from being included in the generated documentation.
     *
     * @see https://typedoc.org/documents/Options.Input.html#excludeprivate
     */
    readonly excludePrivate?: boolean;

    /**
     * Prevent protected members from being included in the generated documentation.
     *
     * @see https://typedoc.org/documents/Options.Input.html#excludeprotected
     */
    readonly excludeProtected?: boolean;

    /**
     * Prevent symbols that are not exported from being documented.
     *
     * @see https://typedoc.org/documents/Options.Input.html#excludeinternal
     */
    readonly excludeInternal?: boolean;

    /**
     * Specifies the output directory the documentation should be written to.
     *
     * @see https://typedoc.org/documents/Options.Output.html#out
     */
    readonly out?: string;

    /**
     * Specify the location the documentation should be written to.
     *
     * @see https://typedoc.org/documents/Options.Output.html#json
     */
    readonly json?: string;

    /**
     * Specify a theme name to use.
     *
     * @see https://typedoc.org/documents/Options.Output.html#theme
     */
    readonly theme?: string;

    /**
     * Specify the base path for all urls.
     *
     * @see https://typedoc.org/documents/Options.Output.html#basepath
     */
    readonly basePath?: string;

    /**
     * Set the name of the project that will be used in the header of the template.
     *
     * @see https://typedoc.org/documents/Options.Output.html#name
     */
    readonly name?: string;

    /**
     * Prevent TypeDoc from cleaning the output directory specified with --out.
     *
     * @see https://typedoc.org/documents/Options.Output.html#cleanoutputdir
     */
    readonly cleanOutputDir?: boolean;

    /**
     * Specify the location to look for included documents.
     *
     * @see https://typedoc.org/documents/Options.Output.html#includes
     */
    readonly includes?: string;

    /**
     * Specify the location with media files that should be copied to the output directory.
     *
     * @see https://typedoc.org/documents/Options.Output.html#media
     */
    readonly media?: string;

    /**
     * Specify the location and filename a .tsbuildinfo file should be written to.
     *
     * @see https://typedoc.org/documents/Options.Input.html#tsbuildinfo
     */
    readonly tsBuildInfo?: string;

    /**
     * Specify a TypeScript config file that should be used to load TypeScript configuration.
     *
     * @see https://typedoc.org/documents/Options.Input.html#tsconfig
     */
    readonly tsconfig?: string;

    /**
     * Specify the logger that should be used.
     *
     * @see https://typedoc.org/documents/Options.Other.html#loglevel
     */
    readonly logLevel?: LogLevel;

    /**
     * Specify the sort strategy for documented values.
     *
     * @see https://typedoc.org/documents/Options.Organization.html#sort
     */
    readonly sort?: string[];

    /**
     * Specify the sort strategy for static and instance members.
     *
     * @see https://typedoc.org/documents/Options.Organization.html#sortentrypoints
     */
    readonly sortEntryPoints?: boolean;

    /**
     * Specify the documentation mode TypeDoc should use.
     *
     * @see https://typedoc.org/documents/Options.Comments.html#commentstyle
     */
    readonly commentStyle?: CommentStyle;

    /**
     * Specify the default visibility for members without a visibility tag.
     *
     * @see https://typedoc.org/documents/Options.Comments.html#defaultvisibility
     */
    readonly defaultVisibility?: Visibility;

    /**
     * Specify the default category for reflections without a category.
     *
     * @see https://typedoc.org/documents/Options.Organization.html#defaultcategory
     */
    readonly defaultCategory?: string;

    /**
     * Specify the default group for reflections without a group.
     *
     * @see https://typedoc.org/documents/Options.Organization.html#defaultgroup
     */
    readonly defaultGroup?: string;

    /**
     * Specify the categories that will be used to group reflections.
     *
     * @see https://typedoc.org/documents/Options.Organization.html#categorizebygroup
     */
    readonly categorizeByGroup?: boolean;

    /**
     * Specify the search group boosts.
     *
     * @see https://typedoc.org/documents/Options.Organization.html#searchgroupboosts
     */
    readonly searchGroupBoosts?: Record<string, number>;

    /**
     * Specify the search category boosts.
     *
     * @see https://typedoc.org/documents/Options.Organization.html#searchcategoryboosts
     */
    readonly searchCategoryBoosts?: Record<string, number>;

    /**
     * Specify the readme file that should be displayed on the index page.
     *
     * @see https://typedoc.org/documents/Options.Input.html#readme
     */
    readonly readme?: string;

    /**
     * Specify the package.json file that should be used to determine the package name.
     *
     * @see https://typedoc.org/documents/Options.Input.html#packagejson
     */
    readonly packageJson?: string;

    /**
     * Specify the git revision that should be used to link to source files.
     *
     * @see https://typedoc.org/documents/Options.Comments.html#gitrevision
     */
    readonly gitRevision?: string;

    /**
     * Specify the git remote that should be used to link to source files.
     *
     * @see https://typedoc.org/documents/Options.Comments.html#gitremote
     */
    readonly gitRemote?: string;

    /**
     * Specify a link template to be used when generating source urls.
     *
     * @see https://typedoc.org/documents/Options.Input.html#sourcelinktemplate
     */
    readonly sourceLinkTemplate?: string;

    /**
     * Disables automatically linking to source code.
     *
     * @see https://typedoc.org/documents/Options.Comments.html#disablesources
     */
    readonly disableSources?: boolean;

    /**
     * Disables setting the source of reflections when documenting projects within a Git repository.
     *
     * @see https://typedoc.org/documents/Options.Comments.html#disablegit
     */
    readonly disableGit?: boolean;

    /**
     * Do not print the TypeDoc link at the end of the page.
     *
     * @see https://typedoc.org/documents/Options.Output.html#hidegenerator
     */
    readonly hideGenerator?: boolean;

    /**
     * Hide parameter types in the signature.
     *
     * @see https://typedoc.org/documents/Options.Output.html#hideparametertypesintitle
     */
    readonly hideParameterTypesInTitle?: boolean;

    /**
     * Include the generation time in links to prevent browsers from using a cached version.
     *
     * @see https://typedoc.org/documents/Options.Output.html#cachebust
     */
    readonly cacheBust?: boolean;

    /**
     * If set, the search index will also include comments.
     *
     * @see https://typedoc.org/documents/Options.Output.html#searchincomments
     */
    readonly searchInComments?: boolean;

    /**
     * If set, the search index will also include documents.
     *
     * @see https://typedoc.org/documents/Options.Output.html#searchindocuments
     */
    readonly searchInDocuments?: boolean;

    /**
     * Specify validation options.
     *
     * @see https://typedoc.org/documents/Options.Validation.html
     */
    readonly validation?: ValidationOptions;

    /**
     * Specify the type of reflections that must be documented.
     *
     * @see https://typedoc.org/documents/Options.Validation.html#requiredtobedocumented
     */
    readonly requiredToBeDocumented?: string[];

    /**
     * If set, warnings will be treated as errors.
     *
     * @see https://typedoc.org/documents/Options.Validation.html#treatwarningsaserrors
     */
    readonly treatWarningsAsErrors?: boolean;

    /**
     * If set, validation warnings will be treated as errors.
     *
     * @see https://typedoc.org/documents/Options.Validation.html#treatvalidationwarningsaserrors
     */
    readonly treatValidationWarningsAsErrors?: boolean;

    /**
     * A list of types that should not produce warnings when not being exported.
     *
     * @see https://typedoc.org/documents/Options.Validation.html#intentionallynotexported
     */
    readonly intentionallyNotExported?: string[];

    /**
     * Define patterns for files that should be considered external.
     *
     * @see https://typedoc.org/documents/Options.Input.html#externalpattern
     */
    readonly externalPattern?: string[];

    /**
     * Define custom mappings for symbols in external packages.
     *
     * @see https://typedoc.org/documents/Options.Comments.html#externalsymbollinkmappings
     */
    readonly externalSymbolLinkMappings?: Record<string, Record<string, string>>;
}

/**
 * Converts TypeDocConfiguration to JSON representation
 * @internal
 */
export function toJson_TypeDocConfiguration(
    obj: TypeDocConfiguration | undefined,
): Record<string, unknown> | undefined {
    if (obj === undefined) {
        return undefined;
    }
    const result: Record<string, unknown> = {
        entryPoints: obj.entryPoints,
        entryPointStrategy: obj.entryPointStrategy,
        exclude: obj.exclude,
        excludeExternals: obj.excludeExternals,
        excludePrivate: obj.excludePrivate,
        excludeProtected: obj.excludeProtected,
        excludeInternal: obj.excludeInternal,
        out: obj.out,
        json: obj.json,
        theme: obj.theme,
        basePath: obj.basePath,
        name: obj.name,
        cleanOutputDir: obj.cleanOutputDir,
        includes: obj.includes,
        media: obj.media,
        tsBuildInfo: obj.tsBuildInfo,
        tsconfig: obj.tsconfig,
        logLevel: obj.logLevel,
        sort: obj.sort,
        sortEntryPoints: obj.sortEntryPoints,
        commentStyle: obj.commentStyle,
        defaultVisibility: obj.defaultVisibility,
        defaultCategory: obj.defaultCategory,
        defaultGroup: obj.defaultGroup,
        categorizeByGroup: obj.categorizeByGroup,
        searchGroupBoosts: obj.searchGroupBoosts,
        searchCategoryBoosts: obj.searchCategoryBoosts,
        readme: obj.readme,
        packageJson: obj.packageJson,
        gitRevision: obj.gitRevision,
        gitRemote: obj.gitRemote,
        sourceLinkTemplate: obj.sourceLinkTemplate,
        disableSources: obj.disableSources,
        disableGit: obj.disableGit,
        hideGenerator: obj.hideGenerator,
        hideParameterTypesInTitle: obj.hideParameterTypesInTitle,
        cacheBust: obj.cacheBust,
        searchInComments: obj.searchInComments,
        searchInDocuments: obj.searchInDocuments,
        validation: obj.validation,
        requiredToBeDocumented: obj.requiredToBeDocumented,
        treatWarningsAsErrors: obj.treatWarningsAsErrors,
        treatValidationWarningsAsErrors: obj.treatValidationWarningsAsErrors,
        intentionallyNotExported: obj.intentionallyNotExported,
        externalPattern: obj.externalPattern,
        externalSymbolLinkMappings: obj.externalSymbolLinkMappings,
    };
    const filtered: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(result)) {
        if (value !== undefined) {
            filtered[key] = value;
        }
    }
    return filtered;
}

/**
 * Specifies the strategy to be used to convert entry points into documentation
 *
 * @see https://typedoc.org/documents/Options.Input.html#entrypointstrategy
 */
export enum EntryPointStrategy {
    /**
     * Expects all entry points to be contained within a single package
     */
    RESOLVE = "resolve",
    /**
     * Expects all entry points to be top-level directories
     */
    EXPAND = "expand",
    /**
     * Expects all entry points to be individual files
     */
    PACKAGES = "packages",
    /**
     * Merges multiple projects into a single documentation site
     */
    MERGE = "merge",
}

/**
 * Specifies the logger that should be used
 *
 * @see https://typedoc.org/documents/Options.Other.html#loglevel
 */
export enum LogLevel {
    /**
     * Log all messages including verbose debug information
     */
    VERBOSE = "Verbose",
    /**
     * Log informational messages and above
     */
    INFO = "Info",
    /**
     * Log warnings and errors only
     */
    WARN = "Warn",
    /**
     * Log errors only
     */
    ERROR = "Error",
    /**
     * Disable all logging
     */
    NONE = "None",
}

/**
 * Specifies the documentation mode TypeDoc should use
 *
 * @see https://typedoc.org/documents/Options.Comments.html#commentstyle
 */
export enum CommentStyle {
    /**
     * Parse JSDoc style comments only
     */
    JSDOC = "jsdoc",
    /**
     * Parse block comments
     */
    BLOCK = "block",
    /**
     * Parse line comments (//)
     */
    LINE = "line",
    /**
     * Parse all comment styles
     */
    ALL = "all",
}

/**
 * Specifies the default visibility for members without a visibility tag
 *
 * @see https://typedoc.org/documents/Options.Comments.html#defaultvisibility
 */
export enum Visibility {
    /**
     * Public visibility - accessible from anywhere
     */
    PUBLIC = "public",
    /**
     * Protected visibility - accessible from class and subclasses
     */
    PROTECTED = "protected",
    /**
     * Private visibility - accessible only within the class
     */
    PRIVATE = "private",
}

/**
 * Validation options
 *
 * @see https://typedoc.org/documents/Options.Validation.html
 */
export interface ValidationOptions {
    /**
     * If set, TypeDoc will produce warnings when a symbol is referenced by the documentation
     */
    readonly notExported?: boolean;
    /**
     * If set, TypeDoc will produce warnings when an exported symbol is not documented
     */
    readonly notDocumented?: boolean;
    /**
     * If set, TypeDoc will produce warnings about \@link tags which will produce broken links
     */
    readonly invalidLink?: boolean;
}
