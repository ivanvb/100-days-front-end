export const generateRandomHex = () => {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padEnd(6, '0')}`;
};

export const rgb2hex = (rgb) => {
    if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ('0' + parseInt(x).toString(16)).slice(-2);
    }
    return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
};

export const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
