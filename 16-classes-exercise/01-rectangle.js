class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea() { // We don't pass any parameter names here because we don't have any parameters down in the call either.
        return this.width * this.height;
        // ^ If we don't write 'this' here, it will tell us on the console that 'width' and 'height' are not defined.
        // ^ By 'this' we indicate that we are pointing to the current instance.
    }
}

let rect = new Rectangle(4, 5, 'Red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea()); // We have no parameters.