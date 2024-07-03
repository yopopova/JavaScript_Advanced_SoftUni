function smallestTwoNumbers(input) {
    let sortedArr = input.sort((a, b) => {
        return a - b;
    });

    let arr = [];
    arr.push(sortedArr[0]);
    arr.push(sortedArr[1]);

    console.log(arr.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);