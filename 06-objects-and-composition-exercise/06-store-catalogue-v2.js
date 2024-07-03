function storeCatalogue(array) {
    let result = array.sort((a, b) => a.localeCompare(b));
    let firstChar = '';
    let resultL = result.length;
    let obj = {};

    for (let i = 0; i < resultL; i++) {
        let [product, price] = result[i].split(' : ');
        obj[product] = price;

        if (result[i][0] !== firstChar) {
            console.log(result[i][0]);
        }

        console.log(`  ${product}: ${obj[product]}`);
        firstChar = result[i][0];
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);