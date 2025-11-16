import { describe, expect, it } from "vitest";
import { deepMerge, mergeAll } from "../src/utils";

describe("deepMerge", () => {
    it("merges simple objects", () => {
        const target = { a: 1, b: 2 };
        const source = { b: 3, c: 4 };
        const result = deepMerge(target, source);

        expect(result).toEqual({ a: 1, b: 3, c: 4 });
    });

    it("merges nested objects", () => {
        const target = { a: { b: 1, c: 2 }, d: 3 };
        const source = { a: { c: 4, e: 5 } };
        const result = deepMerge(target, source);

        expect(result).toEqual({ a: { b: 1, c: 4, e: 5 }, d: 3 });
    });

    it("merges deeply nested objects", () => {
        const target = { a: { b: { c: 1, d: 2 } } };
        const source = { a: { b: { d: 3, e: 4 } } };
        const result = deepMerge(target, source);

        expect(result).toEqual({ a: { b: { c: 1, d: 3, e: 4 } } });
    });

    it("does not mutate target object", () => {
        const target = { a: { b: 1 } };
        const source = { a: { c: 2 } };
        deepMerge(target, source);

        expect(target).toEqual({ a: { b: 1 } });
    });

    it("handles arrays by replacing", () => {
        const target = { a: [1, 2, 3] };
        const source = { a: [4, 5] };
        const result = deepMerge(target, source);

        expect(result).toEqual({ a: [4, 5] });
    });

    it("handles undefined values", () => {
        const target = { a: 1, b: 2 };
        const source = { b: undefined };
        const result = deepMerge(target, source);

        expect(result).toEqual({ a: 1, b: 2 });
    });

    it("merges multiple levels of nesting", () => {
        const target = {
            level1: {
                level2: {
                    level3: {
                        a: 1,
                        b: 2,
                    },
                    c: 3,
                },
                d: 4,
            },
        };

        const source = {
            level1: {
                level2: {
                    level3: {
                        b: 5,
                    },
                },
            },
        };

        const result = deepMerge(target, source);

        expect(result).toEqual({
            level1: {
                level2: {
                    level3: {
                        a: 1,
                        b: 5,
                    },
                    c: 3,
                },
                d: 4,
            },
        });
    });

    it("handles undefined target", () => {
        const source = { a: 1, b: 2 };
        const result = deepMerge(undefined, source);

        expect(result).toEqual({ a: 1, b: 2 });
    });

    it("handles undefined source", () => {
        const target = { a: 1, b: 2 };
        const result = deepMerge(target, undefined);

        expect(result).toEqual({ a: 1, b: 2 });
    });

    it("handles both undefined", () => {
        const result = deepMerge(undefined, undefined);

        expect(result).toEqual({});
    });
});

describe("mergeAll", () => {
    it("merges multiple objects", () => {
        const result = mergeAll({ a: 1 }, { b: 2 }, { c: 3 });

        expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });

    it("handles undefined items", () => {
        const result = mergeAll({ a: 1 }, undefined, { b: 2 });

        expect(result).toEqual({ a: 1, b: 2 });
    });

    it("handles all undefined items", () => {
        const result = mergeAll(undefined, undefined, undefined);

        expect(result).toEqual({});
    });
});
