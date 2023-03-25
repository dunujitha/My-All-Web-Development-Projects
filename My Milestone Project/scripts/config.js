function editBtn1(event){
    editedPlayer = +event.target.dataset.playerid; //player-id ->  ['player-id']
    displayBackDrop.style.display = 'block';
    displayOverLay.style.display = 'block';
   }
   
   
   function editBtn2(event){
            editedPlayer = +event.target.dataset.playerid;
             displayBackDrop.style.display = 'block';
             displayOverLay.style.display = 'block';
            
   }
   
   
   function ClickCancelBtn(){
             displayBackDrop.style.display = 'none';
             displayOverLay.style.display = 'none';
             formElement.firstElementChild.classList.remove('error');
             errosOutputElement.textContent = '';
             formElement.children[0].children[1].value = '';
   }

   function ClickBackDropAndCancelConfig(){
    displayBackDrop.style.display = 'none';
    displayOverLay.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errosOutputElement.textContent = '';
    formElement.children[0].children[1].value = '';
   }


function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim();


    if(!enteredPlayerName){
        event.target.firstElementChild.classList.add('error')
        errosOutputElement.textContent = 'Please enter a valid name!'
        return;
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;


    //  if(editedPlayer === 1){
    //     players[0].name = enteredPlayerName;
    //  }
    //  else{
    //     players[1].name = enteredPlayerName;
    //  }


      players[editedPlayer - 1].name = enteredPlayerName;

      ClickCancelBtn();
      ClickBackDropAndCancelConfig();
}