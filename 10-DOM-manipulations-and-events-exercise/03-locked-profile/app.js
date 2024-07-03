function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
    .forEach(button => button.addEventListener('click', onClick));
    // ^ We take the buttons and with 'forEach' add an event to them.

    function onClick(ev) {
        let profile = ev.target.parentElement;
        // ^ Returns us a 'div' with class 'profile' a.k.a the parent.

        let isActive = profile.querySelector('input[value="unlock"]').checked;
        // ^ We grab the button and check if it is checked or not.
        // ^ Returns us a boolean expression, checking if the button is checked.

        if (isActive) {
            let info = Array.from(profile.querySelectorAll('div'))
                .find(p => p.id.includes('HiddenFields'));
            // ^ Get the hidden information.

            if (ev.target.textContent === 'Show more') {
                // ^ We check what is written on the hoe ie. its content.
                ev.target.textContent = 'Hide it';
                info.style.display = 'block';
            } else {
                ev.target.textContent = 'Show more';
                info.style.display = 'none';
            }
        }
    }
}