const mobile_button = document.getElementById('mobile-button');
const links = document.getElementById('links');
const [mainContent] = document.getElementsByTagName('main');

let isMenuOpen = false;

mobile_button.addEventListener('click', () => {
    links.style.maxHeight = isMenuOpen ? '0px' : `${links.scrollHeight}px`;
    isMenuOpen = !isMenuOpen;
});
