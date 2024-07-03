const bookSelection = require('./03-book-selection.js');
let { assert } = require('chai');

describe('Test the functionality of bookSelection object', () => {

    // isGenreSuitable
    describe('Test isGenreSuitable method', () => {

        // Correct tests
        it('Should return special message, if book name is "Thriller" and age is less than 12', () => {
            assert.equal(bookSelection.isGenreSuitable('Thriller', 11), 'Books with Thriller genre are not suitable for kids at 11 age');
        });

        it('Should return special message, if book name is "Thriller" and age is equal to 12', () => {
            assert.equal(bookSelection.isGenreSuitable('Thriller', 12), 'Books with Thriller genre are not suitable for kids at 12 age');
        });

        it('Should return special message, if book name is "Horror" and age is less than 12', () => {
            assert.equal(bookSelection.isGenreSuitable('Horror', 11), 'Books with Horror genre are not suitable for kids at 11 age');
        });

        it('Should return special message, if book name is "Horror" and age is equal to 12', () => {
            assert.equal(bookSelection.isGenreSuitable('Horror', 12), 'Books with Horror genre are not suitable for kids at 12 age');
        });

        // Incorrect tests
        it('Should return special message, if book name is "Horror" and age is 17', () => {
            assert.equal(bookSelection.isGenreSuitable('Horror', 17), 'Those books are suitable');
        });

        it('Should return special message, if book name is "Myths and Legends" and age is 10', () => {
            assert.equal(bookSelection.isGenreSuitable('Myths and Legends', 10), 'Those books are suitable');
        });
    });

    // isItAffordable
    describe('Test isItAffordable method', () => {

        // Correct tests
        it('Should return special message, if price and budget are a numbers and budget is bigger than price', () => {
            assert.equal(bookSelection.isItAffordable(20, 200), 'Book bought. You have 180$ left');
        });

        it('Should return special message, if price and budget are a numbers and budget is bigger than price', () => {
            assert.equal(bookSelection.isItAffordable(20, 20), 'Book bought. You have 0$ left');
        });

        // Incorrect tests
        it('Should return special message, if price is bigger than budget', () => {
            assert.equal(bookSelection.isItAffordable(20, 15), "You don't have enough money");
        });

        it('Should throw an error, if the price is not a number', () => {
            assert.throw(() => { bookSelection.isItAffordable('star', 200), 'Invalid input'; });
        });

        it('Should throw an error, if the budget is not a number', () => {
            assert.throw(() => { bookSelection.isItAffordable(20, 'star'), 'Invalid input'; });
        });
    });

    // suitableTitles
    describe('Test suitableTitles method', () => {

        it('Should throw an error, if the first parameter is not an array', () => {
            assert.throw(() => { bookSelection.suitableTitles(20, 'Thriller'), 'Invalid input'; });
        });

        it('Should throw an error, if the second parameter is not string', () => {
            assert.throw(() => { bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 10), 'Invalid input'; });
        });

        it('Should throw an error, if the input is incorrect', () => {
            assert.throw(() => { bookSelection.suitableTitles(20, ''), 'Invalid input'; });
        });

        // Correct tests
        it('Should return special message, if input parameters are correct', () => {
            assert.equal(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Ouija", genre: "Horror" }], 'Horror'), ('Ouija'));
        });
    });
});

// .\node_modules\.bin\mocha .\03-book-selection.test.js