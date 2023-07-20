function fruits(fruit, weight, price) {
    let fruitType = fruit;
    let fruitWeight = weight;
    let pricePerKilo = price;

    let weightInKilos = fruitWeight / 1000;
    let money = weightInKilos * pricePerKilo;
    console.log(`I need $${money.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${fruitType}.`);
}