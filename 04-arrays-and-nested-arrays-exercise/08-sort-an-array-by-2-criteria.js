function sortAnArrayByTwoCriteria(arr) {
    arr.sort((elOne, elTwo) => {
        return elOne.length - elTwo.length || elOne.localeCompare(elTwo);
    });

    arr.forEach((word) => {
        console.log(word);
    });
}