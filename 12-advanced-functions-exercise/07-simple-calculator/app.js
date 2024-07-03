function calculator() {
    let input1;
    let input2;
    let result;

    function init(selector1, selector2, resultSelector) {
        input1 = document.querySelector(selector1);
        input2 = document.querySelector(selector2);
        result = document.querySelector(resultSelector);
        // ^ We fill these 3 variables with the data that comes in the call --> calculate.init('#num1', '#num2', '#result');
    }

    function add() {
        result.value = Number(input1.value) + Number(input2.value);
    }

    function subtract() {
        result.value = Number(input1.value) - Number(input2.value);
    }

    return obj = {
        init,
        add,
        subtract
    }
    // ^ We return an object with 3 methods, because in the 'html' file the function itself is like an object from which we call its methods:
    // ^ onclick="calculate.add()" and onclick="calculate.subtract()" on buttons
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');