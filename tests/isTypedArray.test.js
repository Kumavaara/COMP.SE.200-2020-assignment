import isTypedArray from '../src/isTypedArray.js'

describe("Testing the isTypedArray function",() => {
    test("Typed array created with new",() => {
        expect(isTypedArray(new Int16Array)).toBe(true);
    });

    test("Non typed array",() => {
        expect(isTypedArray(new Array)).toBe(false);
    });

    test("null",() => {
        expect(isTypedArray(null)).toBe(false);
    });

    test("normal array",() => {
        expect(isTypedArray([1,2,3,4])).toBe(false);
    });

});