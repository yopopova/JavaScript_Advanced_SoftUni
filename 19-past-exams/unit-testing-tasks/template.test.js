const library = require('./03-library.js');
let { assert } = require('chai');

describe('Test the functionality of library object', () => {

    // 
    describe('Test calcPriceOfBook method', () => {

        it('Should throw an error, if the book name is number', () => {
            assert.throw(() => { library.calcPriceOfBook(2, 2001), 'Invalid input'; });
        });

        it('Should return special message, if book name is string and year is integer number', () => {
            assert.equal(library.calcPriceOfBook('Moshi-moshi', 2017), 'Price of Moshi-moshi is 20.00');
        });
    });

    // 
    describe('Test findBook method', () => {

    });

    // 
    describe('Test arrangeTheBooks method', () => {

    });
})