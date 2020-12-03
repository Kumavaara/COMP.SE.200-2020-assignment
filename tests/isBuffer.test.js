import isBuffer from '../src/isBuffer.js'

describe("Testing the isBuffer",() => {
    test("Test a buffer",() => {
        expect(isBuffer(new Buffer(5))).toBe(true);
    });

    test("not a buffer", () => {
        expect(isBuffer(new Array(5))).toBe(false);
    });

});