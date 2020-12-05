import drop from '../src/drop.js'

describe("Testing the drop function",() => {
    test("No amount",() => {
        expect(drop([1, 2, 3])).toStrictEqual([2, 3]);
    });
    test("Test amount",() => {
        expect(drop([1, 2, 3], 2)).toStrictEqual([3]);
    });
    test("Amount overbounds",() => {
        expect(drop([1, 2, 3], 4)).toStrictEqual([]);
    });
    test("Amount 0",() => {
        expect(drop([1, 2, 3], 0)).toStrictEqual([1, 2, 3]);
    });
    test("Empty array",() => {
        expect(drop([])).toStrictEqual([]);
    });
    test("Negative amount",() => {
        expect(drop([1, 2, 3],-1)).toStrictEqual([1, 2, 3]);
    });
    test("Undefined amount",() => {
        expect(drop([1, 2, 3],undefined)).toStrictEqual([2, 3]);
    });

    test("Null",() => {
        expect(drop(null,1)).toStrictEqual([]);
    });
    
});