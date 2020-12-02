import ceil from '../src/ceil.js'

describe("Testing the ceil function",() => {
    test("Single float round up",() => {
        expect(ceil(1.001)).toBe(2);
    });

    test("Negative number",() => {
        expect(ceil(-1.001)).toBe(-1);
    });
    test("Given rounding accuracy",() => {
        expect(ceil(2.0001, 1)).toBe(2.1);
    });
    test("Negative rounding accuracy",() => {
        expect(ceil(10.0001, -2)).toBe(100);
    });
    

});