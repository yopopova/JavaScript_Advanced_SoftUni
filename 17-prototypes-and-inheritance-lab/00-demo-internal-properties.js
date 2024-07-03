// Object literal
let person = {
    name: 'Pesho',
    age: 20
}

// Like this we can see all the internal properties in object
console.log(Object.getOwnPropertyDescriptors(person));

// Like this we can see only one specific property's internal properties in object
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

// Modify internal property of existing property
Object.defineProperty(person, 'name', { enumerable: false });

// The property still exists in the object, but can't be iterrable
for (const key in person) {
    console.log(key);
}

Object.keys(person).forEach(el => console.log(el));

// Add new property and configure internal properties
Object.defineProperty(person, 'height', { value: 190, enumerable: false, writable: false });

// Hidden internal properties won't be shown in JSON
console.log(JSON.stringify(person));

// Cannot change value of non-writable property
person.height = 192; // Does not work
console.log(person.height);

// Define more than one property at once
Object.defineProperties(person, {
    name: {
        enumerable: true
    },
    age: {
        value: 22,
        configurable: false
    }
});

console.log(person);

// Add getter directly on the instance (the object)
Object.defineProperty(person, 'info', {
    get: function () {
        return `${this.name} - ${this.age}`;
    },
    set: function (value) {
        let [name, age] = value.split(' - ');

        this.name = name;
        this.age = Number(age);
    },
    enumerable: false,
    configurable: false
});

person.info = 'Gosho - 32';
console.log(person.info);
console.log(person);