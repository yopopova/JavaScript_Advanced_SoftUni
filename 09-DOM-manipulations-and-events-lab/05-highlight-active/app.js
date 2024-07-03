function focused() {
    let mainDivElements = document.getElementsByTagName("div")[0];
    // ^ If we don't type [0] it will return us an HTML Collection of the big 'div' along with the smaller ones inside it,
    // ^ and we only want the small 'div's that are contained within the main 'div'.

    let arrInputElements = Array.from(mainDivElements.getElementsByTagName('input'));
    // ^ We make an array of the 'input' elements so we can iterate over them.

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