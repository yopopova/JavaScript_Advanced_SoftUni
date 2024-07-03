function wordsUppercase(str) {
    let regEx = /[a-zA-z]+/g;
    let validMatches = str.match(regEx);

    let arrUpperCase = [];

    for (el of validMatches) {
        let upperLetters = el.toUpperCase();
        arrUpperCase.push(upperLetters);
    }

    console.log(arrUpperCase.join(', '));
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');