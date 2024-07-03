function pieceOfPie(arr, startPiece, endPiece) {
    let startIndex = arr.indexOf(startPiece);
    let endIndex = arr.indexOf(endPiece);
    let newArr = arr.slice(startIndex, endIndex + 1);

    return newArr;
}

let result = pieceOfPie(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'], 'Key Lime Pie', 'Lemon Meringue Pie');
console.log(result);