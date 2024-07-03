function calorieObject(arr) {
    let objCals = {};
    let arrL = arr.length;

    for (let i = 0; i < arrL; i += 2) {
        let productName = arr[i];
        let calories = Number(arr[i + 1]);
        objCals[productName] = calories;
    }

    console.log(objCals);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);