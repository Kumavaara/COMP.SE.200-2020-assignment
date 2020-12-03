import isSymbol from '../src/isSymbol.js'

describe("Testing the isSymbol function",() => {

    test("Single letter",() => {
        expect(isSymbol("a")).toBe(false);
    });

    test("Single symbol",() => {
        expect(isSymbol("!")).toBe(false);
    });

    test("Null",() => {
        expect(isSymbol(null)).toBe(false);
    });
        
    test("Symbol iterator",() => {
        expect(isSymbol(Symbol.iterator)).toBe(true);
    });

    test("Array",() => {
        expect(isSymbol(["!","?","&"])).toBe(false);
    });

    test("Primitive symbol",() => {
        expect(isSymbol(Symbol("foo"))).toBe(true);
    });
});