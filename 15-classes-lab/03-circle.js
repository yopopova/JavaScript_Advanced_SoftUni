class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() { // Property 'getter'.
        return this.radius * 2;
        // We just take the radius value multiplied by 2.
    }

    set diameter(value) { // Property 'setter'.
        this.radius = value / 2;
        // Here we set a new radius value.
    }

    get area() { // Read-only
        return Math.PI * (this.radius ** 2);
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);