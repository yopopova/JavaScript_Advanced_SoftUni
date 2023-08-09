function townPopulation(input) {
    let towns = {};

    for (let info of input) {
        let [town, population] = info.split(' <-> ');
        population = Number(population);

        if (!towns[town]) {
            towns[town] = 0;
        }

        towns[town] += population;
    }

    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);