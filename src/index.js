import "./style.css";
import Player from "./player.js";
import GameBoard from "./gameboard.js";
import Ship from "./ship.js";


function clearGrid (player) {
    const container = document.querySelector(`#${player.name}-board-wrapper`);

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function doWin (winner) {
    const winnerDiv = document.createElement("div");
    winnerDiv.className = "winner-banner";
    winnerDiv.innerHTML = winner.name + " has won!"
    document.body.appendChild(winnerDiv);
}

function renderGrid (player, opp) {
    const container = document.querySelector(`#${player.name}-board-wrapper`);

    clearGrid(player);

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const gridSquare = document.createElement("div");
            gridSquare.className = "grid-square"
            gridSquare.x = j;
            gridSquare.y = i;
            gridSquare.innerHTML = player.board.displayGrid[i][j];
            if (player.board.grid[i][j] != -1) {
                gridSquare.addEventListener("click", () => {
                    
                    if(player.board.receiveHit(gridSquare.x, gridSquare.y)){
                        clearGrid(player);
                        clearGrid(opp);
                        doWin(opp);
                        return;
                    }
                    
                    if (player.isComputer) {
                        if(player.doComputerMove(opp.board)) {
                            clearGrid(player);
                            clearGrid(opp);
                            doWin(player);
                            return;
                        }
                    }
                    renderGrid(player, opp);
                    renderGrid(opp, player);
            })
            }
            
            container.appendChild(gridSquare);
        }
    }
}

function runGame () {
    //human player
    const player1 = new Player(false, 1);
    //cpu
    const player2 = new Player(true, 2);

    renderGrid(player1, player2);
    renderGrid(player2, player1);
}

runGame();


