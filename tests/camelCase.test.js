import camelCase from '../src/camelCase.js'

describe("Testing the camelCase function",() => {
    test("white spaces",() => {
        expect(camelCase("Test Word")).toEqual("testWord");
    });

    test("special charecters", () => {
        expect(camelCase("Test--Word??")).toEqual("testWord");
    });
});