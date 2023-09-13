function solve(input) {
    let brands = new Map();

    while (input.length > 0) {
        let [brand, model, quantity] = input.shift().split(' | ');
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