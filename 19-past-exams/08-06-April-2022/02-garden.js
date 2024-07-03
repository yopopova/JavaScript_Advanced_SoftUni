class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        } else {
            let newPlant = {
                plantName: plantName,
                spaceRequired: spaceRequired,
                ripe: false,
                quantity: 0
            }

            this.plants.push(newPlant);
            this.spaceAvailable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`;
        }
    }

    ripenPlant(plantName, quantity) {
        let currentPlant = this.plants.find(x => x.plantName === plantName);

        if (this.plants.some(x => x.plantName === plantName)) {

            if (currentPlant.ripe === true) {
                throw new Error(`The ${plantName} is already ripe.`);
            } else {
                if (quantity <= 0) {
                    throw new Error('The quantity cannot be zero or negative.');
                } else if (quantity === 1) {
                    currentPlant.ripe = true;
                    currentPlant.quantity += quantity;
                    return `${quantity} ${plantName} has successfully ripened.`;
                } else {
                    currentPlant.ripe = true;
                    currentPlant.quantity += quantity;
                    return `${quantity} ${plantName}s have successfully ripened.`;
                }
            }

        } else {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
    }

    harvestPlant(plantName) {
        let currentPlant = this.plants.find(x => x.plantName === plantName);

        if (this.plants.some(x => x.plantName === plantName)) {

            if (currentPlant.ripe === false) {
                throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
            } else {
                let index = this.plants.indexOf(currentPlant);
                let removedPlant = this.plants.splice(index, 1);

                let harvestedPlant = {
                    plantName: plantName,
                    quantity: currentPlant.quantity
                }

                this.storage.push(harvestedPlant);
                this.spaceAvailable += currentPlant.spaceRequired;
                return `The ${plantName} has been successfully harvested.`;
            }

        } else {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
    }

    generateReport() {
        let result = [];

        let firstLine = `The garden has ${this.spaceAvailable} free space left.`;
        result.push(firstLine);

        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        let plantsArr = [];

        this.plants.forEach(x => {
            plantsArr.push(x.plantName);
        });

        let secondLine = 'Plants in the garden: ' + plantsArr.join(', ');
        result.push(secondLine);

        if (this.storage.length > 0) {
            let storagePlantsArr = [];

            this.storage.forEach(x => {
                storagePlantsArr.push(`${x.plantName} (${x.quantity})`);
            });

            let thirdLine = 'Plants in storage: ' + storagePlantsArr.join(', ');
            result.push(thirdLine);

        } else {
            console.log('Plants in storage: The storage is empty.');
        }

        return result.join('\n');
    }
}

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('raspberry'));

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());