function reduceDemo(arr) {
    let sum = arr.reduce(function (firstNum, secondNum) {
        return firstNum + secondNum;
        // ^ This is where the sum is accumulated, which is returned to the function as 'firstNum'.
        // And 'secondNum' is every next number until the end of the array.
    });

    return sum;
}

let result = reduceDemo([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// let result = reduceDemo([1, 2, 3, 4]);
// let result = reduceDemo([20, 3, 2, 15, 6, 1]);

console.log(result);