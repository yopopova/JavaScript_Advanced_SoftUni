function addItem() {
    let newText = document.getElementById('newItemText').value;
    let newValue = document.getElementById('newItemValue').value;
    // ^ We get the values ​​of the 2 fields.

    let option = document.createElement('option');
    option.text = newText;
    option.value = newValue;
    // ^ Since the elements in 'html' are objects, we add their values ​​like this.

    let menu = document.getElementById('menu');

    if (newText !== '' && newValue !== '') {
        // ^ If anything is entered in the fields, we hook 'option' to the 'drop-down' menu.
        // ^ This prevents inserting empty values ​​into the 'drop-down' menu, which stand as white boxes.
        menu.appendChild(option);
    }

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
    // ^ Finally we clear the 'text' and 'value' fields.
}