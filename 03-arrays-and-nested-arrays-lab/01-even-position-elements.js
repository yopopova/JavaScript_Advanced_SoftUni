function evenPositionElements(arr) {
    let arrL = arr.length;
    let newArr = [];

    for (let i = 0; i < arrL; i++) {
        if (i % 2 === 0) {
            newArr.push(arr[i]);
        }
    }

    console.log(newArr.join(' '));
}