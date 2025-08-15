import "./style.css";
import Player from "./player";

function renderGrid (player) {
    const container = document.querySelector(`#${player.name}-board-wrapper`);
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const gridSquare = document.createElement("div");
            gridSquare.className = "grid-square"
            gridSquare.x = j;
            gridSquare.y = i;
            gridSquare.innerHTML = player.board.displayGrid[i][j];
            container.appendChild(gridSquare);
        }
    }
}

//human player
const player1 = new Player(false, 1);
//cpu
const player2 = new Player(true, 2);

renderGrid(player1);
renderGrid(player2);
