import isObjectLike from '../src/isObjectLike.js'

describe("Testing the isObject function",() => {
    test("Array",() => {
        expect(isObjectLike([1,2,3])).toBe(true);
    });
    test("Function",() => {
        expect(isObjectLike(isObjectLike)).toBe(false);
    });
    test("Null",() => {
        expect(isObjectLike(null)).toBe(false);
    });
    test("String",() => {
        expect(isObjectLike('Test string')).toBe(false);
    });
    test("String object",() => {
        expect(isObjectLike(new String('Test string'))).toBe(true);
    });

});