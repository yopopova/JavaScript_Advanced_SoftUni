function cityRecord(name, population, treasury) {

    let record = { name, population, treasury };

    return record;
}

let result = cityRecord('Tortuga', 7000, 15000);
// let result = cityRecord('Santo Domingo', 12000, 23500);

console.log(result);