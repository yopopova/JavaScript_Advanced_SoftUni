let { Repository } = require("./02-repository.js");
let { expect } = require('chai');

describe('Test the functionality of Repository class', () => {

    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };

    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7) // This is 'date object'.
    };

    // ^ We export them from above so that we don't have to write them every time in the different 'describe'.

    let clonedEntity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };

    describe('Initialization test', () => {

        it('Should add props property on init', () => {
            let repository = new Repository(properties);

            expect(repository).to.have.property('props'); // Check for 'props' properties.

            expect(repository.props).to.deep.equal(properties);
            // After making sure that there is already a 'props' property (on the top line), with 'repository.props' we check if it = on 'properties'.
            // '.to.deep.equal()' goes into the object itself and checks each 1 of its properties individually.
        });

        it('Should have property data on init', () => {
            let repository = new Repository(properties);

            expect(repository).to.have.property('data'); // Check if there is a 'data' property.
            expect(typeof repository.data).is.equal('object'); // If there is a 'data' property, whether its type is object.
            expect(repository.data).instanceOf(Map); // Check if the given instance (object) is a 'Map'.
        });

        it('Should have nextId function on init', () => {
            let repository = new Repository(properties);

            expect(repository).to.have.property('nextId');
            expect(typeof repository.nextId).to.equal('function');
        });
    });

    describe('Add entity', () => {
        it('Should return incremented id if valid entity is added', () => {
            let repository = new Repository(properties);

            // Extended version of 55 lines.
            // let result = repository.add(entity); // Add entities.
            // expect(result).to.equal(0); // We write 0 here because the first value that will be returned is 0.

            expect(repository.add(entity)).to.equal(0); // We write 0 here because the first value that will be returned is 0.
            expect(repository.add(entity)).to.equal(1); // We write 1 because this is the incrementing 'id' for each entity we add.
        });

        it('Should store valid entity in data map', () => {
            let repository = new Repository(properties);
            repository.add(entity); // Add entities.

            expect(repository.data.get(0)).not.to.be.undefined; // We expect it not to be 'undefined'.
            // expect(repository.data.get(0)).to.deep.equal(entity); // Here we sample all entities.

            expect(repository.data.get(0)).to.have.property('name').that.equals('Pesho');
            expect(repository.data.get(0)).to.have.property('age').that.equals(22);
            expect(repository.data.get(0)).to.have.property('birthday');

            // Here we sample the properties individually.
            // expect(repository.data.get(0)).to.have.property('name').that.equals('Pesho');
            // The type of each property can also be checked here.
        });

        // '_validate' is a 'private method' and is NOT tested separately
        it('Should throw error if property is missing', () => {
            let entity = {
                name: "Pesho",
                age: 22
            };

            let repository = new Repository(properties);

            // On error, if we don't pass a function here, the check will explode.
            expect(() => repository.add(entity)).to.throw(Error, 'Property birthday is missing from the entity!');
            // We check if it throws an error and at the same time if it prints the particular message.
        });

        it('Should throw error if property has other type', () => {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: '1998-01-06T22:00:00.000Z' // This is no longer an object.
            };

            let repository = new Repository(properties);

            // On error, if we don't pass a function here, the check will explode.
            expect(() => repository.add(entity)).to.throw(Error, 'Property birthday is not of correct type!');
            // We check if it throws an error and at the same time if it prints the particular message.
        });
    });

    describe('Get count', () => {

        it('Should return number of added valid entities', () => {
            let repository = new Repository(properties);
            repository.add(entity);
            repository.add(entity);
            repository.add(entity);
            // ^ We add 3 entities.

            expect(repository.count).is.equal(3); // Here we expect the number of entities to be 3.
        });

        it('Should return zero if no added entities', () => {
            let repository = new Repository(properties);
            expect(repository.count).is.equal(0); // Here we check if nothing has been added.
        });
    });

    describe('Get Id', () => {
        it('Should return entity by id', () => {
            let repository = new Repository(properties);
            repository.add(entity);

            expect(repository.getId(0)).to.deep.equal(clonedEntity);
        });

        it('Should throw error when no id is found', () => {
            let repository = new Repository(properties);

            expect(() => repository.getId(1)).to.throw(Error, 'Entity with id: 1 does not exist!');
        });
    });

    describe('Update', () => {

        // Correct test
        it('Should update one valid entity with another', () => {
            let newEntity = {
                name: "Gosho",
                age: 32,
                birthday: new Date(1999, 0, 7)
            }

            let repo = new Repository(properties);
            repo.add(entity);

            repo.update(0, newEntity); // On 'id' 0 we update it with 'newEntity'.

            expect(repo.getId(0).name).to.equal('Gosho');
        });

        // Incorrect test
        it('Should throw error when updating entity on invalid id', () => {
            let repo = new Repository(properties);

            expect(() => repo.update(2, entity)).to.throw(Error, 'Entity with id: 2 does not exist!');
        });
    });

    describe('Delete', () => {

        // Correct test
        it('Should delete one valid entity', () => {
            let repo = new Repository(properties);

            repo.add(entity); // Add one.
            repo.add(entity); // Add another one.
            repo.del(0); // Delete one.

            expect(repo.count).to.equal(1);
        });

        // Incorrect test
        it('Should throw error when deleting entity on invalid id', () => {
            let repo = new Repository(properties);

            expect(() => repo.del(2)).to.throw(Error, 'Entity with id: 2 does not exist!');
        });
    });
});

// .\node_modules\.bin\mocha .\02-repository.test.js