function attachEventsListeners() {
    let [inputField, outputField] = document.querySelectorAll('input[type="text"]');
    // ^ Here we take the two fields - one in which we will write what we want to convert, and in the other the result of the conversion.

    let fromOption = document.getElementById('inputUnits');
    let toOption = document.getElementById('outputUnits');
    // ^ We take the 2 units fields.

    let convertBtn = document.getElementById('convert');
    // We take the button and add an event to it.
    convertBtn.addEventListener('click', operation);

    function operation() {
        let convert = Number(inputField.value);
        // ^ We take the value of 'inputField' but convert it to a number because all that comes from 'input' is a 'string'.

        let result = 0;

        // We choose 1 measurement unit and move along it. In this case, we have chosen meters.

        switch (fromOption.value) {
            case 'km':
                convert *= 1000;
                break;
            case 'm':
                convert = convert;
                break;
            case 'cm':
                convert *= 0.01;
                break;
            case 'mm':
                convert *= 0.001;
                break;
            case 'mi':
                convert *= 1609.34;
                break;
            case 'yrd':
                convert *= 0.9144;
                break;
            case 'ft':
                convert *= 0.3048;
                break;
            case 'in':
                convert *= 0.0254;
                break;
        }

        switch (toOption.value) {
            case 'km':
                result = convert / 1000;
                break;
            case 'm':
                result = convert;
                break;
            case 'cm':
                result = convert / 0.01;
                break;
            case 'mm':
                result = convert / 0.001;
                break;
            case 'mi':
                result = convert / 1609.34;
                break;
            case 'yrd':
                result = convert / 0.9144;
                break;
            case 'ft':
                result = convert / 0.3048;
                break;
            case 'in':
                result = convert / 0.0254;
                break;
        }

        outputField.value = result;
    }
}