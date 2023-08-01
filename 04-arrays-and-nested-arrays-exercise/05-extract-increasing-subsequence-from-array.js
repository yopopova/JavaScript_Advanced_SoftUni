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