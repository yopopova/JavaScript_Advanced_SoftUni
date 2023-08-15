function townsToJson(arr) {
    let newArr = arr.splice(1);
    let regEx = /\s*\|\s*/;
    let towns = [];

    for (const line of newArr) {
        let items = line.split(regEx);
        let filteredItems = items.filter(Boolean);

        towns.push({
            Town: filteredItems[0],
            Latitude: +Number(filteredItems[1]).toFixed(2),
            Longitude: +Number(filteredItems[2]).toFixed(2)
        });
    }

    return JSON.stringify(towns);
}