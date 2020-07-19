const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const CELL_DIMENSION = 5;
const HEIGHT = canvas.height;
const WIDTH = canvas.width;

const restartButton = document.getElementById('restart');
const generateMore = document.getElementById('more');

restartButton.addEventListener('click', () => {
    generateBoard();
});

generateMore.addEventListener('click', () => {
    generateMoreCells();
});

let board = new Array(WIDTH / CELL_DIMENSION)
    .fill(0)
    .map((_) => new Array(HEIGHT / CELL_DIMENSION).fill(0));

generateBoard();

function generateBoard() {
    for (let i = 0; i < WIDTH / CELL_DIMENSION; i++) {
        for (let j = 0; j < HEIGHT / CELL_DIMENSION; j++) {
            board[i][j] = {
                alive: Math.random() > 0.9,
            };
        }
    }
}

function generateMoreCells() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            board[i][j] = {
                alive: board[i][j].alive ? true : Math.random() > 0.98,
            };
        }
    }
}

function tick() {
    const copy = new Array(WIDTH / CELL_DIMENSION)
        .fill(0)
        .map((_) => new Array(HEIGHT / CELL_DIMENSION).fill(0));
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            updateCell(i, j, board[i][j].alive);
            copy[i][j] = { alive: returnNewState(i, j, board) };
        }
    }
    board = JSON.parse(JSON.stringify(copy));
}

tick();
setInterval(() => {
    tick();
}, 1000 / 10);

function updateCell(posX, posY, alive) {
    context.fillStyle = alive ? 'white' : 'black';
    context.fillRect(posX * CELL_DIMENSION, posY * CELL_DIMENSION, CELL_DIMENSION, CELL_DIMENSION);
}

function returnNewState(x, y, board) {
    let aliveNeighbours = 0;
    let found = [];

    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            if (x === 0 && i === -1) continue;
            if (y === 0 && j === -1) continue;
            if (x === board.length - 1 && i === 1) continue;
            if (y === board.length - 1 && j === 1) continue;
            if (i === 0 && j === 0) continue;
            if (board[x + i][y + j].alive) {
                aliveNeighbours++;
                found.push([x + i, y + j]);
            }
        }
    }

    const isAlive = board[x][y].alive;

    return aliveNeighbours === 3 || (aliveNeighbours === 2 && isAlive);
}
