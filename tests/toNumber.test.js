import toNumber from '../src/toNumber.js'

describe("Testing the toNumber function",() => {
    test("Positive values",() => {
        expect(toNumber(3.3)).toBe(3.3);
        expect(typeof toNumber(3.3)).toBe('number');
    });

    test("Minimum value", () => {
        expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
        expect(typeof toNumber(Number.MIN_VALUE)).toBe('number');
    });
    test("Positive infinity", () => {
        expect(toNumber(Infinity)).toBe(Infinity);
        expect(typeof toNumber(Infinity)).toBe('number');
    });

    test("Negative infinity", () => {
        expect(toNumber(-Infinity)).toBe(-Infinity);
        expect(typeof toNumber(-Infinity)).toBe('number');
    });

    test("Number with '' around it", () => {
        expect(toNumber('5.3')).toBe(5.3);
        expect(typeof toNumber('5.3')).toBe('number');
    })

    test("Binary number", () => {
        expect(toNumber(0b1111)).toBe(0b1111);
        expect(typeof toNumber(0b1111)).toBe('number');
    })

});