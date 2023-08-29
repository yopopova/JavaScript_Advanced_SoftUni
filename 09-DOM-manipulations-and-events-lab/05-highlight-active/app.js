function focused() {
    let mainDivElements = document.getElementsByTagName("div")[0];

    let arrInputElements = Array.from(mainDivElements.getElementsByTagName('input'));

    arrInputElements.forEach(el => el.addEventListener('focus', focusedEl));
    arrInputElements.forEach(el => el.addEventListener('blur', blurredEl));

    function focusedEl(e) {
        let parentDiv = e.target.parentNode;
        parentDiv.setAttribute('class', 'focused');
    }

    function blurredEl(e) {
        let parentDiv = e.target.parentNode;
        parentDiv.removeAttribute('class', 'focused');
    }
}