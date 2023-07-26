function sumFirstLast(arr) {
    let firstEl = Number(arr.shift());
    let lastEl = Number(arr.pop());

    let sum = firstEl + lastEl;
    return sum;
}