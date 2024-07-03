function magicMatrices(arr) {
    let sum = arr[0].reduce((a, b) => a + b);

    for (let i = 0; i < arr[0].length; i++) {
        let currentColSum = 0;

        for (let j = 0; j < arr.length; j++) {
            currentColSum += arr[j][i];
        }

        if (currentColSum !== sum) {
            return false;
        }
    }

    return true;
}

console.log(magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));