function sumOfTwoNumbers(num1, num2) {
    return Number(num1) + Number(num2);
    // Test 2: We fix the functionality by necessarily turning the two parameters into numbers.
}

module.exports = sumOfTwoNumbers;
// Function name is without (). So we only export 1 function,
// If we want to export several at the same time, we need to make an object.
// This way we say we want this functionality to be exported ie. to be accessed from another/external location.