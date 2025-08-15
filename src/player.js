import GameBoard from "./gameboard.js";

class Player {
    constructor (isComputer, playerNum) {
        this.isComputer = isComputer;
        this.board = new GameBoard();
        this.name = "player" + playerNum;
    }

    doComputerMove (enemyBoard) {
        //do the computer move thru rng, but check if the coord has already been hit
    }
}

export default Player;