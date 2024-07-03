function solve() {
    let recipientInputElement = document.getElementById('recipientName');
    let titleInputElement = document.getElementById('title');
    let textAreaInputElement = document.getElementById('message');

    let ulAddListElement = document.getElementById('list');
    let ulSendListElement = document.querySelector('ul.sent-list');
    let ulDeleteListElement = document.querySelector('ul.delete-list');

    let addBtnElement = document.getElementById('add');
    let resetBtnElement = document.getElementById('reset');

    addBtnElement.addEventListener('click', addEmail);
    resetBtnElement.addEventListener('click', clearInputFields);

    function addEmail(e) {
        e.preventDefault();

        let recipientValue = recipientInputElement.value;
        let titleValue = titleInputElement.value;
        let textAreaValue = textAreaInputElement.value;

        if (recipientValue && titleValue && textAreaValue) {
            let mainLiElemenet = document.createElement('li');

            let titleElement = document.createElement('h4');
            titleElement.textContent = `Title: ${titleInputElement.value}`;
            mainLiElemenet.appendChild(titleElement);

            let recipientElement = document.createElement('h4');
            recipientElement.textContent = `Recipient Name: ${recipientInputElement.value}`;
            mainLiElemenet.appendChild(recipientElement);

            let textAreaElement = document.createElement('span');
            textAreaElement.textContent = textAreaInputElement.value;
            mainLiElemenet.appendChild(textAreaElement);

            // div with buttons inside
            let divButtonsElement = document.createElement('div');
            divButtonsElement.setAttribute('class', 'list-action');

            let sendBtn = document.createElement('button');
            sendBtn.setAttribute('type', 'submit');
            sendBtn.setAttribute('id', 'send');
            sendBtn.textContent = 'Send';
            sendBtn.addEventListener('click', sendInfo);
            divButtonsElement.appendChild(sendBtn);

            let deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('type', 'submit');
            deleteBtn.setAttribute('id', 'delete');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', deleteInfo);
            divButtonsElement.appendChild(deleteBtn);

            mainLiElemenet.appendChild(divButtonsElement);
            ulAddListElement.appendChild(mainLiElemenet);

            // Send button functionality
            function sendInfo(e) {
                let liElement = document.createElement('li');

                let emailSpan = document.createElement('span');
                emailSpan.textContent = `To: ${recipientValue}`;
                liElement.appendChild(emailSpan);

                let titleSpan = document.createElement('span');
                titleSpan.textContent = `Title: ${titleValue}`;
                liElement.appendChild(titleSpan);

                let divElement = document.createElement('div');
                divElement.setAttribute('class', 'btn');

                let delBtn = document.createElement('button');
                delBtn.setAttribute('type', 'submit');
                delBtn.setAttribute('class', 'delete');
                delBtn.textContent = 'Delete';
                delBtn.addEventListener('click', delInfo);
                divElement.appendChild(delBtn);

                function delInfo() {
                    liElement.removeChild(divElement);
                    ulDeleteListElement.appendChild(liElement);
                }

                liElement.appendChild(divElement);
                ulSendListElement.appendChild(liElement);

                // Remove the 'li' element from 'List of Mails'
                ulAddListElement.remove(e.currentTarget);
            }

            // Delete button functionality
            function deleteInfo(e) {
                let liEl = document.createElement('li');

                let emailEl = document.createElement('span');
                emailEl.textContent = `To: ${recipientValue}`;
                liEl.appendChild(emailEl);

                let titleEl = document.createElement('span');
                titleEl.textContent = `Title: ${titleValue}`;
                liEl.appendChild(titleEl);

                ulDeleteListElement.appendChild(liEl);

                // Remove the 'li' element from 'List of Mails'
                ulAddListElement.remove(e.currentTarget);
            }

            recipientInputElement.value = '';
            titleInputElement.value = '';
            textAreaInputElement.value = '';
        }
    }

    // Reset button functionality
    function clearInputFields(e) {
        e.preventDefault();

        recipientInputElement.value = '';
        titleInputElement.value = '';
        textAreaInputElement.value = '';
    }
}

solve()