function fruits(fruit, weight, price) {
    let fruitType = fruit;
    let fruitWeight = weight;
    let pricePerKilo = price;

    let weightInKilos = fruitWeight / 1000;
    let money = weightInKilos * pricePerKilo;
    console.log(`I need $${money.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${fruitType}.`);
}

fruits('orange', 2500, 1.80);
fruits('apple', 1563, 2.35);