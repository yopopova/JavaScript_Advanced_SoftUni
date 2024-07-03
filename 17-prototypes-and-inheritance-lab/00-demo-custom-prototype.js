let cat = {
    name: 'Generic Cat Name',
    makeSound() {
        console.log(`${this.name} - meow...`);
    }
}

let navcho = Object.create(cat);

// Like this we copy the 'cat' object properties. Shallow copy
// let navcho2 = Object.assign({}, cat);

navcho.name = 'Navuhodonosor';
navcho.makeSound = function() {console.log(`${this.name} - bau bau...`);}
console.log(navcho);
navcho.makeSound();
console.log(navcho.name);

console.log(cat == navcho.__proto__);

// Prototype chain
// console.log(cat == navcho.__proto__.__proto__);

// Check if property is its own
console.log(navcho.hasOwnProperty('name'));
console.log(navcho.hasOwnProperty('makeSound'));

// For-in includes prototype's properties
console.log('---------for-in iteration---------');
for (const key in navcho) {
    console.log(key);
}

for (const key in navcho) {
    // if (Object.hasOwnProperty.call(navcho, key)) 
    if (Object.hasOwnProperty(key)) {
        const element = navcho[key];
        console.log(element);
    }
}