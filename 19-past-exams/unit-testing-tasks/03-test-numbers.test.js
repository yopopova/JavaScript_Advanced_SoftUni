const testNumbers = require('./03-test-numbers.js');
const { assert } = require('chai');

describe('Test the functionality of testNumbers object', () => {

    // sumNumbers
    describe('Test sumNumbers value', () => {

        // Incorrect tests
        it('Should return undefined, if num1 is not a number', () => {
            assert.equal(testNumbers.sumNumbers('star', 5), undefined);
        });

        it('Should return undefined, if num2 is not a number', () => {
            assert.equal(testNumbers.sumNumbers(5, 'star'), undefined);
        });

        it('Should return undefined, if num1 and num2 are not numbers', () => {
            assert.equal(testNumbers.sumNumbers('hello', 'star'), undefined);
        });

        // Correct tests
        it('Should return total sum, if num1 and num2 are positive numbers', () => {
            assert.equal(testNumbers.sumNumbers(2, 4), '6.00');
        });

        it('Should return total sum, if num1 and num2 are negative numbers', () => {
            assert.equal(testNumbers.sumNumbers(-2, -4), '-6.00');
        });
    });

    // numberChecker
    describe('Test numberChecker value', () => {

        // Incorrect tests
        it('Should throw an error, if the input is string', () => {
            assert.throw(() => { testNumbers.numberChecker('flower'), 'The input is not a number!'; });
        });

        // Correct tests
        it('Should return even, the input is even number', () => {
            assert.equal(testNumbers.numberChecker(4), 'The number is even!');
        });

        it('Should return odd, the input is odd number', () => {
            assert.equal(testNumbers.numberChecker(3), 'The number is odd!');
        });
    });

    // averageSumArray
    describe('Test averageSumArray value', () => {

        it('Should return the sum of the array elements', () => {
            assert.equal(testNumbers.averageSumArray([1, 2, 3]), 2);
        });
    });
});

// .\node_modules\.bin\mocha .\03-test-numbers.test.js