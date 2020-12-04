import capitalize from '../src/capitalize.js'

describe("Testing the capitalize function",() => {
    test("Normal string",() => {
        expect(capitalize("test string")).toBe("Test string");
    });

    test("All caps",() => {
        expect(capitalize("TEST STRING")).toBe("Test string");
    });

    test("Null",() => {
        expect(capitalize(null)).toBe("");
    });
});