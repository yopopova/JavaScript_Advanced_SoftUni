const rentCar = require('./03-rent-car.js');
let { assert } = require('chai');

describe('Test the functionality of rentCar object', () => {

    // searchCar
    describe('Test searchCar method', () => {

        // Incorrect tests
        it('Should throw an error, if the first element shop is not an array', () => {
            assert.throw(() => { rentCar.searchCar('BMW', 'Audi'), 'Invalid input'; });
        });

        it('Should throw an error, if the second element model is not string', () => {
            assert.throw(() => { rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 3), 'Invalid input'; });
        });

        it('Should throw an error, if the first element is array and the second element string, but there are no matches', () => {
            assert.throw(() => { rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Mercedes'), 'There are no such models in the catalog!'; });
        });

        // Correct tests
        it('Should return special message, if shop is array and model is string which is in the shop array', () => {
            assert.equal(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Audi'), 'There is 1 car of model Audi in the catalog!');
        });
    });

    // calculatePriceOfCar
    describe('Test calculatePriceOfCar method', () => {

        // Incorrect tests
        it('Should throw an error, if the first element shop is not string', () => {
            assert.throw(() => { rentCar.calculatePriceOfCar(1, 2), 'Invalid input'; });
        });

        it('Should throw an error, if the second element shop is not number', () => {
            assert.throw(() => { rentCar.calculatePriceOfCar("BMW", "Volkswagen"), 'Invalid input'; });
        });

        it('Should throw an error, if we do not have this model in the object', () => {
            assert.throw(() => { rentCar.calculatePriceOfCar("Peugeot", 2), 'No such model in the catalog!'; });
        });

        // Correct tests
        it('Should return special message, if we have correct inputs', () => {
            assert.equal(rentCar.calculatePriceOfCar("BMW", 2), 'You choose BMW and it will cost $90!');
        });
    });

    // checkBudget
    describe('Test checkBudget method', () => {

        // Incorrect tests
        it('Should throw an error, if inputs are not numbers', () => {
            assert.throw(() => { rentCar.checkBudget("Volkswagen", "BMW", "Audi"), 'Invalid input'; });
        });

        it('Should return special message, if we have lower budget', () => {
            assert.equal(rentCar.checkBudget(30, 2, 50), 'You need a bigger budget!');
        });

        // Correct tests
        it('Should return special message, if inputs are correct', () => {
            assert.equal(rentCar.checkBudget(30, 2, 90), `You rent a car!`);
        });

        // Test for equal values !!!
        it('Should return special message, if inputs are correct and budget is equal to costPerDay', () => {
            assert.equal(rentCar.checkBudget(30, 1, 30), `You rent a car!`);
        });
    });
})