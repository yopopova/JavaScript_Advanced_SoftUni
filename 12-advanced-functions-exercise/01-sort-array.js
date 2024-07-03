function sortArray(array, order) {
    if (order === 'asc') {
        array.sort((a, b) => a - b);
    } else if (order === 'desc') {
        array.sort((a, b) => b - a);
    }

    return array;
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));