function notify(message) {
  let notificationDivElement = document.getElementById('notification');
  notificationDivElement.innerText = message;
  notificationDivElement.style.display = 'block';

  notificationDivElement.addEventListener('click', hideContent);

  function hideContent(e) {
    e.target.style.display = 'none';
  }
}