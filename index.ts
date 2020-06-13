interface Point {
    x: number;
    y: number;
}

// This function should return the closest point to "pos" that is inside the polygon defined by "poly"
function getClosestPointInsidePolygon(poly: Point[], pos: Point): Point {
    return null
}

console.log(getClosestPointInsidePolygon(
    [{x: 0, y: 0}, {x: 100, y: 0}, {x: 100, y: 100}, {x: 0, y: 100}], {x: 150, y: 50}
));

// return {x: 100, y: 50}