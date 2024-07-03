function solve(input) {
    let brands = new Map();

    while (input.length > 0) {
        let [brand, model, quantity] = input.shift().split(' | ');
        // ^ Here we use 'shift()' because we have 'while'.
        let models = new Map();

        if (!brands.has(brand)) {
            models.set(model, Number(quantity));
            brands.set(brand, model);
        } else {
            let models = brands.get(brand);

            if (!models.has(models)) {
                models.set(model, Number(quantity));
            } else {
                let currentQuantity = brands.get(brand);
                models.set(model, currentQuantity + Number(quantity));
            }

            brands.set(brand, models);
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);