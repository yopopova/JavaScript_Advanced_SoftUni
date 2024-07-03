window.addEventListener('load', solve);

function solve() {
    const addButtonElement = document.getElementById('add');
    const modelInputElement = document.getElementById('model');
    const yearInputElement = document.getElementById('year');
    const descriptionInputElement = document.getElementById('description');
    const priceInputElement = document.getElementById('price');
    const furnitureListElement = document.getElementById('furniture-list');

    addButtonElement.addEventListener('click', (e) => {
        e.preventDefault();

        let model = modelInputElement.value;
        let description = descriptionInputElement.value;
        let year = Number(yearInputElement.value); // The value of 'input' is 'string', so we convert it to a number.
        let price = Number(priceInputElement.value); // The value of 'input' is 'string', so we convert it to a number.

        // Here we clear the fields, since above in variables we already took their values.
        modelInputElement.value = '';
        descriptionInputElement.value = '';
        yearInputElement.value = '';
        priceInputElement.value = '';

        if (!model || !description) {
            return;
            // ^ This is how we break the function if the 'model' and 'description' values ​​are not filled.
        }

        if (year <= 0 || price <= 0) {
            return;
            // ^ Thus we break the function if the values ​​of 'year' and 'price' are less than or equal to 0, i.e. are negative numbers.
        }

        let rowElement = document.createElement('tr');
        rowElement.classList.add('info'); // Another way to add an element class.

        let modelCellElement = document.createElement('td');
        modelCellElement.textContent = model;

        let priceCellElement = document.createElement('td');
        priceCellElement.textContent = price.toFixed(2);

        let actionsCellElement = document.createElement('td'); // The button cell we'll attach them to.

        let infoButtonElement = document.createElement('button');
        infoButtonElement.textContent = 'More Info';
        infoButtonElement.classList.add('moreBtn');

        let buyButtonElement = document.createElement('button');
        buyButtonElement.textContent = 'Buy it';
        buyButtonElement.classList.add('buyBtn');

        // Here we create the additional information that will be hidden/shown.
        let contentsRowElement = document.createElement('tr');
        contentsRowElement.classList.add('hide');
        contentsRowElement.style.display = 'none';

        let yearContentElement = document.createElement('td');
        yearContentElement.textContent = `Year: ${year}`;

        let descriptionContentElement = document.createElement('td');
        descriptionContentElement.setAttribute('colspan', 3); // 'colspan' spans 1 cell and tells it to be the width of 3 (in this case).
        descriptionContentElement.textContent = `Description: ${description}`;

        // Variable in which we will accumulate the final price.
        let totalPriceElement = document.querySelector('.total-price');

        infoButtonElement.addEventListener('click', (e) => {
            if (e.currentTarget.textContent == 'More Info') { // We check if the name of the button is 'More Info', if it is we execute the code.
                // ^ 'e.currentTarget' is still 1 we wrote 'infoButtonElement' because it's better to use it!!!
                // ^ 'currentTarget' is what the event is placed on, ie in this case 'infoButtonElement'.
                contentsRowElement.style.display = 'contents'; // Make the information visible here.
                e.currentTarget.textContent = 'Less Info';
            } else {
                contentsRowElement.style.display = 'none'; // The information should not be visible here.
                e.currentTarget.textContent = 'More Info'; // If the button name is NOT 'More Info', let it be.
            }
        });

        buyButtonElement.addEventListener('click', (e) => {
            let currentTotalPrice = Number(totalPriceElement.textContent);
            let totalPrice = currentTotalPrice + price;
            totalPriceElement.textContent = totalPrice.toFixed(2);

            rowElement.remove(); // Rub the main element.
            contentsRowElement.remove(); // Delete the hidden information as well!!!
        });

        // We attach the two buttons to the cell.
        actionsCellElement.appendChild(infoButtonElement);
        actionsCellElement.appendChild(buyButtonElement);

        // We bind the three 'td' to 'rowElement'.
        rowElement.appendChild(modelCellElement);
        rowElement.appendChild(priceCellElement);
        rowElement.appendChild(actionsCellElement);

        contentsRowElement.appendChild(yearContentElement);
        contentsRowElement.appendChild(descriptionContentElement);

        // We attach them to the parent element.
        furnitureListElement.appendChild(rowElement);
        furnitureListElement.appendChild(contentsRowElement);
    });
}
