import isObject from '../src/isObject.js'

describe("Testing the isObject function",() => {
    test("Array",() => {
        expect(isObject([1,2,3])).toBe(true);
    });
    test("function",() => {
        expect(isObject(isObject)).toBe(true);
    });
    test("null",() => {
        expect(isObject(null)).toBe(false);
    });
    test("String",() => {
        expect(isObject('Test string')).toBe(false);
    });
    test("String object",() => {
        expect(isObject(new String('Test string'))).toBe(true);
    });

});