function solution() {
    let inputElement = document.querySelector('input');
    let addGiftBtn = document.querySelector('button');

    let listOfGifts = document.querySelector('.container > section:nth-of-type(2) ul');
    let sentGifts = document.querySelector('.container > section:nth-of-type(3) ul');
    let discardedGifts = document.querySelector('.container > section:nth-of-type(4) ul');

    addGiftBtn.addEventListener('click', addGift);

    function addGift() {
        let liElement = document.createElement('li');
        liElement.setAttribute('class', 'gift');
        liElement.textContent = inputElement.value;

        let sendBth = document.createElement('button');
        sendBth.setAttribute('id', 'sendButton');
        sendBth.textContent = 'Send';

        let discardBtn = document.createElement('button');
        discardBtn.setAttribute('id', 'discardButton');
        discardBtn.textContent = 'Discard';

        liElement.appendChild(sendBth);
        liElement.appendChild(discardBtn);
        listOfGifts.appendChild(liElement);

        let arr = Array.from(listOfGifts.querySelectorAll('li'))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(x => listOfGifts.appendChild(x));

        inputElement.value = '';

        [sendBth, discardBtn].forEach(bth => bth.addEventListener('click', buttons));
    }

    function buttons(btn) {
        let item = btn.target.parentNode;
        item.lastElementChild.remove();
        item.lastElementChild.remove();

        if (btn.target.textContent === 'Send') {
            sentGifts.appendChild(item);
        } else if (btn.target.textContent === 'Discard') {
            discardedGifts.appendChild(item);
        }
    }
}