// This module controls the flow of a game
const GamePlay = (() => {
    const gameOver = false;
    /* Continue allowing players to select squares on the board until a win or tie condition is met */
    const gameLoop = () => {
        while(!gameOver) {
            // wait for input
            // insert into DOM
            // switch turns
        }
    };
    const switchTurn = (playerOne, playerTwo) => {
        if (playerOne.turn === false && playerTwo.turn === false) {
            playerOne.turn = true;
        } else if (playerOne.turn === true) {
            playerOne.turn = false;
            playerTwo.turn = true;
        } else if (playerTwo.turn === true) {
            playerOne.turn = true;
            playerTwo.turn = false;
        }
    };
    return { gameOver }
})();
// This module is for storing the gameboard 
const GameBoard = (() => {
    const gameBoard = ["X", "O", "X",
                        "O", "X", "O",
                        "X", "O", "X"];
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
            main.appendChild(button);
    }
};
    return { displayBoard };
})();

displayController.displayBoard();