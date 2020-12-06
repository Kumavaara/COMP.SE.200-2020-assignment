import eq from '../src/eq.js'

describe("Testing the eq function",() => {

    const obj1 = 'Milk'
    const obj2 = 'Water'


    const arr1 = [1,2,3]
    const arr2 = [1,2,3]
    test("Comparing same objects",() => {
        expect(eq(obj1, obj1)).toBe(true);
    });

    test("Comparing different objects",() => {
        expect(eq(obj1, obj2)).toBe(false);
    });

    test("Comparing same arrays",() => {
        expect(eq(arr1, arr1)).toEqual(true);
    });

    test("Comparing same arrays in different memory adresses",() => {
        expect(eq(arr1, arr2)).toEqual(false);
    });

    test("compairing nulls",() => {
        expect(eq(null, null)).toEqual(true);
    });

    test("compairing string and object",() => {
        expect(eq('Milk', obj1)).toEqual(true);
    });

});