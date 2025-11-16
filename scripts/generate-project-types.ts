import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import type { Assembly, ClassType } from "@jsii/spec";

const BASE_CLASS = "projen.Project";

function loadProjenManifest(): Assembly {
    const projenPackageJson = require.resolve("projen/package.json");
    const projenRoot = dirname(projenPackageJson);
    const jsiiPath = join(projenRoot, ".jsii");
    return JSON.parse(readFileSync(jsiiPath, "utf-8"));
}

function extendsBase(classType: ClassType, manifest: Assembly): boolean {
    if (classType.inheritancePath) {
        return classType.inheritancePath.includes(BASE_CLASS);
    }

    let currentBase = classType.base;
    while (currentBase) {
        if (currentBase === BASE_CLASS) {
            return true;
        }
        const baseType = manifest.types?.[currentBase];
        if (!baseType || baseType.kind !== "class") {
            break;
        }
        currentBase = (baseType as ClassType).base;
    }

    return false;
}

function toEnumName(className: string): string {
    return className
        .replace(/([A-Z])/g, "_$1")
        .toUpperCase()
        .replace(/^_/, "");
}

function discoverProjectTypes(manifest: Assembly): Array<[string, string, string]> {
    const projectTypes: Array<[string, string, string]> = [];

    for (const [fqn, type] of Object.entries(manifest.types ?? {})) {
        if (type.kind !== "class") {
            continue;
        }

        const classType = type as ClassType;

        if (classType.abstract) {
            continue;
        }

        if (!extendsBase(classType, manifest)) {
            continue;
        }

        const parts = fqn.split(".");
        if (parts.length < 3 || parts[0] !== "projen") {
            continue;
        }

        const module = parts[1];
        const className = parts.slice(2).join(".");
        const enumName = toEnumName(className);
        const value = `${module}.${className}`;
        const docs = classType.docs?.summary ?? className;

        projectTypes.push([enumName, value, docs]);
    }

    return projectTypes.sort((a, b) => a[0].localeCompare(b[0]));
}

function generateEnum(): string {
    const manifest = loadProjenManifest();
    const projectTypes = discoverProjectTypes(manifest);

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
    return lines.join("\n");
}

console.log(generateEnum());
