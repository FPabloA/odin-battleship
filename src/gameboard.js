import Ship from "./ship.js";

class GameBoard {
    constructor() {
        this.grid = Array(10).fill().map(() => Array(10).fill());
        this.displayGrid = Array(10).fill().map(() => Array(10).fill("-"));
        this.ships = [];
        this.numShipsSunk = 0;

        this.getShips();
        this.makeGrid();
    }
    
    makeGrid () {
        //manually placing ships for now

        //aircraft
        this.grid[0][0] = this.ships[0];
        this.grid[1][0] = this.ships[0];
        this.grid[2][0] = this.ships[0];
        this.grid[3][0] = this.ships[0];
        this.grid[4][0] = this.ships[0];

        //battleship
        this.grid[2][1] = this.ships[1];
        this.grid[2][2] = this.ships[1];
        this.grid[2][3] = this.ships[1];
        this.grid[2][4] = this.ships[1];

        //cruiser
        this.grid[4][3] = this.ships[2];
        this.grid[4][4] = this.ships[2];
        this.grid[4][5] = this.ships[2];

        //sub
        this.grid[5][0] = this.ships[3];
        this.grid[5][1] = this.ships[3];
        this.grid[5][2] = this.ships[3];

        //destroyer
        this.grid[7][2] = this.ships[4];
        this.grid[7][3] = this.ships[4];
    }

    getShips () {
        //add aircraft carrier
        this.ships.push(new Ship(5));
        //add battleship
        this.ships.push(new Ship(4))
        //add cruiser
        this.ships.push(new Ship(3));
        //add submarine
        this.ships.push(new Ship(3));
        //add destroyer
        this.ships.push(new Ship(2));
    }

    recieveHit (x,y) {
        if (this.grid[x][y]) {
            if (this.grid[x][y].hit()){
                this.numShipsSunk++;
            }
            this.grid[x][y] = -1;
            this.displayGrid[x][y] = "X";
        }
        else{
            this.displayGrid[x][y] = "O";
        }
        if (this.reportLoss()) {
            //do something
        }
    }

    reportLoss () {
        return this.numShipsSunk == this.ships.length;
    }
}

export default GameBoard;

// const game = new GameBoard();
// console.log(game.grid);