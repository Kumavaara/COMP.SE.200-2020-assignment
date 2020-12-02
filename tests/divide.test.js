import divide from '../src/divide.js'

describe("Testing the division function",() => {
    test("Positive numbers",() => {
        expect(divide(6, 2)).toBe(3);
    });

    test("Negative number", () => {
        expect(divide(-15,3)).toBe(-5);
    });

    test("Decimal numbers", () => {
        expect(divide(10.5,2)).toBe(5.25);
    });

    test("Decimal return", () => {
        expect(divide(5,2)).toBe(2.5);
    });

});