const mathEnforcer = require('./04-math-enforcer.js');
const { assert } = require('chai');
const { addFive, subtractTen, sum } = require('./04-math-enforcer.js');

describe('mathEnforcer function tests', () => {

    // 'addFive' function
    describe('addFive function tests', () => {

        // Tests with incorrect input
        it('Should return undefined with string', () => {
            assert.equal(mathEnforcer.addFive('Test'), undefined);
        });

        it('Should return undefined with array', () => {
            assert.equal(mathEnforcer.addFive([]), undefined);
        });

        it('Should return undefined with an object', () => {
            assert.equal(mathEnforcer.addFive({}), undefined);
        });

        it('Should return undefined with undefined', () => {
            assert.equal(mathEnforcer.addFive(undefined), undefined);
        });

        it('Should return undefined with null', () => {
            assert.equal(mathEnforcer.addFive(null), undefined);
        });


        // Tests with correct input
        it('Positive integer number + 5', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
        });

        it('Negative integer number + 5', () => {
            assert.equal(mathEnforcer.addFive(-5), 0);
        });

        it('Decimal number + 5', () => {
            assert.equal(mathEnforcer.addFive(5.5), 10.5);
        });
    });


    // 'subtractTen' function
    describe('subtractTen function tests', () => {

        // Tests with incorrect input
        it('Should return undefined with string', () => {
            assert.equal(mathEnforcer.subtractTen('Test'), undefined);
        });

        it('Should return undefined with array', () => {
            assert.equal(mathEnforcer.subtractTen([]), undefined);
        });

        it('Should return undefined with an object', () => {
            assert.equal(mathEnforcer.subtractTen({}), undefined);
        });

        it('Should return undefined with undefined', () => {
            assert.equal(mathEnforcer.subtractTen(undefined), undefined);
        });

        it('Should return undefined with null', () => {
            assert.equal(mathEnforcer.subtractTen(null), undefined);
        });


        // Tests with correct input
        it('Positive integer number - 10', () => {
            assert.equal(mathEnforcer.subtractTen(5), -5);
        });

        it('Negative integer number - 10', () => {
            assert.equal(mathEnforcer.subtractTen(-5), -15);
        });

        it('Decimal number - 10', () => {
            assert.equal(mathEnforcer.subtractTen(5.5), -4.5);
        });
    });

    describe('sum of two numbers function tests', () => {

        // Tests with correct input
        it('Two positive integer numbers', () => {
            assert.equal(mathEnforcer.sum(10, 20), 30);
        });

        it('Two negative numbers', () => {
            assert.equal(mathEnforcer.sum(-10, -2.5), -12.5);
        });

        it('Two decimal numbers', () => {
            assert.equal(mathEnforcer.sum(10.5, 2.1), 12.6);
        });


        // Tests with incorrect input
        it('First parameter as string, second number', () => {
            assert.equal(mathEnforcer.sum('', 20), undefined);
        });

        it('Second parameter as string, first number', () => {
            assert.equal(mathEnforcer.sum(20, '20'), undefined);
        });
    });
})