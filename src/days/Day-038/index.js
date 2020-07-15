const [menu] = document.querySelectorAll('.menu');

menu.addEventListener('click', (e) => {
    if (e.target.nodeName === 'LI') {
        const color = getCSSVariable(`--${e.target.id}`);
        setTheme(color);
    }
});

function getCSSVariable(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name);
}

function setTheme(name) {
    document.documentElement.style.setProperty('--primary-color', name);
}
