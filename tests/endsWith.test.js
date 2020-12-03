import endsWith from '../src/endsWith.js'

describe("Testing the endsWith function",() => {
    const testString = "Testing the function"
    test("test with a normal string",() => {
        expect(endsWith(testString, "function")).toBe(true);
    });
    test("test letter at index",() => {
        expect(endsWith(testString, "h", 10)).toBe(true);
    });

    test("test letter at wrong index to be false",() => {
        expect(endsWith(testString, "t", 10)).toBe(false);
    });

});