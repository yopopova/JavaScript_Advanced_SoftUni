function addItem() {
    let itemsElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');

    let liElement = document.createElement('li'); // Create a 'li' element.
    liElement.textContent = inputElement.value; // We give it content by assigning it the value of 'inputElement'.

    inputElement.value = ''; // Thus we reset the field in which we enter the elements. We clear it after entering the content.

    let deleteElement = document.createElement('a'); // // Create an 'a' element.
    deleteElement.href = '#'; // Tell it what its 'href' attribute should be equal to.
    deleteElement.textContent = '[Delete]'; // Attach content to it a.k.a what to write.

    deleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove();
        // ^ We take the specific element that was pressed, then we take its parent and remove it entirely.
    });

    liElement.appendChild(deleteElement); // Attach 'deleteElement' to 'li'.
    itemsElement.appendChild(liElement); // Finally, to 'ul' we attach 'liElement'.
}