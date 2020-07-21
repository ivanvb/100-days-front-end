const [dogImage] = document.querySelectorAll('img');

let options = {
    rootMargin: '0px',
    threshold: 0.75,
};

let observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        dogImage.classList.add('appear');
    }
}, options);

observer.observe(dogImage);
