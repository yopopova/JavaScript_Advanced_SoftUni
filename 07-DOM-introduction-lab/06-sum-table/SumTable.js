function sumTable() {
    let costElements = document.querySelectorAll('tr td:nth-of-type(2)');
    // ^ Така взимаме всяко второ 'td'.

    let sum = Array.from(costElements).reduce((acc, el) => {
        let currentValue = Number(el.textContent) || 0;
        // ^ Върни ми съдържанието на HTML елемента и го обърни в число. Ако няма съдържание, върни нула, така се застраховаме да не върне 'NaN'.

        return acc + currentValue;
    }, 0);

    let resultEl = document.getElementById('sum');
    resultEl.textContent = sum;
}