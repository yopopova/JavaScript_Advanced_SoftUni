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