/**
 * Error thrown when attempting to decrease indent level below zero in CodeBuffer
 */
export class InvalidIndentLevelError extends Error {
    constructor() {
        super("Cannot decrease indent level below zero");
        this.name = "InvalidIndentLevelError";
    }
}

/**
 * Error thrown when base class format is invalid
 */
export class InvalidBaseClassFormatError extends Error {
    constructor(public readonly baseClass: string) {
        super(`Base class must be in format "module.ClassName", got: ${baseClass}`);
        this.name = "InvalidBaseClassFormatError";
    }
}

/**
 * Error thrown when file path is invalid or missing directory separator
 */
export class InvalidFilePathError extends Error {
    constructor(public readonly filePath: string) {
        super(`File path must contain directory separator, got: ${filePath}`);
        this.name = "InvalidFilePathError";
    }
}
