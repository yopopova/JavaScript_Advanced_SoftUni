function sortingNumbers(arr) {
    let resultArr = [];
    arr = arr.sort((a, b) => a - b);

    while (arr.length !== 0) {
        let firstEl = arr.shift();
        resultArr.push(firstEl);

        let lastEl = arr.pop();
        resultArr.push(lastEl);
    }

    return resultArr;
}

let result = sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
console.log(result);