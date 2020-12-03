import isArrayLikeObject from '../src/isArrayLikeObject.js'

describe("Testing the isArrayLikeObject function",() => {
    test("Normal array",() => {
        expect(isArrayLikeObject([1,2,3,4])).toBe(true);
    });

    test("String",() => {
        expect(isArrayLikeObject('1,2,3,4')).toBe(false);
    });

    test("Null",() => {
        expect(isArrayLikeObject(null)).toBe(false);
    });

    test("Function",() => {
        expect(isArrayLikeObject(isArrayLikeObject)).toBe(false);
    });

    test("Object children",() => {
        expect(isArrayLikeObject(document.body.children)).toBe(true);
    });


});