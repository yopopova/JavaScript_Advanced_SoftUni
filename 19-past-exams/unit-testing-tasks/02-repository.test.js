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
        birthday: new Date(1998, 0, 7)
    };

    let clonedEntity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };

    describe('Initialization test', () => {

        it('Should add props property on init', () => {
            let repository = new Repository(properties);

            expect(repository).to.have.property('props');

            expect(repository.props).to.deep.equal(properties);
        });

        it('Should have property data on init', () => {
            let repository = new Repository(properties);

            expect(repository).to.have.property('data');
            expect(typeof repository.data).is.equal('object');
            expect(repository.data).instanceOf(Map);
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

            expect(repository.add(entity)).to.equal(0);
            expect(repository.add(entity)).to.equal(1);
        });

        it('Should store valid entity in data map', () => {
            let repository = new Repository(properties);
            repository.add(entity);

            expect(repository.data.get(0)).not.to.be.undefined;
            expect(repository.data.get(0)).to.have.property('name').that.equals('Pesho');
            expect(repository.data.get(0)).to.have.property('age').that.equals(22);
            expect(repository.data.get(0)).to.have.property('birthday');
        });

        it('Should throw error if property is missing', () => {
            let entity = {
                name: "Pesho",
                age: 22
            };

            let repository = new Repository(properties);

            expect(() => repository.add(entity)).to.throw(Error, 'Property birthday is missing from the entity!');
        });

        it('Should throw error if property has other type', () => {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: '1998-01-06T22:00:00.000Z'
            };

            let repository = new Repository(properties);

            expect(() => repository.add(entity)).to.throw(Error, 'Property birthday is not of correct type!');
        });
    });

    describe('Get count', () => {

        it('Should return number of added valid entities', () => {
            let repository = new Repository(properties);
            repository.add(entity);
            repository.add(entity);
            repository.add(entity);

            expect(repository.count).is.equal(3);
        });

        it('Should return zero if no added entities', () => {
            let repository = new Repository(properties);
            expect(repository.count).is.equal(0);
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

            repo.update(0, newEntity);

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

            repo.add(entity);
            repo.add(entity);
            repo.del(0);

            expect(repo.count).to.equal(1);
        });

        // Incorrect test
        it('Should throw error when deleting entity on invalid id', () => {
            let repo = new Repository(properties);

            expect(() => repo.del(2)).to.throw(Error, 'Entity with id: 2 does not exist!');
        });
    });
});