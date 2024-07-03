function deleteByEmail() {
    let emailInputEl = document.querySelector('input[name="email"]');
    // ^ Attributes are enumerated with [].

    let emailCellElements = document.querySelectorAll('tr td:nth-of-type(2)'); // Returns a 'NodeList' that we can iterate through.
    // ^ In 'tr' we look for 'td' which is second in line with ':nth-of-type(2)'.

    let resultElement = document.getElementById('result');

    let emailElements = Array.from(emailCellElements); // The other option is to use a 'for of' loop.

    let targetElement = emailElements.find(x => x.textContent == emailInputEl.value);
    // ^ Find me the element with content that is the same as the value of 'emailInputEl'.

    // targetElement.parentNode.removeChild(targetElement);
    // ^ Via 'targetElement' we take its parent and tell it which child to delete via .removeChild(targetElement)
    // ^ But this way only deletes the specific child, not the parent.

    // ^ targetElement.remove() - new way to remove a child from a parent; won't delete it, just remove it from the tree, otherwise the element persists in memory

    if (targetElement) {
        // ^ If there is 'targetElement', if not it will return 'undefined'.
        targetElement.parentNode.remove();
        // ^ Deletes the entire row, deletes the parent itself + its child.
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
}