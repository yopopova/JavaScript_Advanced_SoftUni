function solve() {
    let firstNameElement = document.getElementById('fname');
    let lastNameElement = document.getElementById('lname');
    let emailElement = document.getElementById('email');
    let birthDateElement = document.getElementById('birth');
    let positionElement = document.getElementById('position');
    let salaryElement = document.getElementById('salary');

    let tableBodyElement = document.getElementById('tbody');
    let sumElement = document.getElementById('sum');

    let hireBtn = document.getElementById('add-worker');
    hireBtn.addEventListener('click', hireWorker);

    function hireWorker(e) {
        e.preventDefault();

        let firstName = firstNameElement.value;
        let lastName = lastNameElement.value;
        let email = emailElement.value;
        let birth = birthDateElement.value;
        let position = positionElement.value;
        let salary = Number(salaryElement.value);

        if (firstName && lastName && email && birth && position && salary) {
            let tableRow = document.createElement('tr');

            let firstNameEl = document.createElement('td');
            firstNameEl.textContent = firstName;
            tableRow.appendChild(firstNameEl);

            let lastNameEl = document.createElement('td');
            lastNameEl.textContent = lastName;
            tableRow.appendChild(lastNameEl);

            let emailEl = document.createElement('td');
            emailEl.textContent = email;
            tableRow.appendChild(emailEl);

            let birthEl = document.createElement('td');
            birthEl.textContent = birth;
            tableRow.appendChild(birthEl);

            let positionEl = document.createElement('td');
            positionEl.textContent = position;
            tableRow.appendChild(positionEl);

            let salaryEl = document.createElement('td');
            salaryEl.textContent = salary;
            tableRow.appendChild(salaryEl);

            let btnData = document.createElement('td');

            let firedBtn = document.createElement('button');
            firedBtn.setAttribute('class', 'fired');
            firedBtn.textContent = 'Fired';
            firedBtn.addEventListener('click', firedWorker);
            btnData.appendChild(firedBtn);

            let editBtn = document.createElement('button');
            editBtn.setAttribute('class', 'edit');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', editContent);
            btnData.appendChild(editBtn);

            tableRow.appendChild(btnData);
            tableBodyElement.appendChild(tableRow);

            let totalSum = Number(sumElement.textContent) + salary;
            sumElement.textContent = totalSum.toFixed(2);

            function editContent(e) {
                let target = e.currentTarget.parentNode; // Catch 'td' which is the parent of the button.
                let targetTr = target.parentNode; // Catch 'tr' which is the parentheses of all elements.

                let allTdElements = targetTr.querySelectorAll('td'); // Catch all elements of 'tr' in 'NodeList'.
                let arrTdElements = Array.from(allTdElements); // Convert 'NodeList' to an array so we can access its elements.

                // We assign each of the elements to the corresponding field.
                firstNameElement.value = arrTdElements[0].textContent;
                lastNameElement.value = arrTdElements[1].textContent;
                emailElement.value = arrTdElements[2].textContent;
                birthDateElement.value = arrTdElements[3].textContent;
                positionElement.value = arrTdElements[4].textContent;
                salaryElement.value = arrTdElements[5].textContent;

                // Subtract the specific worker's salary from the total.
                let currentTotalPrice = Number(sumElement.textContent);
                let currentSalary = Number(arrTdElements[5].textContent);
                let totalPrice = currentTotalPrice - currentSalary;
                sumElement.textContent = totalPrice.toFixed(2);

                // Delete the given row from the table.
                tableRow.remove();
            }

            function firedWorker(e) {
                let target = e.currentTarget.parentNode; // Catch 'td' which is the parent of the button.
                let targetTr = target.parentNode; // Catch 'tr' which is the parentheses of all elements.

                let allTdElements = targetTr.querySelectorAll('td'); // Catch all elements of 'tr' in 'NodeList'.
                let arrTdElements = Array.from(allTdElements); // Convert 'NodeList' to an array so we can access its elements.

                // Subtract the specific worker's salary from the total.
                let currentTotalPrice = Number(sumElement.textContent);
                let currentSalary = Number(arrTdElements[5].textContent);
                let totalPrice = currentTotalPrice - currentSalary;
                sumElement.textContent = totalPrice.toFixed(2);

                // We fire the given worker by deleting the row from the table.
                tableRow.remove();
            }

            firstNameElement.value = '';
            lastNameElement.value = '';
            emailElement.value = '';
            birthDateElement.value = '';
            positionElement.value = '';
            salaryElement.value = '';
        }
    }
}
solve()