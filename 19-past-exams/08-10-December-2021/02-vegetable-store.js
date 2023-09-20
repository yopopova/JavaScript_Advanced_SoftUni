class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {

        for (let line of vegetables) {
            let [productType, productQuantity, productPrice] = line.split(' ');
            productQuantity = Number(productQuantity);
            productPrice = Number(productPrice);

            if (this.availableProducts.some(x => x.type === productType)) {
                let currObj = this.availableProducts.find(x => x.type === productType);

                let newQuantity = currObj.quantity + productQuantity;
                currObj.quantity = newQuantity;

                if (currObj.price < productPrice) {
                    currObj.price = productPrice;
                }

            } else {
                let vegetable = {
                    type: productType,
                    quantity: productQuantity,
                    price: productPrice
                }

                this.availableProducts.push(vegetable);
            }
        }

        let productsArray = [];
        this.availableProducts.forEach(x => {
            productsArray.push(x.type);
        });

        return `Successfully added ${productsArray.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        for (let line of selectedProducts) {
            let [typeProduct, quantityProduct] = line.split(' ');
            quantityProduct = Number(quantityProduct);

            if (!this.availableProducts.some(x => x.type === typeProduct)) {
                throw new Error(`${typeProduct} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            let currObject = this.availableProducts.find(x => x.type === typeProduct);

            if (currObject.quantity < quantityProduct) {
                throw new Error(`The quantity ${quantityProduct} for the vegetable ${typeProduct} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            let pricePerKg = currObject.price;
            let finalProductPrice = pricePerKg * quantityProduct;
            totalPrice += finalProductPrice;

            let quantityLeft = currObject.quantity - quantityProduct;
            currObject.quantity = quantityLeft;
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {

        if (!this.availableProducts.some(x => x.type === type)) {
            throw new Error(`${type} is not available in the store.`);
        }

        let currProduct = this.availableProducts.find(x => x.type === type);

        if (quantity >= currProduct.quantity) {
            currProduct.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }

        currProduct.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`;
    }

    revision() {
        let result = [];
        let firstLine = 'Available vegetables:';
        result.push(firstLine);

        this.availableProducts
            .sort((a, b) => a.price - b.price)
            .forEach(x => {
                result.push(`${x.type}-${x.quantity}-$${x.price}`);
            })

        let lastLine = `The owner of the store is ${this.owner}, and the location is ${this.location}.`;
        result.push(lastLine);

        return result.join('\n');
    }
}