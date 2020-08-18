const balls = document.querySelectorAll('.ball');
const main = document.querySelector('main');
const bar = document.querySelector('.bar');

let options = {
    rootMargin: '0px',
    threshold: 0.05,
};

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        for (let i = 0; i < 300; i++) {
            const ball = document.createElement('div');
            ball.classList.add('ball');
            main.insertBefore(ball, bar);
        }
    }
});

observer.observe(bar);
