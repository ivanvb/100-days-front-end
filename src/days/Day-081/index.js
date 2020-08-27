const list = document.querySelector('ul');
const bar = document.querySelector('.bar');

list.addEventListener('mouseover', moveBar);
list.addEventListener('click', moveBar)

function moveBar(e){
    const [anchor] = e.composedPath();
    const number = Number.parseInt(anchor.getAttribute('number'));
    bar.style.transformOrigin = '0 0';
    bar.style.transform = `translateY(${(number -1)  * 100}%)`
}