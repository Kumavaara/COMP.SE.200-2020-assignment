import reduce from '../src/reduce.js'

describe("Testing the reduce function",() => {
    test("Simple reduce",() => {
        expect(reduce([1, 2], (sum, n) => sum + n, 0)).toBe(3);
    });
    test("Empty array",() => {
        expect(reduce({},(sum, n) => sum + n, 0)).toBe(0);
    });
    test("Positive initial value",() => {
        expect(reduce([1, 2], (sum, n) => sum + n, 3)).toBe(6);
    });

    test("Negative initial value",() => {
        expect(reduce([1, 2], (sum, n) => sum + n, -2)).toBe(1);
    });
    
});