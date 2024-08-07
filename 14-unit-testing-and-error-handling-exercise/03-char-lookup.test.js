const lookupChar = require('./03-char-lookup.js');
const { assert, expect } = require('chai');

describe('lookupChar function tests', () => {

    // Valid tests
    it('Return char at index', () => {
        assert.equal(lookupChar('Love', 0), 'L');
        // assert(lookupChar('Love', 0) === 'L'); // Another variation of the above check.
        // expect(lookupChar('Love', 0)).to.equal('L'); // Variant with 'expect' replacing 'assert'.
        // In this variant, however, we also need to add 'expect' above the {} of 'assert'.
    });

    it('Return char at index', () => {
        assert.equal(lookupChar('Love', 1), 'o');
    });

    it('Return char at index', () => {
        assert.equal(lookupChar('L', 0), 'L'); // A string of 1 element.
    });


    // Invalid tests
    it('Index over the string length', () => {
        assert.equal(lookupChar('Love', 10), 'Incorrect index');
    });

    it('Negative string index', () => {
        assert.equal(lookupChar('Love', -10), 'Incorrect index');
    });

    it('Empty string as first parameter', () => {
        assert.equal(lookupChar('', 0), 'Incorrect index'); // !!! IMPORTANT TEST FOR EMPTY STRING !!!
    });

    // let str = '';
    // console.log(str[0]);
    // ^ Because if we type this the console will return 'undefined'.

    it('Return undefined if first parameter is not string', () => {
        assert.equal(lookupChar(100, 10), undefined);
    });

    it('Return undefined with string first parameter and decimal second parameter', () => {
        assert.equal(lookupChar('Love', 10.5), undefined);
    });

    it('Return undefined with wrong parameter types', () => {
        assert.equal(lookupChar(10, '10.5'), undefined);
    });
})