import toString from '../src/toString'

describe("Testing the toInteger function",() => {
    test("Nothing given", () => {
        expect(toString(null)).toBe('');
        expect(typeof toString(null)).toBe('string');
    });

    test("Negative number", () => {
        expect(toString(-1)).toBe('-1');
        expect(typeof toString(-1)).toBe('string');
    });
    test("Array", () => {
        expect(toString([11, 22, 33])).toBe('11,22,33');
        expect(typeof toString([11, 22, 33])).toBe('string');
    });

    test("Negative infinity", () => {
        expect(toString(-Infinity)).toBe('-Infinity');
        expect(typeof toString(-Infinity)).toBe('string');
    });

});