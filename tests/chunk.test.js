import chunk from '../src/chunk.js'

describe("Testing the chunk function",() => {
    test("Split in half",() => {
        expect(chunk(['a', 'b', 'c', 'd'], 2)).toStrictEqual([['a', 'b'], ['c', 'd']]);
    });
    test("Split in groups of 3",() => {
        expect(chunk(['a', 'b', 'c', 'd'], 3)).toStrictEqual([['a', 'b', 'c'], ['d']]);
    });
    test("Split in groups of 1",() => {
        expect(chunk(['a', 'b', 'c', 'd'])).toStrictEqual([['a'], ['b'], ['c'], ['d']]);
    });
    test("Null array",() => {
        expect(chunk(null)).toStrictEqual([]);
    });


});