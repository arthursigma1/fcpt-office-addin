/**
 * Clipboard Utilities
 * Cross-platform clipboard operations (Mac/Windows compatible)
 */
/**
 * Copies text to clipboard using modern Clipboard API
 * Works on both Mac and Windows
 */
export declare function copyToClipboard(text: string): Promise<boolean>;
/**
 * Reads text from clipboard (if permissions allow)
 */
export declare function readFromClipboard(): Promise<string | null>;
/**
 * Checks if clipboard API is available
 */
export declare function isClipboardAvailable(): boolean;
//# sourceMappingURL=clipboard.d.ts.map