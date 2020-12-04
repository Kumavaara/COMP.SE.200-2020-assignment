import castArray from '../src/castArray.js'

describe("Testing the castArray function",() => {
    test("Number",() => {
        expect(castArray(1)).toEqual([1]);
    });

    test("Map", () => {
        expect(castArray({ 'a': 1 })).toEqual([{ 'a': 1 }]);
    });
    test("Null", () => {
        expect(castArray(null)).toEqual([null]);
    });
    test("Empty", () => {
        expect(castArray()).toEqual([]);
    });
    test("Array", () => {
        expect(castArray([1,2,3])).toEqual([1,2,3]);
    });
});