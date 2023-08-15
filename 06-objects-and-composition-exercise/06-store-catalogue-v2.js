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