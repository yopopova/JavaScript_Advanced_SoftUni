function aggregateElements(arr) {
    let arrL = arr.length;
    let sum = 0;
    let sumInversedValues = 0;
    let concat = '';

    for (let i = 0; i < arrL; i++) {
        let currNum = Number(arr[i]);

        sum += currNum;
        sumInversedValues += 1 / currNum;
        concat += currNum;
    }

    console.log(sum);
    console.log(sumInversedValues);
    console.log(concat);
}