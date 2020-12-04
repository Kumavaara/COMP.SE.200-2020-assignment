import filter from '../src/filter.js'

describe("Testing the filter function",() => {

    const products = [
        {'product': 'milk', 'inStock': true},
        {'product': 'sugar', 'inStock': true},
        {'product': 'iceCream', 'inStock': true},
        {'product': 'water', 'inStock': false},
        {'product': 'hotSauce', 'inStock': false},
        {'product': 'pepperoni', 'inStock': false},
    ]


    test("Filtering an array",() => {
        expect(filter(products, ({inStock}) => inStock)).toStrictEqual(
        [{'product': 'milk', 'inStock': true},
        {'product': 'sugar', 'inStock': true},
        {'product': 'iceCream', 'inStock': true}]);
    });

    test("Null",() => {
        expect(filter(null)).toStrictEqual([[]]);
    });

});