const grass = document.querySelector('.grass');
const FLOWERS = document.querySelectorAll('.flowers > *');

const MIN_TIME = 100;
const MAX_TIME = 3500;

let total_flowers = 0;

function timeout() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, getRandomInt(MIN_TIME, MAX_TIME));
    });
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

async function generateFlowers() {
    const MIN_FLOWERS = 1;
    const MAX_FLOWERS = 5;
    const number = getRandomInt(MIN_FLOWERS, MAX_FLOWERS);

    total_flowers += number;

    for (let i = 0; i < number; i++) {
        const flower = document.createElement('img');
        flower.setAttribute('src', FLOWERS[getRandomInt(0, FLOWERS.length)].getAttribute('src'));
        flower.classList.add('flower');

        const TOP = getRandomInt(0, 90);
        const LEFT = getRandomInt(0, 90);

        flower.style.top = `${TOP}%`;
        flower.style.left = `${LEFT}%`;
        flower.style.zIndex = TOP * 100;
        grass.appendChild(flower);
    }
}

function getAmountOfFlowers() {
    if (window.matchMedia && window.matchMedia('(max-width: 478px)').matches) {
        return 25;
    } else if (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) {
        return 50;
    } else {
        return 70;
    }
}

async function main() {
    generateFlowers();
    while (total_flowers < getAmountOfFlowers()) {
        await timeout();
        generateFlowers();
    }
}

main();
