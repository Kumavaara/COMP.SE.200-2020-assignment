import defaultToAny from '../src/defaultToAny.js'

describe("Testing the defaultToAny function",() => {
    test("Example test",() => {
        expect(defaultToAny(1, 3, 5)).toBe(1);
    });

    test("Example test2",() => {
        expect(defaultToAny(undefined, 3)).toBe(3);
    });

    
    test("null",() => {
        expect(defaultToAny(null, undefined, 3)).toBe(3);
    });

    test("null default",() => {
        expect(defaultToAny(null, null, undefined)).toBe(undefined);
    });

});