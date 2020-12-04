import toFinite from '../src/toFinite.js'

describe("Testing the toFinite function",() => {
    test("Positive values",() => {
        expect(toFinite(3.3)).toBe(3.3);
        expect(typeof toFinite(3.3)).toBe('number');
    });

    test("Minimum value", () => {
        expect(toFinite(Number.MIN_VALUE)).toBe(5e-324);
        expect(typeof toFinite(Number.MIN_VALUE)).toBe('number');
    });
    test("Positive infinity", () => {
        expect(toFinite(Infinity)).toBe(1.7976931348623157e+308);
        expect(typeof toFinite(Infinity)).toBe('number');
    });

    test("Negative infinity", () => {
        expect(toFinite(-Infinity)).toBe(-1.7976931348623157e+308);
        expect(typeof toFinite(-Infinity)).toBe('number');
    });

    test("Number with '' around it", () => {
        expect(toFinite('5.3')).toBe(5.3);
        expect(typeof toFinite('5.3')).toBe('number');
    })

});