import isBoolean from '../src/isBoolean.js'

describe("Testing the isBoolean function",() => {
    test("A boolean",() => {
        expect(isBoolean(false)).toBe(true);
    });

    test("not a boolean",() => {
        expect(isBoolean(null)).toBe(false);
    });

});