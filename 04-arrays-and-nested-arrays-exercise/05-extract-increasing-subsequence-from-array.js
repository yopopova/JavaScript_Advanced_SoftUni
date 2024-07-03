function extractIncreasingSubsequenceFromArray(arr) {
    let newArr = [];

    arr.reduce((firstNum, secondNum) => {
        if (newArr.length === 0) {
            newArr.push(firstNum);
        }

        if (secondNum >= firstNum && secondNum >= newArr[newArr.length - 1]) {
            newArr.push(secondNum);
        }

        return secondNum;
    });

    return newArr;
}

let result = extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// let result = extractIncreasingSubsequenceFromArray([1, 2, 3, 4]);
// let result = extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]);

console.log(result);