import defaultTo from '../src/defaultTo.js'

describe("Testing the defaultTo function",() => {
    test("Example test",() => {
        expect(defaultTo(1, 3)).toBe(1);
    });

    test("Example test2",() => {
        expect(defaultTo(undefined, 3)).toBe(3);
    });

    
    test("null",() => {
        expect(defaultTo(null, 3)).toBe(3);
    });

    test("null default",() => {
        expect(defaultTo(null, null)).toBe(null);
    });

});