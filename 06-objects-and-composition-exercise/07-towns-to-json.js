function townsToJson(arr) {
    let newArr = arr.splice(1);
    let regEx = /\s*\|\s*/;
    let towns = [];

    for (const line of newArr) {
        let items = line.split(regEx);
        let filteredItems = items.filter(Boolean); // We remove the elements that are an empty string.

        towns.push({
            Town: filteredItems[0],
            Latitude: +Number(filteredItems[1]).toFixed(2), // We write '+' because otherwise it will be output as a string.
            Longitude: +Number(filteredItems[2]).toFixed(2) // We write '+' because otherwise it will be output as a string.
        });
    }

    return JSON.stringify(towns);
}

let result = townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);

console.log(result);