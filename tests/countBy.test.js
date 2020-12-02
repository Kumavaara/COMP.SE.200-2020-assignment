import countBy from '../src/countBy.js'

describe("Testing the countBy function",() => {
    test("Only true values",() => {

        const products = [
            {'product': 'milk', 'inStock': true},
            {'product': 'sugar', 'inStock': true},
            {'product': 'iceCream', 'inStock': true},
            {'product': 'water', 'inStock': true},
            {'product': 'hotSauce', 'inStock': true},
            {'product': 'pepperoni', 'inStock': true},

        ]


        const outcome1 = { 'true' : 6 }
        expect(countBy(products, value => value.inStock)).toEqual(outcome1);
    });

    test("Only false values",() => {

        const products = [
            {'product': 'milk', 'inStock': false},
            {'product': 'sugar', 'inStock': false},
            {'product': 'iceCream', 'inStock': false},
            {'product': 'water', 'inStock': false},
            {'product': 'hotSauce', 'inStock': false},
            {'product': 'pepperoni', 'inStock': false},

        ]


        const outcome1 = { 'false' : 6 }
        expect(countBy(products, value => value.inStock)).toEqual(outcome1);
    });




    test("false and true values",() => {

        const products = [
            {'product': 'milk', 'inStock': false},
            {'product': 'sugar', 'inStock': false},
            {'product': 'iceCream', 'inStock': false},
            {'product': 'water', 'inStock': true},
            {'product': 'hotSauce', 'inStock': true},
            {'product': 'pepperoni', 'inStock': true},

        ]


        const outcome = { 'true' : 3, 'false': 3 }
        expect(countBy(products, value => value.inStock)).toEqual(outcome);
    });

    test("Null values mixed with correct ones",() => {

        const products = [
            {'product': 'milk', 'inStock': null},
            {'product': 'sugar', 'inStock': true},
            {'product': 'iceCream', 'inStock': true},
            {'product': 'water', 'inStock': null},
            {'product': 'hotSauce', 'inStock': false},
            {'product': 'pepperoni', 'inStock': false},

        ]


        const outcome1 = { 'true' : 2 , 'false': 2, 'null': 2}
        expect(countBy(products, value => value.inStock)).toEqual(outcome1);
    });

});