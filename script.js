// This module controls the flow of a game
const GamePlay = (() => {
    let _gameOver = false;
    let _currentPlayer = null;
    let playerOne = null;
    let playerTwo = null;
    const resetGame = () => {
        _gameOver = false;
        _currentPlayer = null;
        playerOne = null;
        playerTwo = null;
    }
    const setPlayers = (pOne, pTwo) => {
        _currentPlayer = pOne;
        pOne.turn = true;
        playerOne = pOne;
        playerTwo = pTwo;
    };
    const _setMark = (buttonID) => {
        GameBoard.gameBoard[buttonID] = _currentPlayer.mark;
    };
    const _switchTurn = () => {
        if (playerOne.turn === true) {
            playerOne.turn = false;
            playerTwo.turn = true;
            _currentPlayer = playerTwo;
        } else if (playerTwo.turn === true) {
            playerOne.turn = true;
            playerTwo.turn = false;
            _currentPlayer = playerOne;
        }
    };
    const _checkGameOver = (board, mark) => {
        if(board[0] === mark && board[1] === mark && board[2] === mark) {
            _gameOver = true;
        } else if(board[3] === mark && board[4] === mark && board[5] === mark){
            _gameOver = true;
        } else if(board[6] === mark && board[7] === mark && board[8] === mark){
            _gameOver = true;
        } else if(board[0] === mark && board[3] === mark && board[6] === mark){
            _gameOver = true;
        } else if(board[1] === mark && board[4] === mark && board[7] === mark){
            _gameOver = true;
        } else if(board[2] === mark && board[5] === mark && board[8] === mark){
            _gameOver = true;
        } else if(board[0] === mark && board[4] && board[8] === mark){
            _gameOver = true;
        } else if(board[2] === mark && board[4] === mark && board[6] === mark){
            _gameOver = true;
        }
    };
    const _displayWinner = () => {
        if(_gameOver === true) {
            const main = document.querySelector('main');
            main.replaceChildren();
            let winnerText = document.createElement('p');
            winnerText.innerHTML = `Player ${_currentPlayer.mark} wins!`;
            main.appendChild(winnerText);
            let restartButton = document.createElement('button');
            restartButton.innerHTML = 'New Game?'
            restartButton.setAttribute('class', 'restartButton');
            restartButton.onclick = () => {
                newGame.commenceGame();
            }
            main.appendChild(restartButton);
        }
    };
    /* Continue allowing players to select squares on the board until a win or tie condition is met */
    const gameLoop = (buttonID) => {
            // Freeze board and offer new game button if game is over
            // Clear the board
            const main = document.querySelector('main');
            displayController.clearBoard(main);
            if(GameBoard.gameBoard[buttonID] === "") {
                // Switch turns
                _switchTurn();
                // Update Array
                _setMark(buttonID);
            }
            // Display board
            displayController.displayBoard();
                        // Check for win
                        _checkGameOver(GameBoard.gameBoard, _currentPlayer.mark);
                        _displayWinner();
    };
    return { gameLoop, setPlayers, resetGame }
})();
// This module is for storing the gameboard 
const GameBoard = (() => {
    let gameBoard = ["", "", "",
                        "", "", "",
                        "", "", ""];
    return { gameBoard };
})();
// This factory function for making players "O" and "X"
const Player = (mark) => {
    const turn = false;
    return { mark, turn };
};
// Creates buttons, sets their text to an array index and inserts them into DOM
const displayController = (() => {
    const main = document.querySelector('main');
    const displayBoard = () => { 
        for(let i = 0; i < GameBoard.gameBoard.length; i++) {
            let button = document.createElement('button');
            button.innerHTML = GameBoard.gameBoard[i];
            button.setAttribute('id', i);
            main.appendChild(button);
            button.onclick = () => { GamePlay.gameLoop(i) };
    }
};
    const clearBoard = () => {
        while(main.firstChild) {
            main.removeChild(main.lastChild);
        }
    };
    return { displayBoard, clearBoard };
})();

const startGame = () => {
        let playerOne = Player('O');
        let playerTwo = Player('X');
        const commenceGame = () => {
            GamePlay.resetGame();
            GameBoard.gameBoard = ["", "", "",
                                    "", "", "",
                                    "", "", ""];
            displayController.clearBoard();
            displayController.displayBoard();
            GamePlay.setPlayers(playerOne, playerTwo);
        }
        return { commenceGame };
};

let newGame = startGame();
newGame.commenceGame();