import toString from '../src/toString.js'

describe("Testing the toString function",() => {
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

    test("Symbol", () => {
        let testSymbol = Symbol("test")
        expect(toString(testSymbol)).toBe("Symbol(test)");
        expect(typeof toString("Symbol(test)")).toBe('string');
    });

    test("String", () => {
        expect(toString("Test string")).toBe("Test string");
        expect(typeof toString("Test string")).toBe('string');
    });


});