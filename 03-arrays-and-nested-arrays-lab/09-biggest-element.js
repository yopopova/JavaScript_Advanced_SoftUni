function biggestElement(matrix) {
    let matrixL = matrix.length;
    let biggestNum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < matrixL; i++) {
        let currentArr = matrix[i];
        let currentArrL = currentArr.length;

        for (let k = 0; k < currentArrL; k++) {
            let currentNum = currentArr[k];

            if (currentNum > biggestNum) {
                biggestNum = currentNum;
            }
        }
    }

    return biggestNum;
}

let result = biggestElement([[20, 50, 10], [8, 33, 145]]);
console.log(result);