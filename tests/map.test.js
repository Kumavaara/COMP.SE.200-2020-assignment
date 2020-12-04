import map from '../src/map.js'

describe("Testing the map function",() => {
    function square(n) {return n*n}
    test("Example",() => {
        expect(map([4,8], square)).toStrictEqual([16,64]);

    });

    test("Null",() => {
        expect(map(null, square)).toStrictEqual([]);

    });

});