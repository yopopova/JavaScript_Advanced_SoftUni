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
        let year = Number(yearInputElement.value);
        let price = Number(priceInputElement.value);

        modelInputElement.value = '';
        descriptionInputElement.value = '';
        yearInputElement.value = '';
        priceInputElement.value = '';

        if (!model || !description) {
            return;
        }

        if (year <= 0 || price <= 0) {
            return;
        }

        let rowElement = document.createElement('tr');
        rowElement.classList.add('info');

        let modelCellElement = document.createElement('td');
        modelCellElement.textContent = model;

        let priceCellElement = document.createElement('td');
        priceCellElement.textContent = price.toFixed(2);

        let actionsCellElement = document.createElement('td');

        let infoButtonElement = document.createElement('button');
        infoButtonElement.textContent = 'More Info';
        infoButtonElement.classList.add('moreBtn');

        let buyButtonElement = document.createElement('button');
        buyButtonElement.textContent = 'Buy it';
        buyButtonElement.classList.add('buyBtn');

        let contentsRowElement = document.createElement('tr');
        contentsRowElement.classList.add('hide');
        contentsRowElement.style.display = 'none';

        let yearContentElement = document.createElement('td');
        yearContentElement.textContent = `Year: ${year}`;

        let descriptionContentElement = document.createElement('td');
        descriptionContentElement.setAttribute('colspan', 3);
        descriptionContentElement.textContent = `Description: ${description}`;

        let totalPriceElement = document.querySelector('.total-price');

        infoButtonElement.addEventListener('click', (e) => {
            if (e.currentTarget.textContent == 'More Info') {
                contentsRowElement.style.display = 'contents';
                e.currentTarget.textContent = 'Less Info';
            } else {
                contentsRowElement.style.display = 'none';
                e.currentTarget.textContent = 'More Info';
            }
        });

        buyButtonElement.addEventListener('click', (e) => {
            let currentTotalPrice = Number(totalPriceElement.textContent);
            let totalPrice = currentTotalPrice + price;
            totalPriceElement.textContent = totalPrice.toFixed(2);

            rowElement.remove();
            contentsRowElement.remove();
        });

        actionsCellElement.appendChild(infoButtonElement);
        actionsCellElement.appendChild(buyButtonElement);

        rowElement.appendChild(modelCellElement);
        rowElement.appendChild(priceCellElement);
        rowElement.appendChild(actionsCellElement);

        contentsRowElement.appendChild(yearContentElement);
        contentsRowElement.appendChild(descriptionContentElement);

        furnitureListElement.appendChild(rowElement);
        furnitureListElement.appendChild(contentsRowElement);
    });
}