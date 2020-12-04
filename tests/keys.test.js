import keys from '../src/keys.js'

describe("Testing the add function",() => {
    test("Example test",() => {

        function Foo() {
            this.a = 1
            this.b = 2
        }
        Foo.prototype.c = 3
        expect(keys(new Foo)).toStrictEqual(['a', 'b']);
    });

    test("Test a string",() => {
        expect(keys("Test")).toStrictEqual(["0",'1','2','3']);
    });

    test("null",() => {
        expect(keys(null)).toStrictEqual([]);
    });


});