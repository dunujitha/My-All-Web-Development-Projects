let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;


const gameData = [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
];


const players = [
          {
            name: '',
            symbol: 'X'  
          },
          {
              name: '',
            symbol: 'O' 

          }
]


const editPlayerBtn1 = document.getElementById('edit-player-1-btn');
const editPlayerBtn2 = document.getElementById('edit-player-2-btn');
const displayBackDrop = document.getElementById('backdrop');
const displayOverLay = document.getElementById('config-overlay');
const ActiveCancelBtn = document.getElementById('cancle-btn');
const ConfirmBtn = document.getElementById('confirm-btn');
const formElement = document.querySelector('form')
const errosOutputElement = document.getElementById('config-erros');
const StartGameButton = document.getElementById('start-new-game');
const ActiveGameField = document.getElementById('active-game');
// const gameFieldElements = document.querySelectorAll('#game-board li')
 const gameBoardElement = document.getElementById('game-board');
const activePlayerName = document.getElementById('active-player-name');
const gameOverElment = document.getElementById('game-over');
const startANewGame = document.getElementById('start-new-game');





editPlayerBtn1.addEventListener('click',editBtn1 );
editPlayerBtn2.addEventListener('click', editBtn2);
ActiveCancelBtn.addEventListener('click',ClickCancelBtn);
displayBackDrop.addEventListener('click', ClickBackDropAndCancelConfig);
formElement.addEventListener('submit', savePlayerConfig);
StartGameButton.addEventListener('click',StartMyGame);
startANewGame.addEventListener('click', resetGameStatus);

// for(const GameElement of gameFieldElements){
//           GameElement.addEventListener('click', selectGameField);
// }


gameBoardElement.addEventListener('click', selectGameField);




