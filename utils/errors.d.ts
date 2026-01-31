/**
 * FCPT Error Handling Framework
 * Provides centralized error handling for Office.js operations
 */
export declare class FCPTError extends Error {
    functionName: string;
    originalError: Error;
    context?: Record<string, unknown>;
    constructor(functionName: string, originalError: Error, context?: Record<string, unknown>);
}
/**
 * Handles Office.js errors and shows user-friendly dialogs
 */
export declare function handleOfficeError(functionName: string, error: Error): Promise<void>;
/**
 * Wrapper for async Office.js operations with error handling
 */
export declare function runWithErrorHandling<T>(functionName: string, operation: () => Promise<T>): Promise<T | null>;
/**
 * Validates that shapes are selected
 */
export declare function validateSelection(count: number, minRequired?: number): boolean;
/**
 * Shows success message to user
 */
export declare function showSuccess(message: string): void;
/**
 * Shows info message to user
 */
export declare function showInfo(message: string): void;
/**
 * Confirms action with user
 */
export declare function confirmAction(message: string): boolean;
//# sourceMappingURL=errors.d.ts.map