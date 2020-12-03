import slice from '../src/slice'

describe("Testiing the slice function",() => {
    test("Only start given for the array",() => {
        expect(slice([1, 2, 3, 4, 5], 1)).toStrictEqual([2,3,4,5]);
    });

    test("Start and end given", ()=>{
        expect(slice([1, 2, 3, 7, 5], 1, 4)).toStrictEqual([2,3,7]);
    });
    test("Negative start", ()=>{
        expect(slice([1, 2, 3, 7, 5], -3, 4)).toStrictEqual([3,7]);
    });
    test("Negative end", ()=>{
        expect(slice([1, 2, 3, 7, 5], 1, -1)).toStrictEqual([2,3,7]);
    });
    test("Both negative", ()=>{
        expect(slice([1, 2, 3, 7, 5], -3, -1)).toStrictEqual([3,7]);
    });
});