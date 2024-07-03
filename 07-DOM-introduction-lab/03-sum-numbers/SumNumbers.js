function calc() {
    let firstNumEl = document.getElementById('num1'); // Here the field value is a string, because of the field type.
    let secondNumEl = document.getElementById('num2'); // Here the field value is a string, because of the field type.

    let firstNum = Number(firstNumEl.value); // Here we take the value that will be entered into the field and turn it into a number.
    let secondNum = Number(secondNumEl.value); // Here we take the value that will be entered into the field and turn it into a number.

    let sum = firstNum + secondNum;
    let resultEl = document.getElementById('sum');
    resultEl.value = sum; // We use 'value' for the 'self-closing' tags.
}