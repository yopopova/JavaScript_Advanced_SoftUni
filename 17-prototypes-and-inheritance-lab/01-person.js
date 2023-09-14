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