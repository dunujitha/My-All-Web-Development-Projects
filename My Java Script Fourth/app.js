const getInputCharacters = document.querySelector('input');
const getCharacterCount = document.getElementById('count');

function getAllInput(event){
  const getAll = event.target.value;
 const enteredTextLength = getAll.length;

  const remainings = 60 - enteredTextLength;
  getCharacterCount.textContent = remainings;

  if(remainings === 0){
      getCharacterCount.classList.add('error');
      getInputCharacters.classList.add('error');
  }
  else if(remainings <= 10){
       getCharacterCount.classList.add('warning');
       getInputCharacters.classList.add('warning');
       getCharacterCount.classList.remove('error');
    getInputCharacters.classList.remove('error');

  }else{
    getCharacterCount.classList.remove('warning');
    getInputCharacters.classList.remove('warning');
    getCharacterCount.classList.remove('error');
    getInputCharacters.classList.remove('error');
  }

}

getInputCharacters.addEventListener('input',getAllInput);



