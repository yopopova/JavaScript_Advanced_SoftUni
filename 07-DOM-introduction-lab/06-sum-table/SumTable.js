function sumTable() {
    let costElements = document.querySelectorAll('tr td:nth-of-type(2)');
    // ^ So we take every second 'td'.

    let sum = Array.from(costElements).reduce((acc, el) => {
        let currentValue = Number(el.textContent) || 0;
        // ^ Return the content of the HTML element to me and convert it to a number. If there is no content, return null, so we insure it doesn't return 'NaN'.

        return acc + currentValue;
    }, 0);

    let resultEl = document.getElementById('sum');
    resultEl.textContent = sum;
}