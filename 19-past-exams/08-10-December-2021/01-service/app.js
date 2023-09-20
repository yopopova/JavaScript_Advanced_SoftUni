window.addEventListener('load', solve);

function solve() {
    let productTypeElement = document.getElementById('type-product');
    let problemDescriptionElement = document.getElementById('description');
    let clientNameElement = document.getElementById('client-name');
    let clientPhoneElement = document.getElementById('client-phone');

    let sendFormButton = document.querySelector('button[type="submit"]');
    let clearBtn = document.querySelector('button.clear-btn');

    let receivedOrders = document.getElementById('received-orders');
    let completedOrders = document.getElementById('completed-orders');

    sendFormButton.addEventListener('click', sendForm);

    function sendForm(e) {
        e.preventDefault();

        if (problemDescriptionElement.value && clientNameElement.value && clientPhoneElement.value) {

            let mainDiv = document.createElement('div');
            mainDiv.setAttribute('class', 'container');

            let h2El = document.createElement('h2');
            h2El.textContent = `Product type for repair: ${productTypeElement.value}`;
            mainDiv.appendChild(h2El);

            let h3El = document.createElement('h3');
            h3El.textContent = `Client information: ${clientNameElement.value}, ${clientPhoneElement.value}`;
            mainDiv.appendChild(h3El);

            let h4El = document.createElement('h4');
            h4El.textContent = `Description of the problem: ${problemDescriptionElement.value}`;
            mainDiv.appendChild(h4El);

            let startBtn = document.createElement('button');
            startBtn.className = 'start-btn';
            startBtn.textContent = 'Start repair';
            startBtn.addEventListener('click', startButton);
            mainDiv.appendChild(startBtn);

            let endBtn = document.createElement('button');
            endBtn.className = 'finish-btn';
            endBtn.disabled = true;
            endBtn.textContent = 'Finish repair';
            endBtn.addEventListener('click', endButton);
            mainDiv.appendChild(endBtn);

            function startButton() {
                startBtn.disabled = true;
                endBtn.disabled = false;
            }

            function endButton() {
                mainDiv.removeChild(startBtn);
                mainDiv.removeChild(endBtn);
                completedOrders.appendChild(mainDiv);
            }

            receivedOrders.appendChild(mainDiv);

            clientNameElement.value = '';
            clientPhoneElement.value = '';
            problemDescriptionElement.value = '';
        }
    }

    clearBtn.addEventListener('click', clearOrders);

    function clearOrders() {
        let divOrders = document.querySelector('#completed-orders > .container').remove();
    }
}