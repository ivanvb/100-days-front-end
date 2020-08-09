const carouselContainer = document.querySelector('.container');
const bars = document.querySelectorAll('.item');

let position = 0;
let originalTransition = window.getComputedStyle(carouselContainer).transition;

setInterval(() => {
    carouselContainer.style.transform = `translateX(-${(++position % 3) * 100}%)`;
    showBar(bars, position % 3);
}, 1500);

showBar(bars, position);

function showBar(bars, i) {
    bars.forEach((bar, j) => {
        if (i === j) {
            bar.classList.add('active');
        } else {
            bar.classList.remove('active');
        }
    });
}
