function calorieObject(arr) {
    let objCals = {};
    let arrL = arr.length;

    for (let i = 0; i < arrL; i++) {
        let el = arr[i];

        if (i % 2 === 0) {
            if (!objCals[el]) {
                objCals[el] = Number(arr[i + 1]);
            }
        }
    }

    console.log(objCals);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);