const cinema = require('./03-cinema.js');
let { assert } = require('chai');

describe('Test the functionality of cinema object', () => {

    // showMovies
    describe('Test showMovies method', () => {

        it('Should return special message, if the array with movies is empty', () => {
            assert.equal(cinema.showMovies([]), 'There are currently no movies to show.');
        });

        it('Should return all movies, if array length is more than 0', () => {
            assert.equal(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker']), 'King Kong, The Tomorrow War, Joker');
        });
    });

    // ticketPrice
    describe('Test ticketPrice method', () => {

        it('Should throw an error, if projection type is different from the types in the object', () => {
            assert.throw(() => { cinema.ticketPrice('Flower'), 'Invalid projection type.'; });
        });

        it('Should return special message, if projection type is Premiere', () => {
            assert.equal(cinema.ticketPrice('Premiere'), 12.00);
        });

        it('Should return special message, if projection type is Normal', () => {
            assert.equal(cinema.ticketPrice('Normal'), 7.50);
        });

        it('Should return special message, if projection type is Discount', () => {
            assert.equal(cinema.ticketPrice('Discount'), 5.50);
        });
    });

    // swapSeatsInHall
    describe('Test swapSeatsInHall method', () => {

        // Incorrect tests
        it('Should return special message, if one of two seats does not exist at all', () => {
            assert.equal(cinema.swapSeatsInHall(2), 'Unsuccessful change of seats in the hall.');
        });

        it('Should return special message, if first seat is string', () => {
            assert.equal(cinema.swapSeatsInHall('Discount', 2), 'Unsuccessful change of seats in the hall.');
        });

        it('Should return special message, if second seat is string', () => {
            assert.equal(cinema.swapSeatsInHall(2, 'Discount'), 'Unsuccessful change of seats in the hall.');
        });

        it('Should return special message, if first seat is greater than hall capasity', () => {
            assert.equal(cinema.swapSeatsInHall(23, 3), 'Unsuccessful change of seats in the hall.');
        });

        it('Should return special message, if second seat is greater than hall capasity', () => {
            assert.equal(cinema.swapSeatsInHall(3, 23), 'Unsuccessful change of seats in the hall.');
        });

        it('Should return special message, if first seat is lower than 0', () => {
            assert.equal(cinema.swapSeatsInHall(-23, 3), 'Unsuccessful change of seats in the hall.');
        });

        it('Should return special message, if second seat is lower than 0', () => {
            assert.equal(cinema.swapSeatsInHall(3, -23), 'Unsuccessful change of seats in the hall.');
        });

        it('Should return special message, if first seat is equal to 0', () => {
            assert.equal(cinema.swapSeatsInHall(0, 3), 'Unsuccessful change of seats in the hall.');
        });

        it('Should return special message, if second seat is equal to 0', () => {
            assert.equal(cinema.swapSeatsInHall(3, 0), 'Unsuccessful change of seats in the hall.');
        });

        it('Should return special message, if both seats are equal', () => {
            assert.equal(cinema.swapSeatsInHall(3, 3), 'Unsuccessful change of seats in the hall.');
        });

        // Correct tests
        it('Should return special message, if both seats are correct', () => {
            assert.equal(cinema.swapSeatsInHall(13, 4), 'Successful change of seats in the hall.');
        });
    });
});

// .\node_modules\.bin\mocha .\03-cinema.test.js