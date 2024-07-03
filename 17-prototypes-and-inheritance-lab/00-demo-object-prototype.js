let person = {
    name: 'Pesho',
    age: 22,
    height: 190
}

// The correct way to get object prototype
let personPrototype = Object.getPrototypeOf(person);
personPrototype.weight = 80;

console.log(person);
console.log(person.weight);

// Different object with different references
console.log(personPrototype == person);

console.log(personPrototype == person.__proto__);