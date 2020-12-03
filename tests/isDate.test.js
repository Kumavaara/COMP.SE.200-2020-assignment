import isDate from '../src/isDate.js'

describe("Testing the isDate function",() => {
    test("A real date object",() => {
        expect(isDate(new Date)).toBe(true);
    });

    test("Not a date object", () => {
        expect(isDate('1.1.2020')).toBe(false);
    });
    
    test("A null object", () => {
        expect(isDate(null)).toBe(false);
    });

});