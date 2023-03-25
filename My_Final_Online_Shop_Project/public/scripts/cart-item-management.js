const cartItemUpdateFormElements = document.querySelectorAll('.cart-item-management');
const cartTotalPriceElemnnt = document.getElementById('cart-total-price');
const cartBadgeElements = document.querySelectorAll('.nav-items .badge');

async function updateCartItem(event){
  event.preventDefault();
  const form = event.target;
  const productId = form.dataset.productid;
  const csrfToken  = form.dataset.csrf;
  const quantity = form.firstElementChild.value;

  let response;
  try {
           response = await fetch('/cart/items', {
                    method: 'PATCH',
                    body: JSON.stringify({
                          productId: productId,
                          quantity: quantity,
                          _csrf: csrfToken
                    }),
                    headers: {
                          'Content-Type': 'application/json'
                    }
                
                  });    
  } catch (error) {
       alert('Something went wrong!');
       return;    
  }


  if(!response.ok){
          alert('Something went wrong!');
          return;
  }
   const responseData = await response.json(); 

   if(responseData.updateCartData.updatedItemPrice === 0){
          form.parentElement.parentElement.remove();    
   }else{
          const cartItemTotalPrice = form.parentElement.querySelector('.cart-item-price');
          cartItemTotalPrice.textContent = responseData.updateCartData.updatedItemPrice.toFixed(2);
   }


  

 
   cartTotalPriceElemnnt.textContent = responseData.updateCartData.newTotalPrice.toFixed(2);
  
   for(const cartBadgeElement of cartBadgeElements){
      cartBadgeElement.textContent = responseData.updateCartData.newTotalQuantity;
   }

   

}





for(const cartItemUpdateFormElement of cartItemUpdateFormElements){
          cartItemUpdateFormElement.addEventListener('submit', updateCartItem)
}