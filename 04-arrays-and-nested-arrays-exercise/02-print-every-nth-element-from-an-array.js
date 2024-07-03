function printEveryNthElementFromAnArray(arr, step) {
    let arrL = arr.length;
    let newArr = [];

    for (let i = 0; i < arrL; i += step) {
        let currentItem = arr[i];
        newArr.push(currentItem);
    }

    return newArr;
}

let result = printEveryNthElementFromAnArray(['5', '20', '31', '4', '20'], 2);
// let result = printEveryNthElementFromAnArray(['dsa', 'asd', 'test', 'tset'], 2);
// let result = printEveryNthElementFromAnArray(['1', '2', '3', '4', '5'], 6);

console.log(result);