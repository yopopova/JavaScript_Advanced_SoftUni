function heroicInventory(arr) {
    let result = [];

    for (let line of arr) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);

        items = items ? items.split(', ') : [];
        // ^ To not return 'undefined' if the character elements are missing, but simply return an empty array.

        result.push({ name, level, items });
    }

    console.log(JSON.stringify(result));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);

// heroicInventory(['Isacc / 25 / Apple']);
// heroicInventory(['Isacc / 25']);