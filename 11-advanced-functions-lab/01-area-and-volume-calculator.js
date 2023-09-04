function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    let coordinates = JSON.parse(input);
    let result = [];

    for (let points of coordinates) {
        result.push({
            area: area.call(points),
            volume: vol.call(points)
        });
    }

    return result;
}