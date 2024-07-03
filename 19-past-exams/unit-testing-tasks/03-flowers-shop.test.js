const flowerShop = require('./03-flowers-shop.js');
let { assert } = require('chai');

describe('Test the functionality of flowerShop object', () => {

    // calcPriceOfFlowers
    describe('Test calcPriceOfFlowers method', () => {

        it('Should throw an error, if the input parameters are incorrect', () => {
            assert.throw(() => { flowerShop.calcPriceOfFlowers(2, 'star', 'hello'), 'Invalid input'; });
        });

        it('Should return special message, if the input parameters are valid', () => {
            assert.equal(flowerShop.calcPriceOfFlowers('Rose', 3, 5), 'You need $15.00 to buy Rose!');
        });
    });

    // checkFlowersAvailable
    describe('Test checkFlowersAvailable method', () => {

        it('Should return special message, if the array does not include the flower', () => {
            assert.equal(flowerShop.checkFlowersAvailable('Snowdrop', ["Rose", "Lily", "Orchid"]), 'The Snowdrop are sold! You need to purchase more!');
        });

        it('Should return special message, if the array includes the flower', () => {
            assert.equal(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"]), 'The Rose are available!');
        });
    });

    // sellFlowers
    describe('Test sellFlowers method', () => {

        // Incorrect tests
        it('Should throw an error, if gardenArr is not a array', () => {
            assert.throw(() => { flowerShop.sellFlowers('star', 1), 'Invalid input'; });
        });

        it('Should throw an error, if space is not a number', () => {
            assert.throw(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 'star'), 'Invalid input'; });
        });

        it('Should throw an error, if space is a negative number', () => {
            assert.throw(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -20), 'Invalid input'; });
        });

        it('Should throw an error, if space is greater than array length', () => {
            assert.throw(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 20), 'Invalid input'; });
        });

        it('Should throw an error, if space is equal to array length', () => {
            assert.throw(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3), 'Invalid input'; });
        });


        // Correct tests
        it('Should return special message, if the input parameters are correct', () => {
            assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1), 'Rose / Orchid');
        });
    });
});

// .\node_modules\.bin\mocha .\03-flowers-shop.test.js