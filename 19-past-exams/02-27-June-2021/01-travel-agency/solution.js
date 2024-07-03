window.addEventListener('load', solution);

function solution() {
  let nameElement = document.getElementById('fname');
  let emailElement = document.getElementById('email');
  let phoneElement = document.getElementById('phone');
  let addressElement = document.getElementById('address');
  let postalCodeElement = document.getElementById('code');

  let blockDivElement = document.getElementById('block');
  let ulContainerElement = document.getElementById('infoPreview');

  let submitBtnElement = document.getElementById('submitBTN');
  submitBtnElement.addEventListener('click', submitInfo);

  let editBtnElement = document.getElementById('editBTN');
  editBtnElement.addEventListener('click', editInformation);

  let continueBtnElement = document.getElementById('continueBTN');
  continueBtnElement.addEventListener('click', endReservation);

  function submitInfo(e) {
    e.preventDefault();

    if (nameElement.value && emailElement.value) {
      let fullName = document.createElement('li');
      fullName.textContent = `Full Name: ${nameElement.value}`;
      ulContainerElement.appendChild(fullName);

      let clientEmail = document.createElement('li');
      clientEmail.textContent = `Email: ${emailElement.value}`;
      ulContainerElement.appendChild(clientEmail);

      let clientPhone = document.createElement('li');
      clientPhone.textContent = `Phone Number: ${phoneElement.value}`;
      ulContainerElement.appendChild(clientPhone);

      let clientAddress = document.createElement('li');
      clientAddress.textContent = `Address: ${addressElement.value}`;
      ulContainerElement.appendChild(clientAddress);

      let clientPostalCode = document.createElement('li');
      clientPostalCode.textContent = `Postal Code: ${postalCodeElement.value}`;
      ulContainerElement.appendChild(clientPostalCode);

      nameElement.value = '';
      emailElement.value = '';
      phoneElement.value = '';
      addressElement.value = '';
      postalCodeElement.value = '';

      submitBtnElement.disabled = true;
      editBtnElement.disabled = false;
      continueBtnElement.disabled = false;
    }
  }

  function editInformation() {
    let allLiElements = document.querySelectorAll('#infoPreview > li');
    let arrLiElements = Array.from(allLiElements);

    nameElement.value = arrLiElements[0].textContent.split(': ')[1];
    emailElement.value = arrLiElements[1].textContent.split(': ')[1];
    phoneElement.value = arrLiElements[2].textContent.split(': ')[1];
    addressElement.value = arrLiElements[3].textContent.split(': ')[1];
    postalCodeElement.value = arrLiElements[4].textContent.split(': ')[1];

    editBtnElement.disabled = true;
    continueBtnElement.disabled = true;
    submitBtnElement.disabled = false;

    ulContainerElement.innerHTML = '';
  }

  function endReservation() {
    blockDivElement.innerHTML = ''; // This is how we delete all elements/children of a particular element from the DOM tree.

    let h3Element = document.createElement('h3');
    h3Element.textContent = 'Thank you for your reservation!';
    blockDivElement.appendChild(h3Element);
  }
}