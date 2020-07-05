import { toggleTheme } from './theme.js';

let hasDarkTheme = JSON.parse(window.localStorage.getItem('darkMode'));
const themeSwitch = document.createElement('input');
themeSwitch.setAttribute('id', 'night-switch');
themeSwitch.setAttribute('type', 'checkbox');
hasDarkTheme ? themeSwitch.setAttribute('checked', '') : '';
const [body] = document.getElementsByTagName('body');
const themeToggler = document.getElementById('switch-label');

// wait for first transition to occur
setTimeout(() => {
    themeToggler.style.opacity = 1;
}, 200);
body.insertBefore(themeSwitch, themeToggler);

themeSwitch.addEventListener('click', () => {
    hasDarkTheme = !hasDarkTheme;
    toggleTheme(hasDarkTheme);
    window.localStorage.setItem('darkMode', hasDarkTheme);
});
