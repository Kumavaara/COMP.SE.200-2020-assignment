import isEmpty from '../src/isEmpty.js'

describe("Testing the isEmpty function",() => {
    test("Testing a string",() => {
        expect(isEmpty('Testing the function string')).toBe(false);
    });

    test("Testing an array",() => {
        expect(isEmpty([1,2,3])).toBe(false);
    });

    test("Testing an empty array",() => {
        expect(isEmpty([])).toBe(true);
    });

    test("Testing null",() => {
        expect(isEmpty(null)).toBe(true);
    });

    test("Testing an array of nulls",() => {
        expect(isEmpty([null])).toBe(false);
    });

    
    test("Testing an empty set",() => {
        let testSet = new Set()
        expect(isEmpty(testSet)).toBe(true);
    });

    test("Testing an set",() => {
        let testSet = new Set()
        testSet.add(1)
        expect(isEmpty(testSet)).toBe(false);
    });

    
    test("Testing an prototype",() => {

        function Prototype(){
            this.prototype = ''
        }

        var testPrototype = new Prototype()
        testPrototype.prototype = 'Test'
        expect(isEmpty(testPrototype)).toBe(false);
    });

});