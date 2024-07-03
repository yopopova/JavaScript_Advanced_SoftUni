const sumOfTwoNumbers = require('./index.js');
// So in () we show the path - from which file we want to get what.
// './' means 'we are in the same folder' and shows us the files we have in it.
// We can add a '.js' extension, or we can do without it.
// This is how we access the function.

const { assert } = require('chai');
// We bind a particular method we want to use, in the 'assert' case.

// With 'describe' we describe what we are going to test. We pass the description and function as parameters.
// 'describe' is like a container for tests.
describe('sumOfTwoNumbers function test', () => {

    // Test 1
    // 'it' are the situations where we will put our funckey.
    // Describe what we're going to test.
    it('test with two numbers', () => {
        assert.equal(sumOfTwoNumbers(3, 4), 7);
        // Only 'assert' can be used here, without '.equal' (it's just an 'assert' method).
        // We use 'assert.equal()' because we said above that we would use 'chai'.
        // In () we pass the name of the function with parameters, and after ',' we say what result we expect.
    });

    // Test 2
    it('test with string and number', () => {
        assert.equal(sumOfTwoNumbers('3', 4), 7);
        // Only 'assert' can be used here, without '.equal' (it's just an 'assert' method).
        // A test we're trying to break to see how it looks on the console.
        // The test itself is correct, but we need to fix the functionality.
    });
});

// Clear the terminal with 'clear' if needed.
// Then we write 'mocha .\index.test.js' (the name of the test file).