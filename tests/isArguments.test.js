import isArguments from '../src/isArguments.js'


describe("Testing the isArguments function",() => {
    test("Usage from documentation",() => {
        expect(isArguments(function() {return arguments}())).toBe(true);
    });

    test("Number",() => {
        expect(isArguments(5)).toBe(false);
    });

    test("String",() => {
        expect(isArguments("Test string")).toBe(false);
    });

    test("Array",() => {
        expect(isArguments([1,2,3,4])).toBe(false);
    });

    test("Null",() => {
        expect(isArguments(null)).toBe(false);
    });

});