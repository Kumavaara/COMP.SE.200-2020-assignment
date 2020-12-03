import every from '../src/every.js'
import isBoolean from '../src/isBoolean.js'
import isArrayLike from '../src/isArrayLike.js'


describe("Testing the every function",() => {

    var arr = [false, true, false]
    test("Test array of booleans",() => {
        expect(every(arr, isBoolean)).toBe(true);
    });

    var badBooleans = [false, true, false, 1, 0, null, 'no']
    test("Array with bad values",() => {
        expect(every(badBooleans, isBoolean)).toBe(false);
    });

    const multipleArrays = [['bmw', 'audi', 'toyota'], [1,2,3]]
    test("Test isArrayLike function with every function",() => {
        expect(every(multipleArrays, isArrayLike)).toBe(true);
    });
    const badArrays = [['bmw', 'audi', 'toyota'], [1,2,3], isBoolean]
    test("Test isArrayLike function bad inputs",() => {
        expect(every(badArrays, isArrayLike)).toBe(false);
    });


});