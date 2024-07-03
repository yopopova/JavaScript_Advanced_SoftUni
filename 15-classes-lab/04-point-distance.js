class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(firstPoint, secondPoint) {
        let a = Math.abs(firstPoint.x - secondPoint.x);
        // ^ Subtract the 'x' of the second point from the 'x' of the first point to find one side of the resulting triangle.
        // ^ 8 - 5 = 3 (this is one side of the resulting rectangle)

        let b = Math.abs(firstPoint.y - secondPoint.y);
        // ^ We do the same to find the second side as well.
        // ^ 9 - 5 = 4 (this is the second side of the resulting rectangle)

        // !!! You can do without Math.abs() because negative numbers squared become positive anyway. !!!

        let distance = Math.sqrt(a ** 2 + b ** 2);
        // ^ We find the square root of 'a' squared + 'b' squared.
        // ^ 3 * 3 = 9
        // ^ 4 * 4 = 16
        // ^ 9 + 16 = 25
        // ^ Square root of 25 = 5

        return distance;
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));