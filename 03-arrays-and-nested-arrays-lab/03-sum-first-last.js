function sumFirstLast(arr) {
    let firstEl = Number(arr.shift());
    let lastEl = Number(arr.pop());

    let sum = firstEl + lastEl;
    return sum;
}

let result = console.log(sumFirstLast(['20', '30', '40']));
// let result = console.log(sumFirstLast(['5', '10']));