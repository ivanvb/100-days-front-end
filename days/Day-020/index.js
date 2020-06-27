const centralPanel = document.getElementById('central-panel');
const leftPanel = document.getElementById('left-panel');
const rightPanel = document.getElementById('right-panel');

const [title] = document.getElementsByClassName('title');
const [container] = document.getElementsByClassName('container');

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const [leftButton] = document.getElementsByClassName('left-arrow');
const [rightButton] = document.getElementsByClassName('right-arrow');

let now = new Date();

(function init() {
    setSideMonths();
    fillPanelWithMonthlyCalendar(now, centralPanel);
    updateMonthTitle();
    rightButton.addEventListener('click', (e) => {
        move('right');
    });

    leftButton.addEventListener('click', (e) => {
        move('left');
    });
})();

function setSideMonths() {
    fillPanelWithMonthlyCalendar(getPreviousMonth(now), leftPanel);
    fillPanelWithMonthlyCalendar(getNextMonth(now), rightPanel);
}

function fillPanelWithMonthlyCalendar(date, grid) {
    let now = new Date();
    let firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDayOfPreviousMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    let days = [];

    for (let i = firstDayOfMonth.getDay(); i > 1; i--) {
        days.unshift(`<span class="week-day inactive">${lastDayOfPreviousMonth--}</span>`);
    }

    const DAYS_IN_MONTH = getDaysInMonth(date.getMonth(), date.getFullYear());
    for (let i = 1; i <= DAYS_IN_MONTH; i++) {
        let isCurrentDay =
            now.getFullYear() === date.getFullYear() &&
            now.getMonth() === date.getMonth() &&
            now.getDate() === i;

        isCurrentDay
            ? days.push(`<span class="week-day"><div class="current">${i}</div></span>`)
            : days.push(`<span class="week-day">${i}</span>`);
    }

    const MAX_WEEKS_PER_MONTH = 6;
    const DAYS_PER_WEEK = 7;
    const GRID_SPACES = MAX_WEEKS_PER_MONTH * DAYS_PER_WEEK;

    let i = 0;
    while (days.length < GRID_SPACES) {
        days.push(`<span class="week-day inactive">${++i}</span>`);
    }

    const DAY_NAMES = `<div class="day">Mon</div>
    <div class="day">Tue</div>
    <div class="day">Wed</div>
    <div class="day">Thu</div>
    <div class="day">Fri</div>
    <div class="day">Sat</div>
    <div class="day">Sun</div>`;

    grid.innerHTML = DAY_NAMES + days.join(' ');
}

function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

function updateMonthTitle() {
    title.innerHTML = `${months[now.getMonth()]} ${now.getFullYear()}`;
}

function move(direction) {
    let animatedMoveClass = direction === 'left' ? 'move-left' : 'move-right';
    container.classList.add(animatedMoveClass);
    container.onanimationend = () => {
        let nextMonthToDisplay = direction === 'left' ? getPreviousMonth(now) : getNextMonth(now);
        now = nextMonthToDisplay;
        fillPanelWithMonthlyCalendar(nextMonthToDisplay, centralPanel);
        updateMonthTitle();
        setSideMonths();
        container.classList.remove(animatedMoveClass);
    };
}

function getPreviousMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
}

function getNextMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
}
