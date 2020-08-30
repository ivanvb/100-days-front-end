const months = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sept',
    'oct',
    'nov',
    'dec',
];

const month = document.querySelector('.month');
const day = document.querySelector('.day');

const now = new Date();

month.innerHTML = months[now.getMonth()];
day.innerHTML = now.getDate();
