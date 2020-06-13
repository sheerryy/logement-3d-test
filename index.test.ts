import { Point, getClosestPointInsidePolygon } from "./index";

describe('Get closest point', function () {
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

        expect(result).toBe(expected);
    });
});
