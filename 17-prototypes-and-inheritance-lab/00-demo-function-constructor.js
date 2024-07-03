function Person(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
    // This will create function for each instance
    // this.greet = function() {
    //     console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old.`);
    // }
}

// The correct way to add methods in constructor function's prototype
Person.prototype.greet = function () {
    console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old.`);
}

// Every instance refer to different place in memory
let person = new Person('Pesho', 22, 190);
let person2 = new Person('Gosho', 32, 170);

console.log(person);
console.log(person instanceof Person);

person.greet();

// Every instance's method refer to different place in memory
console.log(person.greet == person2.greet);