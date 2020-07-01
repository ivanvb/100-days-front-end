const [container] = document.getElementsByClassName('container');
const [lineTop, , lineBottom] = container.children;
let isOpen = false;

container.addEventListener('click', (e) => {
    if (e.path[0].nodeName !== 'A') {
        container.classList.remove(isOpen ? 'active' : 'inactive');
        container.classList.add(isOpen ? 'inactive' : 'active');
        isOpen = !isOpen;
    }
});
