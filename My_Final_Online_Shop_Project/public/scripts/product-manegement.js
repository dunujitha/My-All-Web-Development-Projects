const deleteButttonElements = document.querySelectorAll('.product-item button');



async function deletProductItems(event){
  const deleteBtn = event.target;
  const producId = deleteBtn.dataset.productid;
  const csrfToken = deleteBtn.dataset.csrf;


const response = await fetch('/admin/products/' + producId + '?_csrf=' + csrfToken, {
     method: 'DELETE'
  } );

  if(!response.ok){
    alert('Something went wrong!'); 
    return;    
  }

  deleteBtn.parentElement.parentElement.parentElement.remove();
  
}


for(const deleteButttonElement of deleteButttonElements){
  deleteButttonElement.addEventListener('click', deletProductItems);
}

