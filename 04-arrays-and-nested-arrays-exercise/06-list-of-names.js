function listOfNames(arr) {
    let sortedArr = arr.sort((a, b) => {
        return a.localeCompare(b);
    });

    let sortedArrL = sortedArr.length;

    for (let i = 0; i < sortedArrL; i++) {
        let currentName = sortedArr[i];
        console.log(`${i + 1}.${currentName}`);
    }
}