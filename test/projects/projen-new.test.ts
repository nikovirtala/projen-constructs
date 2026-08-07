import { discover } from "projen/lib/inventory";
import { describe, expect, it } from "vitest";

/**
 * How `projen new --from @nikovirtala/projen-constructs <type>` sees the project types
 * of this package.
 *
 * `discover` reads the `.jsii` manifest at the repository root, which the compile step
 * regenerates from `src/projects/*.generated.ts`, so these expectations cover the
 * manifest a consumer of the published package actually gets.
 */
const projectTypes = discover(process.cwd()).filter((type) => type.moduleName === "@nikovirtala/projen-constructs");

describe("projen new", () => {
    it("discovers every project type", () => {
        expect(projectTypes.map((type) => type.pjid).sort()).toEqual([
            "aws_cdk_construct_library",
            "aws_cdk_type_script_app",
            "jsii",
            "type_script",
        ]);
    });

    describe.each(projectTypes.map((type) => [type.pjid, type] as const))("%s", (_pjid, projectType) => {
        /**
         * An option with an initial value is rendered as an explicit argument in the
         * generated `.projenrc.ts`, where it takes precedence over the defaults these
         * project types apply. Projen annotates `packageManager` with the
         * `$PACKAGE_MANAGER` macro, which resolves to the package manager running the
         * command, so `npx projen new` would pin a new project to npm.
         */
        it("leaves packageManager out of the generated .projenrc.ts", () => {
            const packageManager = projectType.options.find((option) => option.name === "packageManager");

            expect(packageManager).toBeDefined();
            expect(packageManager?.initialValue).toBeUndefined();
            expect(packageManager?.optional).toBe(true);
        });
    });
});
