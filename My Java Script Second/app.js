const ClickElement = document.querySelector('p');
const inputElement = document.querySelector('input');

function changeContent(event){
          ClickElement.textContent = 'I want to be an software Engineer'
          console.log('Paragraph Clicked');
          console.log(event);
}


ClickElement.addEventListener('click', changeContent);


function UserInput(event){
  // let enteredText = inputElement.value;
   let enteredText = event.target.value;
 // let enteredText = event.data;
    console.log(enteredText);
   
}




inputElement.addEventListener('input', UserInput);