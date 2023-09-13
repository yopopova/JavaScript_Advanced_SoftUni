function solve(input) {
    let collection = new Map();

    for (let line of input) {
        let [brand, model, prodCars] = line.split(' | ');
        prodCars = Number(prodCars);

        if (!collection.has(brand)) {
            collection.set(brand, new Map());
        }

        if (collection.get(brand).has(model)) {
            collection.get(brand).set(model, collection.get(brand).get(model) + prodCars);
        } else {
            collection.get(brand).set(model, prodCars);
        }
    }

    for (let [brand, models] of collection.entries()) {
        console.log(brand);

        for (let [model, prodCars] of models.entries()) {
            console.log(`###${model} -> ${prodCars}`);
        }
    }
}