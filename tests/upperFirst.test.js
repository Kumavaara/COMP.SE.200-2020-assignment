import upperFirst from '../src/upperFirst.js'

describe("Testing the upperFirst function",() => {
    test("All lowercase",() => {
        expect(upperFirst('stanley')).toBe('Stanley');
    });
    test("All uppercase",() => {
        expect(upperFirst('STANLEY')).toBe('STANLEY');
    });
    test("Mixed casing",() => {
        expect(upperFirst('sTaNlEy')).toBe('STaNlEy');
    });

});