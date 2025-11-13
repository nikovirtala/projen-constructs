export interface TypeDocConfiguration {
    readonly entryPoints?: string[];
    readonly entryPointStrategy?: EntryPointStrategy;
    readonly exclude?: string[];
    readonly excludeExternals?: boolean;
    readonly excludePrivate?: boolean;
    readonly excludeProtected?: boolean;
    readonly excludeInternal?: boolean;
    readonly out?: string;
    readonly json?: string;
    readonly theme?: string;
    readonly basePath?: string;
    readonly name?: string;
    readonly cleanOutputDir?: boolean;
    readonly includes?: string;
    readonly media?: string;
    readonly tsBuildInfo?: string;
    readonly tsconfig?: string;
    readonly logLevel?: LogLevel;
    readonly sort?: string[];
    readonly sortEntryPoints?: boolean;
    readonly commentStyle?: CommentStyle;
    readonly defaultVisibility?: Visibility;
    readonly defaultCategory?: string;
    readonly defaultGroup?: string;
    readonly categorizeByGroup?: boolean;
    readonly searchGroupBoosts?: Record<string, number>;
    readonly searchCategoryBoosts?: Record<string, number>;
    readonly readme?: string;
    readonly packageJson?: string;
    readonly gitRevision?: string;
    readonly gitRemote?: string;
    readonly sourceLinkTemplate?: string;
    readonly disableSources?: boolean;
    readonly disableGit?: boolean;
    readonly hideGenerator?: boolean;
    readonly hideParameterTypesInTitle?: boolean;
    readonly cacheBust?: boolean;
    readonly searchInComments?: boolean;
    readonly searchInDocuments?: boolean;
    readonly validation?: ValidationOptions;
    readonly requiredToBeDocumented?: string[];
    readonly treatWarningsAsErrors?: boolean;
    readonly treatValidationWarningsAsErrors?: boolean;
    readonly intentionallyNotExported?: string[];
    readonly externalPattern?: string[];
    readonly externalSymbolLinkMappings?: Record<string, Record<string, string>>;
}

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

export enum EntryPointStrategy {
    RESOLVE = "resolve",
    EXPAND = "expand",
    PACKAGES = "packages",
    MERGE = "merge",
}

export enum LogLevel {
    VERBOSE = "Verbose",
    INFO = "Info",
    WARN = "Warn",
    ERROR = "Error",
    NONE = "None",
}

export enum CommentStyle {
    JSDOC = "jsdoc",
    BLOCK = "block",
    LINE = "line",
    ALL = "all",
}

export enum Visibility {
    PUBLIC = "public",
    PROTECTED = "protected",
    PRIVATE = "private",
}

export interface ValidationOptions {
    readonly notExported?: boolean;
    readonly notDocumented?: boolean;
    readonly invalidLink?: boolean;
}
