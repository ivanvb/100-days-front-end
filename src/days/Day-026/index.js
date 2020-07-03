const [container] = document.getElementsByClassName('container');
let isOpen = true;
container.addEventListener('click', () => {
    container.classList.remove('pristine');
    isOpen ? container.classList.add('active') : container.classList.remove('active');
    isOpen = !isOpen;
});
