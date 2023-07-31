function printEveryNthElementFromAnArray(arr, step) {
    let arrL = arr.length;
    let newArr = [];

    for (let i = 0; i < arrL; i += step) {
        let currentItem = arr[i];
        newArr.push(currentItem);
    }

    return newArr;
}