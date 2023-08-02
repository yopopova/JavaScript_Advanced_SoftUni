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