function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    let coordinates = JSON.parse(input);

    let result = coordinates.map(points => {
        return {
            area: area.call(points),
            volume: vol.call(points)
        }
    });

    return result;
}