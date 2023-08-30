function solve() {
   let buttons = document.getElementsByTagName("button");
   let textArea = document.getElementsByTagName("textarea")[0];
   let listOfproducts = {};

   let buttonsArr = Array.from(buttons);
   buttonsArr.forEach(el => el.addEventListener('click', clickBtn));

   function clickBtn(e) {
      if (e.target.className === 'add-product') {
         let currentEl = e.target.parentElement;
         let priceEl = Number(currentEl.nextElementSibling.innerText);
         let productEl = currentEl.previousElementSibling.children[0].innerText;

         if (!listOfproducts.hasOwnProperty(productEl)) {
            listOfproducts[productEl] = 0;
         }

         listOfproducts[productEl] += priceEl;
         textArea.value += `Added ${productEl} for ${priceEl.toFixed(2)} to the cart.\n`;
      } else {
         let totalPrice = Number(Object.values(listOfproducts).reduce((a, b) => a + b, 0));
         textArea.value += `You bought ${Object.keys(listOfproducts).join(', ')} for ${totalPrice.toFixed(2)}.`;

         buttonsArr.forEach(btn => btn.disabled = true);
      }
   }
}