import compact from '../src/compact.js'

describe("Testing the compact function",() => {
    test("The documented example use",() => {
        expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
    });

});