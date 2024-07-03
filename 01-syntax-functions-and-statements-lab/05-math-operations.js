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

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');