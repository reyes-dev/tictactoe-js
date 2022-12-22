// This module controls the flow of a game
const GamePlay = (() => {
    const _gameOver = false;
    const _counter = 0;
    let _currentPlayer = null;
    const _setMark = (buttonID) => {
        // if(GameBoard.gameBoard[buttonID] === "") {
            GameBoard.gameBoard[buttonID] = _currentPlayer.mark;
        // }
    }
    const _clearBoard = (board) => {
        while(board.firstChild) {
            board.removeChild(board.lastChild);
        }
    }
    const _switchTurn = () => {
        if (playerOne.turn === false && playerTwo.turn === false) {
            playerOne.turn = true;
            _currentPlayer = playerOne;
        } else if (playerOne.turn === true) {
            playerOne.turn = false;
            playerTwo.turn = true;
            _currentPlayer = playerTwo;
        } else if (playerTwo.turn === true) {
            playerOne.turn = true;
            playerTwo.turn = false;
            _currentPlayer = playerOne;
        }
    };
    const _checkGameOver = () => {
        if(_counter > GameBoard.gameBoard.length) {
            _gameOver = true;
        }
    }
    /* Continue allowing players to select squares on the board until a win or tie condition is met */
    const gameLoop = (buttonID) => {
            // clear the board
            const main = document.querySelector('main');
            _clearBoard(main);
            if(GameBoard.gameBoard[buttonID] === "") {
                // switch turns
                _switchTurn();
                // Update Array
                _setMark(buttonID);
            }
            // display board
            displayController.displayBoard();
    };
    return { gameLoop }
})();
// This module is for storing the gameboard 
const GameBoard = (() => {
    const gameBoard = ["", "", "",
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
    return { displayBoard };
})();

playerOne = Player('X');
playerTwo = Player('O');
displayController.displayBoard();