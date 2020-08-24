const strokes = [2, 5, 8];
const SMALL_STROKE = strokes[0];
const MEDIUM_STROKE = strokes[1];
const LARGE_STROKE = strokes[2];

async function main() {
    const colors = document.querySelector('.colors');
    const tools = document.querySelector('.tools');
    const colorButtons = document.querySelectorAll('.color');
    const pointers = document.querySelectorAll('.pointer');

    const eraserButton = document.querySelector('.eraser-button');

    let movements = [];
    let redoMovements = [];
    let currentColor = '#000000';
    let currentStrokeSize = SMALL_STROKE;

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    prevenMobileScroll(canvas);
    resetCanvas(canvas, ctx);
    let canDraw = false;

    canvas.addEventListener('pointerdown', (e) => {
        if (e.button === 0) {
            redoMovements = [];
            ctx.beginPath();
            canDraw = true;
            const { x, y } = getCoordinates(e);
            ctx.moveTo(x, y);
            movements.push([{ type: 'moveTo', pos: { x, y } }]);
            currentColor = currentColor;
        }
    });

    document.addEventListener('pointerup', (e) => {
        if (e.button === 0) {
            canDraw = false;
            ctx.closePath();
        }
    });

    canvas.addEventListener('pointermove', (e) => {
        if (canDraw) {
            const { x, y } = getCoordinates(e);
            ctx.lineTo(x, y);
            ctx.lineWidth = currentStrokeSize;
            ctx.lineJoin = ctx.lineCap = 'round';
            ctx.strokeStyle = currentColor;
            movements[movements.length - 1].push({
                type: 'lineTo',
                pos: { x, y },
                color: currentColor,
                lineWidth: currentStrokeSize,
            });

            ctx.stroke();
        }
    });

    document.getElementById('undo').addEventListener('click', () => {
        if (movements.length) {
            redoMovements.unshift(movements.pop());
            resetCanvas(canvas, ctx);
            recreateCanvas(ctx, movements);
        }
    });

    document.getElementById('redo').addEventListener('click', () => {
        if (redoMovements.length) {
            movements.push(redoMovements.shift());
            resetCanvas(canvas, ctx);
            recreateCanvas(ctx, movements);
        }
    });

    colors.addEventListener('click', (e) => {
        const [selectedButton] = e.composedPath();
        currentColor = window.getComputedStyle(selectedButton).backgroundColor;
        for (const colorButton of [...colorButtons, eraserButton]) {
            colorButton.classList.remove('selected');
        }
        selectedButton.classList.add('selected');
    });

    tools.addEventListener('click', (e) => {
        console.log(e.composedPath()[0].classList);
        if (
            e.composedPath()[0].classList.contains('pointer') ||
            e.composedPath()[1].classList.contains('pointer')
        ) {
            if (
                e.composedPath()[0].classList.contains('small') ||
                e.composedPath()[1].classList.contains('small')
            ) {
                currentStrokeSize = SMALL_STROKE;
            } else if (
                e.composedPath()[0].classList.contains('medium') ||
                e.composedPath()[1].classList.contains('mediun')
            ) {
                currentStrokeSize = MEDIUM_STROKE;
            } else {
                currentStrokeSize = LARGE_STROKE;
            }

            for (const pointer of pointers) {
                pointer.classList.remove('selected-pointer');
            }

            e.composedPath()[0].classList.contains('pointer')
                ? e.composedPath()[0].classList.add('selected-pointer')
                : e.composedPath()[1].classList.add('selected-pointer');
        }
    });

    eraserButton.addEventListener('click', (e) => {
        currentColor = 'white';
        for (const colorButton of colorButtons) {
            colorButton.classList.remove('selected');
        }
        eraserButton.classList.add('selected');
    });

    document.getElementById('save').addEventListener('click', (e) => {
        const link = document.createElement('a');
        link.style.display = 'none';
        const copy = canvas.cloneNode(true);
        copy.height = 375 * 3;
        copy.width = 375 * 3;
        const copyCtx = copy.getContext('2d');
        copyCtx.scale(3, 3);
        copyCtx.drawImage(canvas, 0, 0);

        document.body.appendChild(link);

        link.setAttribute('download', 'drawing.jpeg');
        link.setAttribute(
            'href',
            copy.toDataURL('image/jpeg', 2.0).replace('image/jpeg', 'image/octet-stream')
        );
        link.click();
    });
}

function resetCanvas(canvas, ctx) {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function recreateCanvas(ctx, movementsLists) {
    for (const movements of movementsLists) {
        for (const movement of movements) {
            const { type } = movement;
            if (type === 'moveTo') {
                ctx.closePath();
                ctx.beginPath();
                ctx.moveTo(movement.pos.x, movement.pos.y);
            } else {
                const { pos, color, lineWidth } = movement;
                ctx.lineTo(pos.x, pos.y);
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = color;
                ctx.lineJoin = ctx.lineCap = 'round';
                ctx.stroke();
            }
        }
    }
}

function getCoordinates(e) {
    const rect = e.target.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);

    return { x, y };
}

function prevenMobileScroll(canvas) {
    canvas.addEventListener('touchstart', function (event) {
        event.preventDefault();
    });
    canvas.addEventListener('touchmove', function (event) {
        event.preventDefault();
    });
    canvas.addEventListener('touchend', function (event) {
        event.preventDefault();
    });
    canvas.addEventListener('touchcancel', function (event) {
        event.preventDefault();
    });
}

main();
