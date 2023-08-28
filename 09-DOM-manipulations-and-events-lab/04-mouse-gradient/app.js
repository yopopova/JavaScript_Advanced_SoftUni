function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    function gradientMove(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        resultElement.textContent = power + "%";
    }

    function gradientOut(event) {
        resultElement.textContent = "";
    }

    gradientElement.addEventListener('mousemove', gradientMove);
    gradientElement.addEventListener('mouseout', gradientOut);
}