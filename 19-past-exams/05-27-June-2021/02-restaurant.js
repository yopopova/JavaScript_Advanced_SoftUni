class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        for (let line of products) {
            let [productName, productQuantity, productTotalPrice] = line.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (productTotalPrice <= this.budgetMoney) {
                if (!this.stockProducts[productName]) {
                    this.stockProducts[productName] = productQuantity;
                    this.budgetMoney -= productTotalPrice;
                    this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
                } else {
                    this.stockProducts[productName] += productQuantity;
                    this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
                }
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }

        return this.history.join('\n');
    }

    addToMenu(nameOfTheMeal, neededProducts, mealPrice) {
        mealPrice = Number(mealPrice);

        let meal = {
            mealName: nameOfTheMeal,
            products: [],
            price: mealPrice
        }

        for (let line of neededProducts) {
            let [product, quantity] = line.split(' ');

            let mealProduct = {
                productName: product,
                productQuantity: quantity
            }

            meal.products.push(mealProduct);
        }

        if (!this.menu[meal.mealName]) {
            this.menu[meal.mealName] = meal;
            let mealsCount = Object.keys(this.menu).length;

            return mealsCount === 1 ? `Great idea! Now with the ${meal.mealName} we have 1 meal in the menu, other ideas?` : `Great idea! Now with the ${meal.mealName} we have ${mealsCount} meals in the menu, other ideas?`;
        } else {
            return `The ${meal.mealName} is already in the our menu, try something different.`;
        }
    }

    showTheMenu() {
        let mealsMenuCount = Object.keys(this.menu).length;
        let allMeals = [];

        if (mealsMenuCount > 0) {
            for (let key in this.menu) {
                let currKey = this.menu[key];
                allMeals.push(`${currKey.mealName} - $ ${currKey.price}`);
            }

            return allMeals.join('\n');
        } else {
            return `Our menu is not ready yet, please come later...`;
        }
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            let price = this.menu[meal].price;
            let neededProducts = this.menu[meal].products;
            let doWeHaveAllProducts = true;

            for (const product of neededProducts) {
                let name = product.productName;
                let quantity = product.productQuantity;

                if (this.stockProducts[name] === undefined || this.stockProducts[name] < quantity) {
                    doWeHaveAllProducts = false;
                    break;
                } else {
                    this.stockProducts[name] -= quantity;
                    this.budgetMoney += price;
                }
            }

            if (!doWeHaveAllProducts) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            } else {
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`;
            }
        }
    }
}