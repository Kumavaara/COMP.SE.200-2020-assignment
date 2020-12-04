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

});