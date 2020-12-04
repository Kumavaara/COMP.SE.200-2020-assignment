import words from '../src/words.js'

describe("Testing the words function",() => {
    test("Extra & in text",() => {
        expect(words('fred, bob, maverick, & jonahtan')).toStrictEqual(['fred', 'bob', 'maverick', 'jonahtan']);
    });

    test("Test on the pattern option", ()=>{
        expect(words('fred, bob, maverick, & jonahtan', /[^, ]+/g)).toStrictEqual(['fred', 'bob', 'maverick', '&', 'jonahtan']);
    });
});