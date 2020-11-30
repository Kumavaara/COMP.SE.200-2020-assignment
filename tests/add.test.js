import add from '../src/add.js'

describe("Testing the add function",() => {
    test("Positive numbers",() => {
        expect(add(2, 3)).toBe(5);
    });

    test("Negative numbers", () => {
        expect(add(-15,-12)).toBe(-27);
    });

    test("Decimal numbers", () => {
        expect(add(5.55,6.666)).toBeCloseTo(12.216,3);
    });

});