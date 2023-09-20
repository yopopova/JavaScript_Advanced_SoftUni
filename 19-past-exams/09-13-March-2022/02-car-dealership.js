class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model !== '' && Number.isInteger(horsepower) && price >= 0 && mileage >= 0) {
            let newCar = {
                model: model,
                horsepower: horsepower,
                price: price,
                mileage: mileage
            }

            this.availableCars.push(newCar);
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
        } else {
            throw new Error('Invalid input!');
        }
    }

    sellCar(model, desiredMileage) {
        let currCar = this.availableCars.find(x => x.model === model);

        if (this.availableCars.some(x => x.model === model)) {

            if (currCar.mileage > desiredMileage) {
                let diff = Math.abs(currCar.mileage - desiredMileage);

                if (diff <= 40000) {
                    let currCarPrice = currCar.price;
                    currCarPrice -= currCarPrice * 0.05;
                    currCar.price = currCarPrice;
                } else {
                    let carPriceNow = currCar.price;
                    carPriceNow -= carPriceNow * 0.1;
                    currCar.price = carPriceNow;
                }

                let soldCar = {
                    model: currCar.model,
                    horsepower: currCar.horsepower,
                    soldPrice: currCar.price
                }

                this.soldCars.push(soldCar);

                let index = this.availableCars.indexOf(currCar);
                this.availableCars.splice(index, 1);

                let newSoldCar = this.soldCars.find(x => x.model === model);
                let soldCarPrice = newSoldCar.soldPrice;
                this.totalIncome += soldCarPrice;

                return `${model} was sold for ${soldCarPrice.toFixed(2)}$`;

            } else {
                let priceOfCar = currCar.price;
                this.totalIncome += priceOfCar;

                return `${model} was sold for ${priceOfCar.toFixed(2)}$`;
            }

        } else {
            throw new Error(`${model} was not found!`);
        }
    }

    currentCar() {
        if (this.availableCars.length === 0) {
            return 'There are no available cars';
        } else {
            let result = [];
            let firstLine = '-Available cars:';
            result.push(firstLine);

            this.availableCars.forEach(x => {
                let miles = x.mileage;
                let carPrice = x.price;

                result.push(`---${x.model} - ${x.horsepower} HP - ${miles.toFixed(2)} km - ${carPrice.toFixed(2)}$`);
            });

            return result.join('\n');
        }
    }

    salesReport(criteria) {
        if (criteria === 'horsepower') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);

        } else if (criteria === 'model') {
            this.soldCars.sort((a, b) => a.horsepower.localeCompare(b.horsepower));
        } else {
            throw new Error('Invalid criteria!');
        }

        let result = [];
        let totalPrice = this.totalIncome;
        let firstLine = `-${this.name} has a total income of ${totalPrice.toFixed(2)}$`;
        result.push(firstLine);

        let carsCount = this.soldCars.length;
        let secondLine = `-${carsCount} cars sold:`;
        result.push(secondLine);

        this.soldCars.forEach(x => {
            let carPrice = x.price;
            result.push(`---${x.model} - ${x.horsepower} HP - ${carPrice.toFixed(2)}$`);
        });

        return result.join('\n');
    }
}