export interface Point {
    x: number;

    y: number;
}

export interface pointWithDistance {
    point: Point;

    distance: number;
}

/**
 * Function to get distance between two points using Euclidean Distance Formula
 * @param firstPoint: Point
 * @param secondPoint: Point
 * @return euclideanDistance: number
 */
export const getEuclideanDistance = (firstPoint: Point, secondPoint: Point): number => {
    const xAxisDistance: number = firstPoint.x - secondPoint.x;
    const yAxisDistance: number = firstPoint.y - secondPoint.y;

    return Math.sqrt(Math.pow(xAxisDistance, 2) + Math.pow(yAxisDistance, 2));
};

/**
 * Function to get closest point and its distance between a line (pointA, pointB) and given point(point)
 * using Minimum Distance between a Point and a Line by Paul Bourke
 * Reference: http://paulbourke.net/geometry/pointlineplane/
 *
 * @param point: Point
 * @param linePointA: Point
 * @param linePointB: Point
 * @return closestPointAndDistance: pointWithDistance
 */
export const findClosestPointAndDistance = (point: Point, linePointA: Point, linePointB: Point): pointWithDistance => {

    const xToXa: number = point.x - linePointA.x;
    const yToYa: number = point.y - linePointA.y;
    const xbToXa: number = linePointB.x - linePointA.x;
    const ybToYa: number = linePointB.y - linePointA.y;

    const upperSide: number = (xToXa * xbToXa) + (yToYa * ybToYa);
    // distance between point a and point b
    const lowerSide: number = Math.pow(xbToXa, 2) + Math.pow(ybToYa, 2);

    // if pointA and PointB are same
    if (lowerSide === 0) {
        return { point: linePointA, distance: getEuclideanDistance(point, linePointA)}
    }

    const u: number = upperSide / lowerSide;

    let closestPoint: Point = {x: 0, y: 0};

    if (u < 0) {
        closestPoint.x = linePointA.x;
        closestPoint.y = linePointA.y;
    } else if (u > 1) {
        closestPoint.x = linePointB.x;
        closestPoint.y = linePointB.y;
    } else {
        closestPoint.x = linePointA.x + (u * xbToXa);
        closestPoint.y = linePointA.y + (u * ybToYa);
    }

    const distance = getEuclideanDistance(point, closestPoint);

    return {
        point: closestPoint,
        distance,
    };
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

    if (poly.length === 0) {
        return null;
    }
    if (poly.length === 1) {
        return poly[0];
    }

    for (let i = 0; i < poly.length; i++) {
        const pointA: number = i;
        const pointB: number = (i !== (poly.length - 1)) ? (i + 1) : 0;

        const {point, distance} = findClosestPointAndDistance(pos, poly[pointA], poly[pointB]);

        if (i === 0) {
            closestPoint = point;
            closestDistance = distance;
        } else {
            if (distance < closestDistance) {
                closestPoint = point;
                closestDistance = distance;
            }
        }
    }

    return closestPoint;
};
