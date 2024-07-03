function solve(input) {
    let brands = {};

    for (let item of input) {
        let [brand, model, quant] = item.split(' | ');
        quant = Number(quant);

        if (!brands.hasOwnProperty(brand)) {
            brands[brand] = {};
        }

        if (!brands[brand].hasOwnProperty(model)) {
            brands[brand][model] = 0;
        }

        brands[brand][model] += Number(quant);
    }

    for (let [brand, models] of Object.entries(brands)) {
        console.log(brand);

        for (let [model, quant] of Object.entries(models)) {
            console.log(`###${model} -> ${quant}`);
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