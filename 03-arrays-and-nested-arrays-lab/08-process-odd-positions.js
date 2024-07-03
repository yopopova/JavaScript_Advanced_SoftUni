function processOddPositions(arr) {
    let arrL = arr.length;
    let newArr = [];

    for (let i = 0; i < arrL; i++) {
        let currentNum = arr[i];

        if (i % 2 === 1) {
            let doubledNum = currentNum * 2;
            newArr.push(doubledNum);
        }
    }

    let reversedArr = newArr.reverse();
    return reversedArr.join(' ');
}

let result = processOddPositions([10, 15, 20, 25]);
console.log(result);