import divide from '../src/divide.js'
import add from '../src/add.js'
import ceil from '../src/ceil.js'
import clamp from '../src/clamp.js'

describe("Testing math related functions",() => {
    test("Test math problems in combination",() => {
        expect(clamp(ceil(add(-4.0001, divide(10, 5))), -2, 2)).toBe(-2);
    });

});