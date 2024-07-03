function subSum(numbers, start, end) {
    if (!Array.isArray(numbers)) {
        return NaN;
    }

    // if(start < 0) {
    //     start = 0;
    // }

    let startIndex = Math.max(start, 0);
    // Get me the largest value between 'start' and '0'. It will return the larger one.
    // Another variation of the above check.

    let endIndex = Math.min(end, numbers.length - 1);
    // Get me the smallest value between 'start' and '0'. Will return the smaller one.

    // ^^^ ERROR HANDLING ^^^ (Defensive Programming)

    let subNumbers = numbers.slice(startIndex, endIndex + 1);
    // + 1 to insert the 2nd value inclusive, because slice() stops before the second index.

    let sum = subNumbers.reduce((acc, x) => acc + Number(x), 0);
    // We have an accumulator 'acc' that starts at '0' because that's what we passed in as the initial value and adding it to 'x',
    // which is every 1 number from the array, we accumulate the value in 'acc'. We necessarily turn every 1 electron from the array into a number.

    return sum;

    // ^^^ TASK SOLUTION ^^^
}

// console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
// console.log(subSum([10, 'twenty', 30, 40], 0, 2));
// console.log(subSum([], 1, 2));
// console.log(subSum('text', 0, 2));