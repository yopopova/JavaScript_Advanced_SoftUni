function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    Object.defineProperty(this, 'fullName', {
        set: function (str) {
            let [fName, lName] = str.split(' ');

            if (fName !== undefined && lName !== undefined) {
                this.firstName = fName;
                this.lastName = lName;
            }
        },
        get: function () {
            return `${this.firstName} ${this.lastName}`;
        }
    });
}

// FIRST INPUT
let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla 

// SECOND INPUT
// let person = new Person("Albert", "Simpson");
// console.log(person.fullName); //Albert Simpson
// person.firstName = "Simon";
// console.log(person.fullName); //Simon Simpson
// person.fullName = "Peter";
// console.log(person.firstName);  // Simon
// console.log(person.lastName);  // Simpson