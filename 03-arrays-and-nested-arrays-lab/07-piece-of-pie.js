function pieceOfPie(arr, startPiece, endPiece) {
    let startIndex = arr.indexOf(startPiece);
    let endIndex = arr.indexOf(endPiece);
    let newArr = arr.slice(startIndex, endIndex + 1);

    return newArr;
}