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