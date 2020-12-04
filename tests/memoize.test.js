import memoize from '../src/memoize.js'

describe("Testing the memoize function",() => {
    const object = {'a' : 1, 'b' : 2}
    const other = {'c': 3, 'd': 4}


    test("Example test",() => {
        const values = memoize(Object.values)
        expect(values(object)).toStrictEqual([1,2]);
    });

    test("Modifying cache",() => {
        const values = memoize(Object.values)
        values.cache.set(other, ['a', 'b'])
        expect(values(other)).toStrictEqual(['a','b']);
    });

    test("Replacing cache",() => {
        const values = memoize(Object.values)
        memoize.Cache = WeakMap
        expect(values(other)).toStrictEqual([3,4]);
    });

});