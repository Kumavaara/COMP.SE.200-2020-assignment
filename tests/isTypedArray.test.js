import isTypedArray from '../src/isTypedArray.js'

describe("Testing the isTypedArray function",() => {
    test("Typed array created with new",() => {
        expect(isTypedArray(new Int16Array([1,2,3]))).toBe(true);
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

    test("empty array",() => {
        expect(isTypedArray([])).toBe(false);
    });

    test("String",() => {
        let string = String('[1,2,3]')
        expect(isTypedArray(string)).toBe(false);
    });

});