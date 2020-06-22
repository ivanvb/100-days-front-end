window.onload = () => {
    const [slider] = document.getElementsByClassName('carousel');
    const [container] = document.getElementsByClassName('container');
    const left = document.getElementById('left');
    const right = document.getElementById('right');

    createCloneSlides();

    const FIRST_UNCLONED_SLIDE = 1;

    let touches = {};
    let index = FIRST_UNCLONED_SLIDE;
    let canMove = true;
    const RIGHT = 'right';
    const LEFT = 'left';
    const defaultTransition = window.getComputedStyle(slider).transition;

    moveWithoutTransition(index);

    // Used to achieve infinite slide effect
    function createCloneSlides() {
        const firstClone = slider.children[0].cloneNode(true);
        const lastClone = slider.children[slider.children.length - 1].cloneNode(true);

        slider.insertBefore(lastClone, slider.children[0]);
        slider.appendChild(firstClone);
    }

    function moveWithoutTransition(index) {
        slider.style.transition = 'none';
        moveToIndex(index);
    }

    function moveToIndex(index) {
        slider.style.transform = `translate(-${index * 100}%)`;
    }

    container.addEventListener('touchstart', (e) => {
        touches[0] = e.touches[0].clientX;
    });

    container.addEventListener('touchend', (e) => {
        const dif = touches[0] - e.changedTouches[0].clientX;
        dif > 0 ? moveSliderTo(RIGHT) : moveSliderTo(LEFT);
    });

    right.addEventListener('click', () => {
        moveSliderTo(RIGHT);
    });
    left.addEventListener('click', () => {
        moveSliderTo(LEFT);
    });

    function moveSliderTo(direction) {
        if (canMove) {
            slider.style.transition = defaultTransition;
            direction === RIGHT ? index++ : index--;
            moveToIndex(index);
            canMove = false;

            slider.addEventListener(
                'transitionend',
                () => {
                    const EDGE_LEFT_SLIDE = 0;
                    const EDGE_RIGHT_SLIDE = slider.children.length - 1;

                    const isEdgeSlide =
                        direction === RIGHT
                            ? index === EDGE_RIGHT_SLIDE
                            : index === EDGE_LEFT_SLIDE;

                    if (isEdgeSlide) {
                        const LAST_UNCLONED_SLIDE = slider.children.length - 2;
                        index = direction === RIGHT ? FIRST_UNCLONED_SLIDE : LAST_UNCLONED_SLIDE;
                        moveWithoutTransition(index);
                    }
                    canMove = true;
                },
                { once: true }
            );
        }
    }
};
