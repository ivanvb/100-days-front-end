import { toggleTheme } from './theme.js';

const darkMode = window.localStorage.getItem('darkMode');
const prefersDarkMode =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const hasDarkTheme = darkMode !== null ? JSON.parse(darkMode) : prefersDarkMode;
if (darkMode === null) {
    window.localStorage.setItem('darkMode', prefersDarkMode);
}

toggleTheme(hasDarkTheme);
