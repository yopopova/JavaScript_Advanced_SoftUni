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