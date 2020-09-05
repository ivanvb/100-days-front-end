let yPos = 65;
let zPos = 0;
const cube = document.querySelector('.cube');

// Directions
const UP = 0;
const DOWN = 1;
const LEFT = 2;
const RIGHT = 3;

const CUBE_DIRECTIONS = {
    KeyA: LEFT,
    KeyD: RIGHT,
    KeyW: UP,
    KeyS: DOWN,
};

document.addEventListener('keydown', (e) => {
    rotateCube(CUBE_DIRECTIONS[e.code]);
});

const cubeUpButton = document.querySelector('.cube-up');
const cubeDownButton = document.querySelector('.cube-down');
const cubeLeftButton = document.querySelector('.cube-left');
const cubeRightButton = document.querySelector('.cube-right');

const cubeMovement = [
    {
        element: cubeUpButton,
        direction: UP,
    },
    {
        element: cubeDownButton,
        direction: DOWN,
    },
    {
        element: cubeLeftButton,
        direction: LEFT,
    },
    {
        element: cubeRightButton,
        direction: RIGHT,
    },
];

cubeMovement.forEach(({ direction, element }) => {
    element.addEventListener('click', () => rotateCube(direction));
});

function rotateCube(direction) {
    if (direction === LEFT) {
        yPos += 90;
    } else if (direction === RIGHT) {
        yPos -= 90;
    } else if (direction === UP) {
        zPos += 90;
    } else if (direction === DOWN) {
        zPos -= 90;
    }

    cube.style.transform = `rotateY(${yPos}deg) rotateZ(${zPos}deg)`;
}
