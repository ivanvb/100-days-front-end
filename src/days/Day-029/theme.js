export function toggleTheme(isDark) {
    const root = document.documentElement;

    const darkBackground = getComputedStyle(root).getPropertyValue('--dark-background');
    const darkText = getComputedStyle(root).getPropertyValue('--dark-text');

    const lightBackground = getComputedStyle(root).getPropertyValue('--light-background');
    const lightText = getComputedStyle(root).getPropertyValue('--light-text');

    root.style.setProperty('--background-color', isDark ? darkBackground : lightBackground);
    root.style.setProperty('--text-color', isDark ? darkText : lightText);
}
