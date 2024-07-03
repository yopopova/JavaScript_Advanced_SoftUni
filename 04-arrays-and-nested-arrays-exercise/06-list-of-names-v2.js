function listOfNames(arr) {
    let sortedArr = arr.sort((a, b) => {
        return a.localeCompare(b);
    });

    let orderNum = 1;

    sortedArr.forEach((name) => {
        console.log(`${orderNum}.${name}`);
        orderNum++;
    });
}

listOfNames(["John", "Bob", "Christina", "Ema"]);