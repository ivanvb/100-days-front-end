window.onload = () => {
    const [loading] = document.querySelectorAll('.loading > .fill');
    const [loadingBox] = document.getElementsByClassName('loading-box');
    const [homescreen] = document.getElementsByClassName('homescreen');
    const [iconGrid] = document.getElementsByClassName('icons-grid');
    const [app] = document.getElementsByClassName('app-screen');
    const [homeButton] = document.getElementsByClassName('home-button');

    let gridX = 0,
        gridY = 0;

    loading.addEventListener(
        'animationend',
        () => {
            loadingBox.style.display = 'none';
            homescreen.style.display = 'flex';
            const { x, y } = iconGrid.getBoundingClientRect();
            gridX = x;
            gridY = y;
        },
        { once: true }
    );

    homescreen.addEventListener('click', (e) => {
        const x = e.clientX - gridX;
        const y = e.clientY - gridY;

        if (e.target.nodeName === 'IMG') {
            app.style.transformOrigin = `${x}px ${y}px`;
            app.style.transform = 'scale(1)';
        }
    });

    homeButton.addEventListener('click', () => {
        app.style.transform = 'scale(0)';
    });
};
