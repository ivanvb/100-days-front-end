window.onload = () => {
    const button = document.getElementById('sidenav-button');
    const [sidenav] = document.getElementsByClassName('sidenav');
    const [cover] = document.getElementsByClassName('cover');

    button.addEventListener('click', () => {
        sidenav.style.transform = 'translate(0%)';
        cover.style.display = 'block';
    });

    cover.addEventListener('click', () => {
        sidenav.style.transform = 'translate(-150%)';
        cover.style.display = 'none';
    });
};
