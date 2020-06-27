const [shape] = document.getElementsByClassName('shape');
const [parent] = document.getElementsByClassName('parent');
parent.addEventListener('click', () => {
    shape.classList.remove('animation');
    setTimeout(() => {
        shape.classList.add('animation');
    }, 0);
});
