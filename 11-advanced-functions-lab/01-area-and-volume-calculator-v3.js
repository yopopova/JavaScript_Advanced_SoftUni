function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    return JSON.parse(input)
        .map(points => ({
            area: area.call(points),
            volume: vol.call(points)
        }));
}