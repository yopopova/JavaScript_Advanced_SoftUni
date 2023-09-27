window.addEventListener("load", solve);

function solve() {
  let titleInputElement = document.getElementById('post-title');
  let categoryInputElement = document.getElementById('post-category');
  let textAreaInputElement = document.getElementById('post-content');

  let ulPostsForReviewEl = document.getElementById('review-list');
  let ulPublishedListEl = document.getElementById('published-list');

  let publishButton = document.getElementById('publish-btn');
  publishButton.addEventListener('click', publishContent);

  function publishContent(e) {
    e.preventDefault();

    let title = titleInputElement.value;
    let category = categoryInputElement.value;
    let textArea = textAreaInputElement.value;

    if (title && category && textArea) {
      let mainLiElement = document.createElement('li');
      mainLiElement.setAttribute('class', 'rpost');

      let articleElement = document.createElement('article');

      let h4Element = document.createElement('h4');
      h4Element.textContent = title;
      articleElement.appendChild(h4Element);

      let pCategoryEl = document.createElement('p');
      pCategoryEl.textContent = `Category: ${category}`;
      articleElement.appendChild(pCategoryEl);

      let pContentEl = document.createElement('p');
      pContentEl.textContent = `Content: ${textArea}`;
      articleElement.appendChild(pContentEl);

      mainLiElement.appendChild(articleElement);

      let editBtn = document.createElement('button');
      editBtn.setAttribute('class', 'action-btn edit');
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', editInfo);
      mainLiElement.appendChild(editBtn);

      let approveBtn = document.createElement('button');
      approveBtn.setAttribute('class', 'action-btn approve');
      approveBtn.textContent = 'Approve';
      approveBtn.addEventListener('click', approveInfo);
      mainLiElement.appendChild(approveBtn);

      function editInfo(e) {
        let target = e.currentTarget.parentNode;
        let elH4 = target.querySelector('article > h4');
        let pAllElements = target.querySelectorAll('article > p');
        let pArray = Array.from(pAllElements);

        titleInputElement.value = elH4.textContent;
        categoryInputElement.value = pArray[0].textContent.split(': ')[1];
        textAreaInputElement.value = pArray[1].textContent.split(': ')[1];

        mainLiElement.remove();
      }

      function approveInfo(e) {
        let target = e.currentTarget.parentNode;
        let articleEl = target.querySelector('article');

        ulPublishedListEl.appendChild(articleEl);
        mainLiElement.remove();
      }

      ulPostsForReviewEl.appendChild(mainLiElement);

      titleInputElement.value = '';
      categoryInputElement.value = '';
      textAreaInputElement.value = '';
    }
  }

  let clearBtn = document.getElementById('clear-btn');
  clearBtn.addEventListener('click', clearInfo);

  function clearInfo() {
    ulPublishedListEl.innerHTML = '';
  }
}
