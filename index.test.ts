import {
    Point,
    pointWithDistance,
    getEuclideanDistance,
    findClosestPointAndDistance,
    getClosestPointInsidePolygon,
} from "./index";

describe('Get closest point tests', function () {
    it('getEuclideanDistance() validation', function () {
        const result: number = getEuclideanDistance(
            {x: 5, y: 0},
            {x: 100, y: 0},
        );
        const expectedDistance: number = 95;

        expect(result).toStrictEqual(expectedDistance);
    });

    it('findClosestPointAndDistance() validation', function () {
        const result: pointWithDistance = findClosestPointAndDistance(
                {x: 5, y: 5},
                {x: 100, y: 0},
                {x: 100, y: 100},
        );
        const expectedPoint: Point = {x: 100, y: 5};
        const expectedDistance: number = 95;

        expect(result.point).toStrictEqual(expectedPoint);
        expect(result.distance).toStrictEqual(expectedDistance);
    });

    it('findClosestPointAndDistance() corner case', function () {
        const result: pointWithDistance = findClosestPointAndDistance(
            {x: 5, y: 5},
            {x: 0, y: 5},
            {x: 0, y: 5},
        );
        const expectedPoint: Point = {x: 0, y: 5};
        const expectedDistance: number = 5;

        expect(result.point).toStrictEqual(expectedPoint);
        expect(result.distance).toStrictEqual(expectedDistance);
    });


    it('square', function () {
        const result: Point = getClosestPointInsidePolygon(
            [
                {x: 0, y: 0},
                {x: 100, y: 0},
                {x: 100, y: 100},
                {x: 0, y: 100}
            ],
            {x: 150, y: 50}
        );
        const expected: Point = {x: 100, y: 50};

        expect(result).toStrictEqual(expected);
    });

    it('pentagon', function () {
        const result: Point = getClosestPointInsidePolygon(
            [
                {x: 30, y: 0},
                {x: 0, y: 50},
                {x: 45, y: 100},
                {x: 90, y: 50},
                {x: 60, y: 0}
            ],
            {x: 110, y: 50}
        );
        const expected: Point = {x: 90, y: 50};

        expect(result).toStrictEqual(expected);
    });

    it('hexagon', function () {
        const result: Point = getClosestPointInsidePolygon(
            [
                {x: 30, y: 0},
                {x: 0, y: 50},
                {x: 30, y: 100},
                {x: 60, y: 100},
                {x: 90, y: 50},
                {x: 60, y: 0}
            ],
            {x: 45, y: 120}
        );
        const expected: Point = {x: 45, y: 100};

        expect(result).toStrictEqual(expected);
    });

    it('decagon', function () {
        const result: Point = getClosestPointInsidePolygon(
            [
                {x: 30, y: 0},
                {x: 15, y: 25},
                {x: 0, y: 50},
                {x: 15, y: 75},
                {x: 30, y: 100},
                {x: 60, y: 100},
                {x: 75, y: 75},
                {x: 90, y: 50},
                {x: 75, y: 25},
                {x: 60, y: 0}
            ],
            {x: 50, y: 120}
        );
        const expected: Point = {x: 50, y: 100};

        expect(result).toStrictEqual(expected);
    });
});
