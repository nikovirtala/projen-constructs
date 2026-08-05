import { type Project, typescript } from "projen";

export const deepMerge = <T>(target: Partial<T> | undefined, source: Partial<T> | undefined): T => {
    const result = structuredClone(target ?? {}) as Record<string, unknown>;
    const src = (source ?? {}) as Record<string, unknown>;
    for (const key in src) {
        if (src[key] && typeof src[key] === "object" && !Array.isArray(src[key])) {
            result[key] = deepMerge(
                (result[key] || {}) as Record<string, unknown>,
                src[key] as Record<string, unknown>,
            );
        } else if (src[key] !== undefined) {
            result[key] = src[key];
        }
    }
    return result as T;
};

export const mergeAll = <T extends object>(...items: (Partial<T> | undefined)[]) =>
    items.reduce((acc, item) => deepMerge(acc, item), {} as T);
/**
 * Resolves the path of the project's development tsconfig.
 *
 * Projen renders the development tsconfig inside the test directory (e.g.
 * `test/tsconfig.json`), so the path must never be hardcoded.
 */
export const tsconfigDevPath = (project: Project): string =>
    project instanceof typescript.TypeScriptProject ? project.tsconfigDev.file.path : "tsconfig.json";
