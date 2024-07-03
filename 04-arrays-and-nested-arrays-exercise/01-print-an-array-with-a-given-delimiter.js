function printAnArrayWithAGivenDelimiter(arr, delimiter) {
    let newArr = arr.join(delimiter);
    console.log(newArr);
}

printAnArrayWithAGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five'], '-');
printAnArrayWithAGivenDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');