function Person(name, age) {
    this.name = name,
    this.age = age
}

Person.prototype.greet = function () {
    console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old.`);
}

// let pepi = new Person('Pesho', 17);
// pepi.greet();

function make(constructor, first, second) {
    // 1. Create new object in memory
    let obj = {};

    // 2. Set prototype of the object
    // let obj = Object.create(constructor.prototype);

    Object.setPrototypeOf(obj, constructor.prototype); // Like this we can change the prototype of the object

    // 3. Calls constructor
    constructor.call(obj, first, second);

    // 4. Return created object
    return obj;
}

// Using 'new' keyword
// let pepi = new Person('Pesho', 17);
// pepi.greet();

//Using custom 'new' function
let goshko = make(Person, 'Georgi', 15);
goshko.greet();
console.log(goshko);