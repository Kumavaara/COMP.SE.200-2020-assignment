import clamp from '../src/clamp.js'

describe("Testing the clamp function",() => {
    test("Higher value than upper bound",() => {
        expect(clamp(5, -1, 1)).toBe(1);
    });

    test("Lower value than lower bound",() => {
        expect(clamp(-5, -1, 1)).toBe(-1);
    });

    test("value in between the bounds",() => {
        expect(clamp(0, -1, 1)).toBe(0);
    });

    test("value in between bigger bounds",() => {
        expect(clamp(10, -100, 100)).toBe(10);
    });

    test("Zero bounds",() => {
        expect(clamp(10, 0, 0)).toBe(0);
    });

    test("Invalid boundaries",() => {
        expect(clamp(10, 'test', 'test')).toBe(0);
    });

    test("Invalid value",() => {
        expect(clamp('test', -1, 1)).toBe(NaN);
    });

    test("Clamps in wrong order",() => {
        expect(clamp(10, 1, -1)).toBe(1);
    });

});