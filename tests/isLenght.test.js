import isLenght from '../src/isLength.js'

describe("Testing the isLenght function",() => {
    test("Positive number",() => {
        expect(isLenght(100)).toBe(true);
    });

    test("Negative integer",() => {
        expect(isLenght(-10)).toBe(false);
    });

    test("Float value",() => {
        expect(isLenght(10.5)).toBe(false);
    });

    
    test("Null",() => {
        expect(isLenght(null)).toBe(false);
    });

    test("String",() => {
        expect(isLenght("100")).toBe(false);
    });

});