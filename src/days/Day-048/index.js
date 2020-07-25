import { generateRandomHex, rgb2hex, getRandomArbitrary } from './util.js';

const colors = document.querySelectorAll('.color');
const title = document.querySelector('.title');
const scoreElement = document.querySelector('.score');
const container = document.querySelector('.container');
const maxElement = document.querySelector('.max');
const livesElement = document.querySelector('.lives');
let generatedColors = [];
let lives = 10;

let selectedColor = '';
let score = 0;

(function main() {
    container.addEventListener('click', (e) => {
        if (e.target.getAttribute('color') !== null) {
            let hex = rgb2hex(e.target.style.background);
            if (hex === selectedColor) {
                updateScore();
                generateGameRound();
            } else {
                lives--;
                updateLives();
                if (lives === 0) {
                    resetGame();
                } else {
                    generateGameRound();
                }
            }
        }
    });
    generateGameRound();
    updateMaxScore();
})();

function generateGameRound() {
    populateColors(colors);
    setTitle(title, generatedColors);
}

function populateColors(colors) {
    generatedColors = [];
    colors.forEach((color) => {
        let randomColor;
        do {
            randomColor = generateRandomHex();
        } while (generatedColors.find((color) => color === randomColor));
        color.style.background = randomColor;
        generatedColors.push(randomColor);
    });
}

function updateScore() {
    scoreElement.innerText = `Score: ${++score}`;
}

function resetGame() {
    saveScore(score);
    alert('You just lost!');
    lives = 10;
    updateLives();
    updateMaxScore();
    score = 0;
    generateGameRound();
}

function updateLives() {
    livesElement.innerText = `Tries: ${new Array(lives).fill('🤠').join('')}`;
}

function saveScore(score) {
    let previousMax = getMaxScore() || 0;
    if (score > previousMax) {
        window.localStorage.setItem('max', score);
    }
}

function getMaxScore() {
    return Number.parseInt(window.localStorage.getItem('max'));
}

function setTitle(title, generatedColors) {
    selectedColor = generatedColors[getRandomArbitrary(0, generatedColors.length)];
    title.innerText = selectedColor;
}

function updateMaxScore() {
    const max = getMaxScore();
    maxElement.innerText = `Max: ${max || 0}`;
}
