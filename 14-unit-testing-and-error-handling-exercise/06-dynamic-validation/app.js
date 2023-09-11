function validate() {
    let inputElement = document.getElementById('email');
    inputElement.addEventListener('change', onChange);

    function onChange(e) {
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/gm;

        if (pattern.test(e.target.value)) {
            e.target.removeAttribute('class');
        } else {
            e.target.setAttribute('class', 'error');
        }
    }
}