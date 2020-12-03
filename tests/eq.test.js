import eq from '../src/eq.js'

describe("Testing the eq function",() => {

    const obj1 = 'Milk'
    const obj2 = 'Milk'
    const obj3 = 'Water'

    const arr1 = [1,2,3]
    const arr2 = [1,2,3]
    test("Comparing same objects",() => {
        expect(eq(obj1, obj2)).toBe(true);
    });

    test("Comparing different objects",() => {
        expect(eq(obj1, obj3)).toBe(false);
    });

    test("Comparing same arrays",() => {
        expect(eq(arr1, arr1)).toEqual(true);
    });

    test("Comparing same arrays in different memory adresses",() => {
        expect(eq(arr1, arr2)).toEqual(false);
    });



});