const library = require('./03-library.js');
let { assert } = require('chai');

describe('Test the functionality of library object', () => {

    // calcPriceOfBook
    describe('Test calcPriceOfBook method', () => {

        // Incorrect tests
        it('Should throw an error, if the book name is number', () => {
            assert.throw(() => { library.calcPriceOfBook(2, 2001), 'Invalid input'; });
        });

        it('Should throw an error, if the year is string', () => {
            assert.throw(() => { library.calcPriceOfBook('Moshi-moshi', 'Star'), 'Invalid input'; });
        });

        // Correct tests
        it('Should return special message, if book name is string and year is integer number', () => {
            assert.equal(library.calcPriceOfBook('Moshi-moshi', 2017), 'Price of Moshi-moshi is 20.00');
        });

        it('Should return special message, if book name is string and year is integer number, but before 1980', () => {
            assert.equal(library.calcPriceOfBook('The woman in the sands', 1956), 'Price of The woman in the sands is 10.00');
        });
    });

    // findBook
    describe('Test findBook method', () => {

        // Incorrect tests
        it('Should throw an error, if the array of books is empty', () => {
            assert.throw(() => { library.findBook([], 'Troy'), 'No books currently available'; });
        });

        it('Should return special message, if the book name is not in the array', () => {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'Moshi-moshi'), 'The book you are looking for is not here!');
        });

        // Correct tests
        it('Should return special message, if the book name is in the array', () => {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'Torronto'), 'We found the book you want.');
        });
    });

    // arrangeTheBooks
    describe('Test arrangeTheBooks method', () => {

        // Incorrect tests
        it('Should throw an error, if count of books is string', () => {
            assert.throw(() => { library.arrangeTheBooks('Troy'), 'Invalid input'; });
        });

        it('Should throw an error, if count of books is negative number', () => {
            assert.throw(() => { library.arrangeTheBooks(-3), 'Invalid input'; });
        });

        it('Should return special message, if free space is more than books', () => {
            assert.equal(library.arrangeTheBooks(45), 'Insufficient space, more shelves need to be purchased.');
        });

        // Correct tests
        it('Should return special message, if free space is more than books', () => {
            assert.equal(library.arrangeTheBooks(25), 'Great job, the books are arranged.');
        });
    });
});

// .\node_modules\.bin\mocha .\03-library.test.js