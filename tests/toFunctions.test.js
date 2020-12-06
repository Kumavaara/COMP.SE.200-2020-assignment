import toFinite from '../src/toFinite.js'
import toInteger from '../src/toInteger.js'
import toNumber from '../src/toNumber.js'
import toString from '../src/toString.js'

describe("Testing the functions that modify a value",() => {
    test("All to string", () => {
        expect(toString(toNumber(toInteger(toFinite(5.3))))).toBe('5');
        expect(typeof toString(toNumber(toInteger(toFinite(5.3))))).toBe('string');
    });
    test("All to integer", () => {
        expect(toInteger(toNumber(toFinite(toString(5.4))))).toBe(5);
        expect(typeof toInteger(toNumber(toFinite(toString(5.4))))).toBe('number');
    });
    test("All to number", () => {
        expect(toNumber(toInteger(toFinite(toString(5))))).toBe(5);
        expect(typeof toInteger(toFinite(toString(5)))).toBe('number');
    });
    test("Array to string (will turn to 0 because of the other type changes)", () => {
        expect(toString(toNumber(toInteger(toFinite([5, 6, 7]))))).toBe('0');
        expect(typeof toString(toNumber(toInteger(toFinite([5, 6, 7]))))).toBe('string');
    });
    test("Infinity to integer", () => {
        expect(toInteger(toNumber(toFinite(toString(Infinity))))).toBe(1.7976931348623157e+308);
        expect(typeof toInteger(toNumber(toFinite(toString(Infinity))))).toBe('number');
    });
    test("Infinity to string", () => {
        expect(toString(toInteger(toNumber(toFinite(Infinity))))).toBe('1.7976931348623157e+308');
        expect(typeof toString(toInteger(toNumber(toFinite(Infinity))))).toBe('string');
    });
});