// This module is for storing the gameboard 
const GameBoard = (() => {
    const gameBoard = ["X", "O", "X",
                        "O", "X", "O",
                        "X", "O", "X"];
    return { gameBoard };
})();
// This factory function for making players "O" and "X"
const Player = (mark) => {
    let mark = mark;
};