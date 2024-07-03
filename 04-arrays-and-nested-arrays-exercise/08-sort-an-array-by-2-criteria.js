function sortAnArrayByTwoCriteria(arr) {
    arr.sort((elOne, elTwo) => {
        return elOne.length - elTwo.length || elOne.localeCompare(elTwo);
    });

    arr.forEach((word) => {
        console.log(word);
    });
}

// sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
// sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortAnArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default']);