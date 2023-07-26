function lastKNumbersSequence(n, k) {
    let arr = [1];

    for (let i = 1; i < n; i++) {
        let arrElements = arr.slice(-k);

        let currentNum = 0;

        for (let num of arrElements) {
            currentNum += num;
        }

        arr.push(currentNum);
    }

    return arr;
}