import isBuffer from '../src/isBuffer.js'

describe("Testing the isBuffer",() => {
    test("Test a buffer",() => {
        expect(isBuffer(new Buffer(5))).toBe(true);
    });

    test("Not a buffer", () => {
        expect(isBuffer(new Array(5))).toBe(false);
    });

    test("Buffer of null", () => {
        expect(isBuffer(Buffer.alloc(10))).toBe(true);
    });

});