function validate() {
    let inputElement = document.getElementById('email');
    let regEx = /^[a-z]+@[a-z]+\.[a-z]+$/;

    inputElement.addEventListener('change', checkEmail);

    function checkEmail(e) {
        if (regEx.test(e.target.value)) {
            e.target.removeAttribute('class');
            return;
        }

        e.target.setAttribute('class', 'error');
    }
}