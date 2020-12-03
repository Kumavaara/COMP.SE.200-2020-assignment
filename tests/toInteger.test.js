import toInteger from '../src/toInteger'

describe("Testing the toInteger function",() => {
    test("Positive values",() => {
        expect(toInteger(3.3)).toBe(3);
        expect(typeof toInteger(3.3)).toBe('number');
    });

    test("Minimum value", () => {
        expect(toInteger(Number.MIN_VALUE)).toBe(0);
        expect(typeof toInteger(Number.MIN_VALUE)).toBe('number');
    });
    test("Positive infinity", () => {
        expect(toInteger(Infinity)).toBe(1.7976931348623157e+308);
        expect(typeof toInteger(Infinity)).toBe('number');
    });

    test("Negative infinity", () => {
        expect(toInteger(-Infinity)).toBe(-1.7976931348623157e+308);
        expect(typeof toInteger(-Infinity)).toBe('number');
    });

    test("Number with '' around it", () => {
        expect(toInteger('5.3')).toBe(5);
        expect(typeof toInteger('5.3')).toBe('number');
    })

});