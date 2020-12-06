import difference from '../src/difference.js'

describe("Testing the difference function",() => {
    test("Both same length",() => {
        expect(difference([2, 1], [2, 3])).toStrictEqual([1]);
    });
    test("Second one is bigger array",() => {
        expect(difference([2, 1], [2, 3, 4])).toStrictEqual([1]);
    });
    test("First one is bigger array",() => {
        expect(difference([2, 1, 4], [2, 3])).toStrictEqual([1,4]);
    });
    test("First one is empty",() => {
        expect(difference([], [2, 3, 4])).toStrictEqual([]);
    });
    test("Second one is empty",() => {
        expect(difference([2, 1], [])).toStrictEqual([2, 1]);
    });
    test("Same array",() => {
        expect(difference([2, 1], [2,1])).toStrictEqual([]);
    });

    test("second one null",() => {
        expect(difference([2, 1], null)).toStrictEqual([2,1]);
    });

    test("both are null",() => {
        expect(difference(null, null)).toStrictEqual([]);
    });

    test("Only one array",() => {
        expect(difference([2,1])).toStrictEqual([2,1]);
    });

    test("Only one null",() => {
        expect(difference(null)).toStrictEqual([]);
    });
    

});