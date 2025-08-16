import GameBoard from "./gameboard.js";

class Player {
    constructor (isComputer, playerNum) {
        this.isComputer = isComputer;
        this.board = new GameBoard();
        this.name = "player" + playerNum;
    }

    genRandomCoord () {
        return Math.floor(Math.random() * 10);
    }

    doComputerMove (enemyBoard) {
        //do the computer move thru rng, but check if the coord has already been hit
        let x = this.genRandomCoord();
        let y = this.genRandomCoord();

        while(enemyBoard.grid[y][x] == -1) {
            x = this.genRandomCoord();
            y = this.genRandomCoord();
        }
        return enemyBoard.receiveHit(x,y);
    }
}

export default Player;