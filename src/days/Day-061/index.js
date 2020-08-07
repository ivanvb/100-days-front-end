const button = document.querySelector('.stop');
const dice = document.querySelector('.dice');
const result = document.querySelector('.result');

let reroll = false;
let canClick = true;

button.addEventListener('click', () => {
    const number = getRandom(1, 7);
    if (reroll === false) {
        result.innerHTML = number;
        dice.classList.add(`p${number}`);
        button.innerHTML = 'reroll';
        reroll = true;
    } else {
        dice.classList.remove(...dice.classList);
        dice.classList.add('dice');

        setTimeout(() => {
            result.innerHTML = number;
            dice.classList.add(`p${number}`);
            button.innerHTML = 'reroll';
        }, 1000);
    }
});

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
