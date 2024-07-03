function negativePositiveNumbers(input) {
    let arr = [];

    for (let el of input) {
        if (el >= 0) {
            arr.push(el);
        } else {
            arr.unshift(el);
        }
    }

    for (let item of arr) {
        console.log(item);
    }
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);