const board = document.querySelector('.board');
let canFlip = false;
let flippedCards = [];

const possibleCards = ['🍕', '🍰', '🧀', '🍿', '🍪', '🧁', '🍒', '🥤'];

function getRandomArbitrary(max) {
    return Math.floor(Math.random() * max);
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

async function main() {
    const generateCards = () => {
        let cards = [];
        for (let i = 0; i < 8; i++) {
            const card = `
            <div class="cell">
                <div class="card">
                    <div class="back">
                        <div class="layer-1"></div>
                        <div class="layer-2"></div>
                    </div>
                    <div class="front">${
                        possibleCards[getRandomArbitrary(possibleCards.length)]
                    }</div>
                </div>
            </div>
            `;

            cards.push(card);
            cards.push(card);
        }

        return shuffleArray(cards).join(' ');
    };

    board.innerHTML = generateCards();
    setTimeout(() => {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card) => card.classList.add('flipped-card'));
        setTimeout(() => {
            cards.forEach((card) => {
                card.classList.add('unflip');
                card.classList.remove('flipped-card');
                setTimeout(() => {
                    canFlip = true;
                }, 350);
            });
        }, 1000);
    }, 350);
}

main();

board.addEventListener('click', (e) => {
    if (canFlip) {
        const card = e.composedPath().find((el) => el.classList && el.classList.contains('card'));
        if (flippedCards[0] !== card) {
            if (!!card) {
                canFlip = flippedCards.length < 1;
                flippedCards.push(card);
                card.classList.add('flipped-card');
                card.classList.remove('unflip');
                if (flippedCards.length === 2) {
                    setTimeout(() => {
                        if (flippedCards[0].innerHTML === flippedCards[1].innerHTML) {
                            flippedCards[0].classList.add('disappear');
                            flippedCards[1].classList.add('disappear');
                        } else {
                            flippedCards[0].classList.add('unflip');
                            flippedCards[1].classList.add('unflip');

                            flippedCards[0].classList.remove('flipped-card');
                            flippedCards[1].classList.remove('flipped-card');
                        }
                        flippedCards = [];
                        canFlip = true;
                    }, 500);
                }
            }
        }
    }
});
