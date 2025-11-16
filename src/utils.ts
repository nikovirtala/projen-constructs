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
