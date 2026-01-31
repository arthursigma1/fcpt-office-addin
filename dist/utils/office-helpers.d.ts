/**
 * Office.js Helper Functions
 * Provides wrappers and utilities for common Office.js operations
 */
/**
 * Gets the currently selected shapes
 */
export declare function getSelectedShapes(): Promise<PowerPoint.Shape[] | null>;
/**
 * Gets the current slide
 */
export declare function getCurrentSlide(): Promise<PowerPoint.Slide | null>;
/**
 * Gets all slides in the presentation
 */
export declare function getAllSlides(): Promise<PowerPoint.Slide[] | null>;
/**
 * Loads specific properties for a shape
 */
export declare function loadShapeProperties(shape: PowerPoint.Shape, properties: string[]): Promise<void>;
/**
 * Loads specific properties for multiple shapes
 */
export declare function loadShapesProperties(shapes: PowerPoint.Shape[], properties: string[]): Promise<void>;
/**
 * Performs an operation on selected shapes with error handling
 */
export declare function operateOnSelectedShapes<T>(operationName: string, operation: (shapes: PowerPoint.Shape[], context: PowerPoint.RequestContext) => Promise<T>): Promise<T | null>;
/**
 * Performs an operation on all shapes on the current slide
 */
export declare function operateOnAllShapes<T>(operationName: string, operation: (shapes: PowerPoint.Shape[], context: PowerPoint.RequestContext) => Promise<T>): Promise<T | null>;
/**
 * Gets the current presentation
 */
export declare function getPresentation(): Promise<PowerPoint.Presentation | null>;
/**
 * Converts RGB values to hex color string for Office.js
 */
export declare function rgbToHex(r: number, g: number, b: number): string;
/**
 * Converts hex color string to RGB values
 */
export declare function hexToRgb(hex: string): {
    r: number;
    g: number;
    b: number;
} | null;
/**
 * Checks if Office.js is ready
 */
export declare function isOfficeReady(): boolean;
/**
 * Waits for Office.js to be ready
 */
export declare function ensureOfficeReady(): Promise<void>;
//# sourceMappingURL=office-helpers.d.ts.map