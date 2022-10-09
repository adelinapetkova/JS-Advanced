function solve() {
   let totalPrice=0;
   let productsList=[];
   let result=document.getElementsByTagName('textarea')[0];
   result.disabled=false;

   let addButtons=Array.from(document.getElementsByClassName('add-product'));
   let checkoutButton=document.getElementsByClassName('checkout');
   
   function checkout(event){
      for(let btn of addButtons){
         btn.disabled=true;
         checkoutButton[0].disabled=true;
      }
      result.value+=`You bought ${productsList.join(', ')} for ${totalPrice.toFixed(2)}.`;
   }

   function addProduct(event){
      let productDiv=event.target.parentElement.parentElement;
      let productName=productDiv.children[1].children[0].textContent;
      let productPrice=productDiv.children[3].textContent;

      totalPrice+=Number(productPrice);
      if(!productsList.includes(productName)){
         productsList.push(productName);
      }
      result.value+=`Added ${productName} for ${Number(productPrice).toFixed(2)} to the cart.\n`;
   }

   for(let btn of addButtons){
      btn.addEventListener('click', addProduct);
   }

   checkoutButton[0].addEventListener('click', checkout);
}