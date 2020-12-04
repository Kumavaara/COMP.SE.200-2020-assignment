import at from '../src/at.js'

describe("Testing the at function",() => {

    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
    test("Example test",() => {
        expect(at(object, ['a[0].b.c', 'a[1]'])).toStrictEqual([3, 4]);
    });

    test("Incorrect paths",() => {
        expect(at(object, ['a[1].b.c', 'a[1]'])).toStrictEqual([undefined, 4]);
    });

    test("Null object",() => {
        expect(at(null, ['a[1].b.c', 'a[1]'])).toStrictEqual([undefined, undefined]);
    });

});