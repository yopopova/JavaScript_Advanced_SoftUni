function notify(message) {
  let notificationDivElement = document.getElementById('notification');
  notificationDivElement.innerText = message; // Via 'message' the message 'Something happened!'
  notificationDivElement.style.display = 'block';


  // Option to set 'display' to change to 'none' automatically.

  // setTimeout(function() {
  //   notificationDivElement.style.display = 'none';
  // }, 2000);

  // 2000 is milliseconds.
  // But we need to comment the code below with 'addEventListener()'


  // Hide the message by clicking.
  notificationDivElement.addEventListener('click', hideContent);

  function hideContent(e) {
    e.target.style.display = 'none';
    // With 'target' we click on the 'div' element itself.
  }
}