function storeCatalogue(array) {
    let result = array.sort((a, b) => a.localeCompare(b));
    let current = [];
    let firstChar = '';
    let resultL = result.length;

    for (let i = 0; i < resultL; i++) {
        current = result[i].split(' : ');

        if (result[i][0] !== firstChar) {
            console.log(result[i][0]);
        }

        console.log(`  ${current[0]}: ${current[1]}`);
        firstChar = result[i][0];
    }
}