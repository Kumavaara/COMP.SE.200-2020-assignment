import isEmpty from '../src/isEmpty.js'

describe("Testing the isEmpty function",() => {
    test("Testing a string",() => {
        expect(isEmpty('Testing the function string')).toBe(false);
    });

    test("Testing an array",() => {
        expect(isEmpty([1,2,3])).toBe(false);
    });

    test("Testing an empty array",() => {
        expect(isEmpty([])).toBe(true);
    });

    test("Testing null",() => {
        expect(isEmpty(null)).toBe(true);
    });

    test("Testing an array of nulls",() => {
        expect(isEmpty([null])).toBe(false);
    });

});