function equalNeighbors(matrix) {
    let matrixL = matrix.length;
    let count = 0;

    for (let row = 0; row < matrixL - 1; row++) {
        let currentRow = matrix[row];
        let currentRowL = currentRow.length;

        for (let col = 0; col < currentRowL; col++) {
            let currentCol = currentRow[col];

            if (currentCol == matrix[row + 1][col]) {
                count++;
            }

            if (currentCol == matrix[row][col + 1]) {
                count++;
            }

            if (row == matrixL - 2 && matrix[row + 1][col] == matrix[row + 1][col + 1]) {
                count++;
            }
        }
    }

    return count;
}