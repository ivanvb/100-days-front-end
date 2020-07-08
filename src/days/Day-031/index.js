import { randomChoice, getRandomNumber } from './random.js';

const canvas = document.getElementById('picture');
const ctx = canvas.getContext('2d');

const pixelHeight = 2;
const pixelWidth = 2;

let canDraw = true;

const stopButton = document.getElementById('stop');
const saveButton = document.getElementById('save');

stopButton.addEventListener('click', () => {
    canDraw ? (stopButton.innerText = 'Resume') : (stopButton.innerText = 'Pause');
    canDraw = !canDraw;
});

saveButton.addEventListener('click', saveImage);

function saveImage() {
    const link = document.getElementById('link');
    const copy = canvas.cloneNode(true);
    copy.height = 1050;
    copy.width = 1050;
    const copyCtx = copy.getContext('2d');
    copyCtx.scale(3, 3);
    copyCtx.drawImage(canvas, 0, 0);

    link.setAttribute('download', 'masterpiece.jpeg');
    link.setAttribute(
        'href',
        copy.toDataURL('image/jpeg', 2.0).replace('image/jpeg', 'image/octet-stream')
    );
    link.click();
}

const validColors = [
    '#333333',
    '#FFC0CB',
    '#DBE9EE',
    '#FFD400',
    '#D90368',
    '#541388',
    '#1B998B',
    '#96F550',
    '#4357AD',
    '#3A445D',
    '#FFC0CB',
];

const cellData = generateCellData();

function generateCellData() {
    let fill = new Array(canvas.width / pixelWidth).fill(0);
    let cellData = new Array(canvas.height / pixelHeight).fill(0);
    cellData = cellData.map((_) => [...fill]);

    return cellData;
}

const heads = generateDrawingHeads();

function generateDrawingHeads() {
    const amountOfHeads = getRandomNumber(50, 151);
    const selectedColors = selectRandomColors();

    return new Array(amountOfHeads).fill(0).map((_) => {
        const randomX = getRandomNumber(0, cellData.length);
        const randomY = getRandomNumber(0, cellData.length);

        return {
            position: [randomX, randomY],
            color: randomChoice(selectedColors),
        };
    });
}

function selectRandomColors() {
    const amountOfColors = getRandomNumber(2, validColors.length);
    let copyColors = [...validColors];
    return new Array(amountOfColors).fill(0).map((_) => {
        const picked = randomChoice(copyColors);
        copyColors = copyColors.filter((color) => color != picked);
        return picked;
    });
}

setInterval(drawLoop, 1000 / 60);

function drawLoop() {
    if (canDraw) {
        drawBackgroundColor('white', ctx);
        updateArrayData();
        drawCanvas(ctx, cellData);
        moveHeads(heads);
    }
}

function drawBackgroundColor(color, ctx) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function updateArrayData() {
    for (const head of heads) {
        cellData[head.position[0]][head.position[1]] = head.color;
    }
}

function drawCanvas(ctx, data) {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[i][j] === 0) continue;
            ctx.fillStyle = data[i][j];
            ctx.fillRect(i * pixelWidth, j * pixelHeight, pixelWidth, pixelHeight);
        }
    }
}

function moveHeads(heads) {
    for (let head of heads) {
        const [currentX, currentY] = head.position;
        const [x, y] = pickRandomPosition(head.position);
        head.position = [currentX + x, currentY + y];
    }
}

function pickRandomPosition(pos) {
    const choices = [];
    canMoveUp(pos) ? choices.push([0, -1]) : '';
    canMoveDown(pos) ? choices.push([0, 1]) : '';
    canMoveLeft(pos) ? choices.push([-1, 0]) : '';
    canMoveRight(pos) ? choices.push([1, 0]) : '';

    return randomChoice(choices);
}

function canMoveUp(pos) {
    return pos[1] > 0;
}

function canMoveLeft(pos) {
    return pos[0] > 0;
}
function canMoveDown(pos) {
    return pos[1] < cellData.length - 1;
}

function canMoveRight(pos) {
    return pos[0] < cellData[0].length - 1;
}
