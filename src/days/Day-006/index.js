const WIDTH_PER_SLIDE = [0, 0, 500000, 870, 500, 370, 290, 0, 210];
const POSSIBLE_SLIDES = [2, 3, 4, 5, 6, 8];
const CIRCLE_DEG = 360;

window.onload = () => {
    const [roulette] = document.getElementsByClassName('roulette');

    const SLIDES = POSSIBLE_SLIDES[getRandomInt(0, POSSIBLE_SLIDES.length)];
    addSlidesStyleaToHead(SLIDES);
    addSlidesToHTML(roulette, SLIDES);
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function addSlidesStyleaToHead(SLIDES) {
    const [head] = document.getElementsByTagName('head');
    let addedCss = '';
    addedCss += computeSlideWidth(SLIDES);
    addedCss += computeSlideRotationAndColor(SLIDES);
    addedCss += createSpinAnimation();

    const styles = document.createElement('style');
    styles.innerHTML = addedCss;
    head.appendChild(styles);
}

function computeSlideWidth(SLIDES) {
    return `
    .fig{
        width: ${WIDTH_PER_SLIDE[SLIDES]}px;
    }
    `;
}

function computeSlideRotationAndColor(SLIDES) {
    let computedRotationAndColorPerSlide = '';
    for (let i = 0; i < SLIDES; i++) {
        computedRotationAndColorPerSlide += `
.fig${i + 1}{
    background-color: ${randomHex()};
    transform: translate(-50%, 0%) rotate(${(CIRCLE_DEG / SLIDES) * i}deg);
}
`;
    }

    return computedRotationAndColorPerSlide;
}

function createSpinAnimation() {
    return `
    @keyframes rotate {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
    
        80% {
            transform: translate(-50%, -50%) rotate(3600deg);
        }
    
        100% {
            transform: translate(-50%, -50%) rotate(${3600 + getRandomInt(0, CIRCLE_DEG)}deg);
        }
    }`;
}

function randomHex() {
    return (
        '#' +
        Math.floor(Math.random() * 0xffffff)
            .toString(16)
            .padEnd(6, '0')
    );
}

function addSlidesToHTML(roulette, SLIDES) {
    let innerHtml = '';
    for (let i = 0; i < SLIDES; i++) {
        innerHtml += `<div class="absolute-center fig fig${i + 1}"></div>`;
    }
    roulette.innerHTML = innerHtml;
}
