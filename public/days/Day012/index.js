const SMALL_SCREEN_WIDTH_IN_PX = 486;
const DEGREE_MULTIPLICATOR = 10;
const TRANSLATE_MULTIPLICATOR = 110;

window.onload = () => {
    const [cards] = document.getElementsByClassName('cards');

    let isOpen = false;

    const isSmallScreen = window.innerWidth < SMALL_SCREEN_WIDTH_IN_PX;

    cards.addEventListener('click', () => {
        addTransitionStylesToCard(cards, isOpen);

        isOpen = !isOpen;
    });

    function addTransitionStylesToCard(cards, isMenuOpen) {
        for (let i = 0; i < cards.children.length; i++) {
            const children = cards.children[i];

            const translationPercentage = `${isMenuOpen ? '' : '-'}${i * TRANSLATE_MULTIPLICATOR}%`;
            const rotationDegree = `${isMenuOpen ? '-' : ''}${i * DEGREE_MULTIPLICATOR}deg`;

            const animation = isSmallScreen
                ? `translateY(${translationPercentage})`
                : `rotate(${rotationDegree})`;

            children.style.transform = `${
                window.getComputedStyle(children).transform
            } ${animation}`;
        }
    }
};
