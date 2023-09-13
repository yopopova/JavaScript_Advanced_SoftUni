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