import get from '../src/get.js'

describe("Testing the get function",() => {
    const object = {'a': [{'b':{'c':3}}]}
    test("Example test",() => {
        expect(get(object, 'a[0].b.c')).toBe(3);
    });

    test("Example test2",() => {
        expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
    });

    test("Example test3",() => {
        expect(get(object, 'a.b.c', 20)).toBe(20);
    });

    test("Null",() => {
        expect(get(object, null, 20)).toBe(20);
    });

    test("Null default value",() => {
        expect(get(object, 'a.b.c', null)).toBe(null);
    });

    test("Null object",() => {
        expect(get(null, 'a[0].b.c')).toBe(undefined);
    });


});