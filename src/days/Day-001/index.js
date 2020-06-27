const [form] = document.getElementsByClassName('form');
const [addButton] = document.getElementsByClassName('button__add');
const [startButton] = document.getElementsByClassName('button__start');
const inputField = document.getElementById('text_field');
const wordsContainer = document.getElementById('container');
const [secondsField] = document.getElementsByClassName('seconds_field');

const DEFAULT_SECONDS = 2;

const words = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputField.value !== '') {
        words.push(inputField.value);
        inputField.value = '';
        setDisabled(startButton, false);
    }
});

function setDisabled(button, value) {
    button.disabled = value;
}

startButton.addEventListener('click', submit);

document.addEventListener('keydown', (e) => {
    const ctrlEnterIsPressed = e.code === 'Enter' && e.ctrlKey;
    if (ctrlEnterIsPressed && startButton.disabled === false) {
        submit();
    }
});

function submit() {
    const seconds = Number.parseInt(secondsField.value) || DEFAULT_SECONDS;
    addKeyframes(words.length, seconds <= 0 ? DEFAULT_SECONDS : seconds);

    // The first word is added to the end of the array to achieve an infinite scroll effect
    words.push(words[0]);
    wordsContainer.innerHTML = `
        ${words.map((word) => `<p>${word}</p>`).join('\n')}
    `;
    wordsContainer.classList.add('scroller');
    setDisabled(startButton, true);
    setDisabled(addButton, true);
    setDisabled(secondsField, true);
}

function addKeyframes(words, seconds) {
    const text = `
    .scroller {
        animation-name: vertical-scroll;
        animation-duration: ${seconds}s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    @keyframes vertical-scroll {
        from {
            transform: translateY(0%);
        }
        to {
            transform: translateY(-${words}em);
        }
    }
`;
    const cssAnimation = document.createElement('style');
    cssAnimation.type = 'text/css';
    const keyframe = document.createTextNode(text);
    cssAnimation.appendChild(keyframe);
    const [head] = document.getElementsByTagName('head');
    head.appendChild(cssAnimation);
}
