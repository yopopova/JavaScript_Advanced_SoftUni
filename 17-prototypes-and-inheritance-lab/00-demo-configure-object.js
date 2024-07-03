let person = {
    name: 'Pesho',
    age: 22,
    height: 190
}

// let clonedPerson = {...person}; // Shallow object copy
let clonedPerson = Object.assign({}, person); // Shallow object copy

// Object freeze
Object.freeze(person);

person.weight = 80;
person.name = 'Gosho';
console.log(person);

console.log(Object.getOwnPropertyDescriptors(person));


// Object seal
Object.seal(clonedPerson);
console.log(Object.getOwnPropertyDescriptors(clonedPerson));

clonedPerson.newProp = 'asds';
console.log(clonedPerson);