function magicMatrices(arr) {

    let sumRow = arr.map((col => col.reduce((a, b) => a + b)));
    let sumCol = arr.reduce((r, a) => r.map((b, i) => a[i] + b));
    let allEqual = array => array.every(v => v === array[0]);

    return allEqual(sumRow) && allEqual(sumRow) && sumRow.toString() === sumCol.toString();
}

console.log(magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));