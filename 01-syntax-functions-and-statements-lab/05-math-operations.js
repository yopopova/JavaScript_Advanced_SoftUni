function mathOperations(numOne, numTwo, operator) {
    let result = 0;

    if (operator === '+') {
        result = numOne + numTwo;
    } else if (operator === '-') {
        result = numOne - numTwo;
    } else if (operator === '*') {
        result = numOne * numTwo;
    } else if (operator === '/') {
        result = numOne / numTwo;
    } else if (operator === '%') {
        result = numOne % numTwo;
    } else if (operator === '**') {
        result = numOne ** numTwo;
    }

    console.log(result);
}