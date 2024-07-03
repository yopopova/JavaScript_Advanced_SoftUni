function stringLength(arg1, arg2, arg3) {
    const count = 3;

    let argOne = arg1.length;
    let argTwo = arg2.length;
    let argThree = arg3.length;

    let sumL = argOne + argTwo + argThree;
    let average = Math.floor(sumL / count);

    console.log(sumL);
    console.log(average);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');