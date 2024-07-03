function extractText() {
    let ulElement = document.getElementById('items'); // Get the contents of the unordered sheet.
    let textareaElement = document.getElementById('result'); // Get the field where we need to put the content.
    textareaElement.textContent = ulElement.textContent; // We say the content of the field is = of the content of the unordered sheet.
}