function StartMyGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom player names for both players");
    return;
  }

  resetGameStatus();
  activePlayerName.textContent = players[activePlayer].name;
  ActiveGameField.style.display = "block";
}

function swithcPlyer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (event.target.tagName !== "LI" || gameIsOver === true) {
    return;
  }

  const selectedField = event.target;
  const selectedColumn = +selectedField.dataset.col - 1;
  const selectedRow = +selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Please select an empty field");
    return;
  }

  selectedField.textContent = players[activePlayer].symbol; //player[0]
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  const winnerId = checkForGameOver();
  if (winnerId !== 0) {
    endGame(winnerId);
  }
  currentRound++;
  swithcPlyer();
}

function checkForGameOver() {
  //Checking the rows for equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  //Checking the column for equility
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  //Diagonal: Top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  // Diagonal: bottom left to Top right

  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

function endGame(winnerId) {
          gameIsOver = true;
  gameOverElment.style.display = "block";

  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    gameOverElment.firstElementChild.firstElementChild.textContent = winnerName;
  } else {
    gameOverElment.firstElementChild.textContent = "It's a draw!";
  }
}

function resetGameStatus() {
  activePlayer = 0;
  currentRound = 0;
  gameIsOver = false;
  gameOverElment.firstElementChild.innerHTML =
    'You Won, <span id="winner-name">PLAYER NAEM</span>!';
    
  gameOverElment.style.display = 'none'
  let gameBoardIndex = 0;

  for(let i= 0; i< 3; i++){
          for(let j = 0; j < 3; j++){
                 gameData[i][j] = 0;  
                 const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
                 gameBoardItemElement.textContent = '';
                 gameBoardItemElement.classList.remove('disabled');
                 gameBoardIndex++; 
          }
  }
}
