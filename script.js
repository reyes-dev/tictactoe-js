// This module is for storing the gameboard 
const GameBoard = (() => {
    const gameBoard = ["X", "O", "X",
                        "O", "X", "O",
                        "X", "O", "X"];
    return { gameBoard };
})();
// This factory function for making players "O" and "X"
const Player = (mark) => {
    return { mark };
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