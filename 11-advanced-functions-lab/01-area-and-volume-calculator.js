function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    let coordinates = JSON.parse(input);
    // ^ The input comes as a string, so we turn it into an array of objects with JSON. Numbers also come as strings!!!

    let result = [];

    for (let points of coordinates) {
        result.push({
            area: area.call(points), // We use 'call()' because the 'area()' and 'vol()' functions expect ready arguments.
            volume: vol.call(points)
        });
    }

    return result;
    // return JSON.stringify(result); // This way we can see the result on the console, but this way is not the best way.
}

console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`));

console.log(solve(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`));