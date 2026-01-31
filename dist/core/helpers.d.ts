/**
 * FCPT Core Helpers
 * Port of ModHelpers.bas - core utility functions for shape manipulation
 */
/**
 * Gets currently selected shapes with validation
 * Returns null if validation fails
 */
export declare function getValidatedSelectedShapes(minRequired?: number): Promise<PowerPoint.Shape[] | null>;
/**
 * Checks if the current selection is valid
 */
export declare function hasValidSelection(minRequired?: number): Promise<boolean>;
/**
 * Gets the count of currently selected shapes
 */
export declare function getSelectedShapeCount(): Promise<number>;
/**
 * Sorts selected shapes by their left position (VBA: SortShapesByLeft)
 */
export declare function sortSelectedShapesByLeft(): Promise<PowerPoint.Shape[] | null>;
/**
 * Sorts selected shapes by their top position (VBA: SortShapesByTop)
 */
export declare function sortSelectedShapesByTop(): Promise<PowerPoint.Shape[] | null>;
/**
 * Sorts selected shapes by their right edge
 */
export declare function sortSelectedShapesByRight(): Promise<PowerPoint.Shape[] | null>;
/**
 * Sorts selected shapes by their bottom edge
 */
export declare function sortSelectedShapesByBottom(): Promise<PowerPoint.Shape[] | null>;
/**
 * Gets the reference shape (typically the last selected)
 * In Office.js, we use the last item in the array
 */
export declare function getReferenceShape(shapes: PowerPoint.Shape[]): PowerPoint.Shape | null;
/**
 * Checks if a shape has text
 */
export declare function shapeHasText(shape: PowerPoint.Shape): Promise<boolean>;
/**
 * Gets text from a shape
 */
export declare function getShapeText(shape: PowerPoint.Shape): Promise<string>;
/**
 * Sets text in a shape
 */
export declare function setShapeText(shape: PowerPoint.Shape, text: string): Promise<void>;
/**
 * Checks if a shape is a line or connector
 */
export declare function isLineOrConnector(shape: PowerPoint.Shape): boolean;
/**
 * Checks if a shape is a text box
 */
export declare function isTextBox(shape: PowerPoint.Shape): boolean;
/**
 * Calculates the horizontal gap between two shapes
 */
export declare function getHorizontalGap(shape1: PowerPoint.Shape, shape2: PowerPoint.Shape): number;
/**
 * Calculates the vertical gap between two shapes
 */
export declare function getVerticalGap(shape1: PowerPoint.Shape, shape2: PowerPoint.Shape): number;
/**
 * Loads common properties for shapes
 * VBA equivalent: Pre-loading properties before operations
 */
export declare function loadCommonProperties(shapes: PowerPoint.Shape[]): Promise<void>;
/**
 * Loads text properties for shapes
 */
export declare function loadTextProperties(shapes: PowerPoint.Shape[]): Promise<void>;
/**
 * Loads formatting properties for shapes
 */
export declare function loadFormatProperties(shapes: PowerPoint.Shape[]): Promise<void>;
/**
 * Disables screen updating (VBA equivalent)
 * In Office.js, this is handled by batching operations
 * This is a no-op but kept for API compatibility
 */
export declare function disableUpdates(): void;
/**
 * Enables screen updating (VBA equivalent)
 * This is a no-op but kept for API compatibility
 */
export declare function enableUpdates(): void;
//# sourceMappingURL=helpers.d.ts.map