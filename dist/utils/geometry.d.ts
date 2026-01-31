/**
 * Geometry Utilities
 * Helper functions for shape positioning, sizing, and calculations
 */
export interface Point {
    x: number;
    y: number;
}
export interface Rectangle {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface ShapeBounds extends Rectangle {
    right: number;
    bottom: number;
    centerX: number;
    centerY: number;
}
/**
 * Calculates the bounds of a shape
 */
export declare function getShapeBounds(shape: PowerPoint.Shape): ShapeBounds;
/**
 * Checks if two shapes overlap
 */
export declare function shapesOverlap(shape1: ShapeBounds, shape2: ShapeBounds): boolean;
/**
 * Calculates the distance between two points
 */
export declare function distance(p1: Point, p2: Point): number;
/**
 * Sorts shapes by left position (ascending)
 */
export declare function sortShapesByLeft(shapes: PowerPoint.Shape[]): PowerPoint.Shape[];
/**
 * Sorts shapes by top position (ascending)
 */
export declare function sortShapesByTop(shapes: PowerPoint.Shape[]): PowerPoint.Shape[];
/**
 * Sorts shapes by right position (descending)
 */
export declare function sortShapesByRight(shapes: PowerPoint.Shape[]): PowerPoint.Shape[];
/**
 * Sorts shapes by bottom position (descending)
 */
export declare function sortShapesByBottom(shapes: PowerPoint.Shape[]): PowerPoint.Shape[];
/**
 * Converts points to inches
 */
export declare function pointsToInches(points: number): number;
/**
 * Converts inches to points
 */
export declare function inchesToPoints(inches: number): number;
/**
 * Rounds a number to specified decimal places
 */
export declare function roundTo(value: number, decimals?: number): number;
/**
 * Clamps a value between min and max
 */
export declare function clamp(value: number, min: number, max: number): number;
/**
 * Checks if two numbers are approximately equal (within tolerance)
 */
export declare function approximately(a: number, b: number, tolerance?: number): boolean;
/**
 * Calculates the angle between two points in degrees
 */
export declare function angleBetween(p1: Point, p2: Point): number;
/**
 * Normalizes an angle to 0-360 range
 */
export declare function normalizeAngle(angle: number): number;
/**
 * Calculates the bounding box for multiple shapes
 */
export declare function getGroupBounds(shapes: PowerPoint.Shape[]): Rectangle;
/**
 * Checks if a shape is approximately horizontal (rotation near 0/180)
 */
export declare function isApproximatelyHorizontal(rotation: number, tolerance?: number): boolean;
/**
 * Checks if a shape is approximately vertical (rotation near 90/270)
 */
export declare function isApproximatelyVertical(rotation: number, tolerance?: number): boolean;
//# sourceMappingURL=geometry.d.ts.map