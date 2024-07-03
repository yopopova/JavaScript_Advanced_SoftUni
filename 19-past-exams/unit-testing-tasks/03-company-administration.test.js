const companyAdministration = require('./03-company-administration.js');
const { assert } = require('chai');

describe('Test the functionality of companyAdministration object', () => {

    // hiringEmployee
    describe('Test hiringEmployee method', () => {

        it('Should throw an error, if the position input is different from programmer', () => {
            assert.throw(() => { companyAdministration.hiringEmployee('Ivan', 'Web Designer', 5), 'We are not looking for workers for this position.'; });
        });

        it('Should return special message, if the position is programmer and yearsExperience is greater than 3 years', () => {
            assert.equal(companyAdministration.hiringEmployee('Ivan', 'Programmer', 5), 'Ivan was successfully hired for the position Programmer.');
        });

        it('Should return special message, if the position is programmer and yearsExperience is equal to 3 years', () => {
            assert.equal(companyAdministration.hiringEmployee('Ivan', 'Programmer', 3), 'Ivan was successfully hired for the position Programmer.');
        });

        it('Should return special message, if the position is programmer and yearsExperience is lower than 3 years', () => {
            assert.equal(companyAdministration.hiringEmployee('Ivan', 'Programmer', 1), 'Ivan is not approved for this position.');
        });
    });


    // calculateSalary
    describe('Test calculateSalary method', () => {

        // Incorrect tests
        it('Should throw an error, if hours is string', () => {
            assert.throw(() => { companyAdministration.calculateSalary('flower'), 'Invalid hours'; });
        });

        it('Should throw an error, if hours is negative number', () => {
            assert.throw(() => { companyAdministration.calculateSalary(-5), 'Invalid hours'; });
        });


        // Correct tests
        it('Should return totalAmount, if the input is positive number between 0 and 160', () => {
            assert.equal(companyAdministration.calculateSalary(10), 150);
        });

        it('Should return totalAmount, if the input is positive number and is equal 160', () => {
            assert.equal(companyAdministration.calculateSalary(160), 2400);
        });

        it('Should return totalAmount + 1000, if the input is positive number greater than 160', () => {
            assert.equal(companyAdministration.calculateSalary(200), 4000);
        });
    });


    // firedEmployee
    describe('Test firedEmployee method', () => {

        // Incorrect tests
        it('Should throw an error, if employees is string', () => {
            assert.throw(() => { companyAdministration.firedEmployee('nice', 1), 'Invalid input'; });
        });

        // it('Should throw an error, if employees is empty array', () => {
        //     assert.throw(() => {companyAdministration.firedEmployee([], 0), 'Invalid input';});
        // }); // ???

        it('Should throw an error, if index is string', () => {
            assert.throw(() => { companyAdministration.firedEmployee(['Dimitar', 'Irina', 'Maria'], 'Hi!'), 'Invalid input'; });
        });

        it('Should throw an error, if index is lower than 0', () => {
            assert.throw(() => { companyAdministration.firedEmployee(['Dimitar', 'Irina', 'Maria'], -11), 'Invalid input'; });
        });

        it('Should throw an error, if index is bigger than array length', () => {
            assert.throw(() => { companyAdministration.firedEmployee(['Dimitar', 'Irina', 'Maria'], 11), 'Invalid input'; });
        });

        it('Should throw an error, if index is equeal to array length', () => {
            assert.throw(() => { companyAdministration.firedEmployee(['Dimitar', 'Irina', 'Maria'], 3), 'Invalid input'; });
        });


        // Correct test
        it('Should return the new names, if the employees and index inputs are correct', () => {
            assert.equal(companyAdministration.firedEmployee(['Dimitar', 'Irina', 'Maria'], 1), 'Dimitar, Maria');
        });
    });
});

// .\node_modules\.bin\mocha .\03-company-administration.test.js