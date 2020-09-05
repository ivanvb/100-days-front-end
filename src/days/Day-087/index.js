const canvasTop = document.getElementById('canvas-top');
const canvasBottom = document.getElementById('canvas-bottom');
const canvasLeft = document.getElementById('canvas-left');
const canvasRight = document.getElementById('canvas-right');
const canvasFront = document.getElementById('canvas-front');
const canvasBack = document.getElementById('canvas-back');

const topCtx = canvasTop.getContext('2d');
const bottomCtx = canvasBottom.getContext('2d');
const leftCtx = canvasLeft.getContext('2d');
const rightCtx = canvasRight.getContext('2d');
const frontCtx = canvasFront.getContext('2d');
const backCtx = canvasBack.getContext('2d');

const canvases = [
    {
        canvas: canvasTop,
        context: topCtx,
    },
    {
        canvas: canvasBottom,
        context: bottomCtx,
    },
    {
        canvas: canvasLeft,
        context: leftCtx,
    },
    {
        canvas: canvasRight,
        context: rightCtx,
    },
    {
        canvas: canvasFront,
        context: frontCtx,
    },
    {
        canvas: canvasBack,
        context: backCtx,
    },
];

canvases.forEach(({ context, canvas, color }) => {
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);
});

const sizes = [1, 2, 4, 5];

setInterval(() => {
    canvases.forEach((cv) => {
        let n = getRandomInt(0, 100);
        let SIZE;
        if (n <= 80) {
            SIZE = 1;
        } else if (n <= 97) {
            SIZE = 2;
        } else if (n <= 98) {
            SIZE = 4;
        } else if (n <= 99) {
            SIZE = 5;
        }
        cv.context.fillStyle = getRandomInt(0, 2) === 0 ? 'black' : 'white';
        cv.context.fillRect(
            getRandomInt(0, cv.canvas.width / SIZE) * SIZE,
            getRandomInt(0, cv.canvas.width / SIZE) * SIZE,
            SIZE,
            SIZE
        );
    });
}, 1000 / 60);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
