function sameNumbers(input) {
    let inputNumber = input.toString();
    let inputNumberL = inputNumber.length;

    let digitToCompare = Number(inputNumber[0]);

    let isSame = true;
    let sumOfDigits = 0;

    for (let i = 0; i < inputNumberL; i++) {
        let currentDigit = Number(inputNumber[i]);
        sumOfDigits += currentDigit;

        if (currentDigit !== digitToCompare) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sumOfDigits);
}

sameNumbers(2222222);
sameNumbers(1234);