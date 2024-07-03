function solve() {
   let buttons = document.getElementsByTagName("button");
   // ^ We get all the buttons in an HTML collection so that we can, via '.forEach', attach '.addEventListener()' to them at the same time.

   let textArea = document.getElementsByTagName("textarea")[0];
   // ^ 'textarea' in this case has neither 'class' nor 'id', so we select it by tag,
   // ^ but since '.getElementsByTagName()' returns an HTML collection of 1 elements, we also write [0],
   // ^ to get this single element.

   let listOfproducts = {};

   let buttonsArr = Array.from(buttons);
   buttonsArr.forEach(el => el.addEventListener('click', clickBtn));

   function clickBtn(e) {
      if (e.target.className === 'add-product') {
         let currentEl = e.target.parentElement;
         // ^ We get the parent of the button, which is a 'div' with class 'product-add'.

         let priceEl = Number(currentEl.nextElementSibling.innerText);
         // ^ We get the price of each product by taking the current item's 'innerText' of its next relative
         // ^ and we make it a number because otherwise it will return 'string'.

         let productEl = currentEl.previousElementSibling.children[0].innerText;
         // ^ We get the name of each product by taking the current element's HTML collection
         // ^ of the children of his preceding relative. We write [0] because we only want the first element of the collection,
         // ^ which holds the title, and with 'innerText' we take the name of the product itself.

         if (!listOfproducts.hasOwnProperty(productEl)) {
            listOfproducts[productEl] = 0;
         }

         listOfproducts[productEl] += priceEl;
         textArea.value += `Added ${productEl} for ${priceEl.toFixed(2)} to the cart.\n`;
      } else {
         let totalPrice = Number(Object.values(listOfproducts).reduce((a, b) => a + b, 0));
         textArea.value += `You bought ${Object.keys(listOfproducts).join(', ')} for ${totalPrice.toFixed(2)}.`;

         buttonsArr.forEach(btn => btn.disabled = true);
         // ^ With 'btn.disabled = true' we say that every 1 button is disabled.
      }
   }
}