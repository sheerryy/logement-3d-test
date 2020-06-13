export interface Point {
    x: number;
    y: number;
}

/**
 * Function to get distance between two points using Euclidean Distance Formula
 * @param firstPoint: Point
 * @param secondPoint: Point
 * @return euclideanDistance: number
 */
const getEuclideanDistance = (firstPoint: Point, secondPoint: Point): number => {
    const xAxisDistance: number = firstPoint.x - secondPoint.x;
    const yAxisDistance: number = firstPoint.y - secondPoint.y;

    return Math.sqrt(Math.pow(xAxisDistance, 2) + Math.pow(yAxisDistance, 2));
};

/**
 * Function to get the closest point inside the polygon
 * @param poly: Point[]
 * @param pos: Point
 * @return closestPoint: Point
 */
export const getClosestPointInsidePolygon = (poly: Point[], pos: Point): Point => {
    let closestPoint: Point;
    let closestDistance: number;

    poly.forEach((point: Point, index: number) => {
        if (index === 0) {
            closestPoint = point;
            closestDistance = getEuclideanDistance(point, pos);
        } else {
            const euclideanDistance: number = getEuclideanDistance(point, pos);
            if (euclideanDistance < closestDistance) {
                closestPoint = point;
                closestDistance = euclideanDistance;
            }
        }
    });

    return closestPoint;
};
