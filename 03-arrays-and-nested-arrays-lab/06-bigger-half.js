function biggerHalf(input) {
    let sortedArr = input.sort((a, b) => {
        return a - b;
    });

    let arrHalfLength = Math.floor(sortedArr.length / 2);
    let newArr = sortedArr.slice(arrHalfLength);

    return newArr;
}