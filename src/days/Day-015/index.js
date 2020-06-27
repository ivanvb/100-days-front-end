window.onload = () => {
    const X_TURN = 0,
        O_TURN = 1;

    const X = 'X',
        O = 'O';

    const PLAYER_SIDE = X_TURN;
    let turn = PLAYER_SIDE;

    const AI_TURN_TIME_IN_MILLIS = 1800;

    const HORIZONTAL = 0;
    const VERTICAL = 1;
    const DIAGONAL_DOWN = 2;
    const DIAGONAL_UP = 3;
    const ALL = 4;

    const BLUE_COLOR = getCSSVariable('--x-color');
    const RED_COLOR = getCSSVariable('--o-color');
    const BLACK_COLOR = getCSSVariable('--black');

    const [board] = document.getElementsByClassName('grid');
    const announcement = document.getElementById('announcement');

    setAnnouncement('Your turn', BLUE_COLOR);
    const boardArray = [];
    let can_play = true;

    board.addEventListener('click', async (e) => {
        const position = e.target.id.split('-')[1] || -1;

        if (can_play === true && position !== -1 && boardArray[position] === undefined) {
            boardArray[position] = turn === X_TURN ? X : O;
            drawPlay(e.target);

            if (checkIfGameIsOver() === false) {
                turn = turn === X_TURN ? O_TURN : X_TURN;
                can_play = false;
                await AIPlay();
            }
        }
    });

    function setAnnouncement(text, color) {
        announcement.innerHTML = text;
        announcement.style.color = color;
    }

    function drawPlay(element) {
        turn === X_TURN ? drawX(element) : drawO(element);
        element.style.cursor = 'default';
    }

    function drawX(element) {
        element.innerHTML = `
        <div class="x">
        <div class="shell x-line first-x-diagonal">
            <div class="x-line"></div>
        </div>
        <div class="shell x-line second-x-diagonal">
            <div class="x-line"></div>
        </div>
    </div>`;
    }

    function drawO(element) {
        const size = getCSSVariable('--board-dimensions').replace('px', '');
        const radius = getCSSVariable('--circle-radius').replace('px', '');

        element.innerHTML = `
        <svg class="progress-ring">
                            <circle
                                class="progress-ring-circle"
                                stroke-width="10"
                                fill="transparent"
                                r="${radius}"
                                cx=${size / 6}
                                cy=${size / 6}
                            ></circle>
                        </svg>`;
    }

    function getCSSVariable(name) {
        return getComputedStyle(document.documentElement).getPropertyValue(name);
    }

    function checkIfGameIsOver() {
        let boardIsFull = isBoardFull();
        let playerWon = checkIfPlayerHasWon();

        if (playerWon !== undefined || boardIsFull) {
            can_play = false;
            handleEndGame(playerWon, boardIsFull);
            return true;
        }

        return false;
    }

    function isBoardFull() {
        return boardArray.length === 9 && boardArray.includes(undefined) === false;
    }

    function checkIfPlayerHasWon() {
        const horizontalResult = horizontalCheck();
        const verticalResult = verticalCheck();
        const diagonalResult = diagonalCheck();

        const results = [horizontalResult, verticalResult, diagonalResult];

        return results.find(({ result }) => result === true) || undefined;
    }

    function horizontalCheck() {
        let hasWon = { result: false };
        for (let i = 0; i < boardArray.length; i += 3) {
            if (
                boardArray[i] !== undefined &&
                boardArray[i] === boardArray[i + 1] &&
                boardArray[i] === boardArray[i + 2]
            ) {
                hasWon = { result: true, index: i, direction: HORIZONTAL };
            }
        }

        return hasWon;
    }

    function verticalCheck() {
        let hasWon = { result: false };
        for (let i = 0; i < 3; i++) {
            if (
                boardArray[i] !== undefined &&
                boardArray[i] === boardArray[i + 3] &&
                boardArray[i] === boardArray[i + 6]
            ) {
                hasWon = { result: true, index: i, direction: VERTICAL };
            }
        }

        return hasWon;
    }

    function diagonalCheck() {
        let hasWon = { result: false };
        if (
            boardArray[0] !== undefined &&
            boardArray[0] === boardArray[4] &&
            boardArray[0] === boardArray[8]
        ) {
            hasWon = { result: true, index: 0, direction: DIAGONAL_DOWN };
        } else if (
            boardArray[6] !== undefined &&
            boardArray[6] === boardArray[4] &&
            boardArray[6] === boardArray[2]
        ) {
            hasWon = { result: true, index: 6, direction: DIAGONAL_UP };
        }
        return hasWon;
    }

    function handleEndGame(playerWon, boardIsFull) {
        if (playerWon) {
            setAnnouncement(
                turn === PLAYER_SIDE ? 'You won! 🔥' : 'You lost 😔',
                turn === PLAYER_SIDE ? BLUE_COLOR : RED_COLOR
            );
            uncolorLoserSpots(playerWon.direction, playerWon.index);
        } else if (boardIsFull) {
            setAnnouncement('Tie!', BLACK_COLOR);
            uncolorLoserSpots(ALL);
        }
    }

    function uncolorLoserSpots(direction, index) {
        if (direction === ALL) {
            for (const child of board.children) {
                decolorElement(child);
            }
        } else if (direction === HORIZONTAL) {
            for (let i = 0; i < board.children.length; i += 3) {
                if (i !== index) {
                    decolorElement(board.children[i]);
                    decolorElement(board.children[i + 1]);
                    decolorElement(board.children[i + 2]);
                }
            }
        } else if (direction === VERTICAL) {
            for (let i = 0; i < 3; i++) {
                if (i !== index) {
                    decolorElement(board.children[i]);
                    decolorElement(board.children[i + 3]);
                    decolorElement(board.children[i + 6]);
                }
            }
        } else if (direction === DIAGONAL_DOWN) {
            for (let i = 0; i < board.children.length; i++) {
                if (i !== 0 && i !== 4 && i !== 8) {
                    decolorElement(board.children[i]);
                }
            }
        } else if (direction === DIAGONAL_UP) {
            for (let i = 0; i < board.children.length; i++) {
                if (i !== 6 && i !== 4 && i !== 2) {
                    decolorElement(board.children[i]);
                }
            }
        }
    }

    function decolorElement(element) {
        if (element.children[0]) {
            if (element.children[0].nodeName === 'svg') {
                element.children[0].children[0].style.stroke = '#333';
            } else if (element.children[0].nodeName === 'DIV') {
                element.children[0].children[0].children[0].style.backgroundColor = '#333';
                element.children[0].children[1].children[0].style.backgroundColor = '#333';
            }
        }
    }

    function AIPlay() {
        setAnnouncement("Your opponent's turn", RED_COLOR);
        return new Promise((resolve) => {
            setTimeout(() => {
                let pick;
                while (pick === undefined || boardArray[pick] !== undefined) {
                    pick = pickRandomBox();
                }
                boardArray[pick] = turn === X_TURN ? X : O;
                const item = document.getElementById(`pos-${pick}`);
                drawPlay(item);
                item.addEventListener('animationend', (e) => {
                    if (checkIfGameIsOver() === false) {
                        setAnnouncement('Your turn', BLUE_COLOR);
                        can_play = true;
                        turn = turn === X_TURN ? O_TURN : X_TURN;
                    }

                    resolve();
                });
            }, AI_TURN_TIME_IN_MILLIS);
        });
    }

    function pickRandomBox() {
        return Math.floor(Math.random() * 9);
    }
};
