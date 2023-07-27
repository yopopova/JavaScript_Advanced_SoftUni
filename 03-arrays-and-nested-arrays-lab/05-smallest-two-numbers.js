function smallestTwoNumbers(input) {
    let sortedArr = input.sort((a, b) => {
        return a - b;
    });

    let arr = [];
    arr.push(sortedArr[0]);
    arr.push(sortedArr[1]);

    console.log(arr.join(' '));
}