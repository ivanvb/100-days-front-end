const [hour] = document.getElementsByClassName('hour');
const [minutes] = document.getElementsByClassName('minutes');

const [date] = document.getElementsByClassName('date');

updateTime();
setInterval(updateTime, 1000);

function updateTime() {
    const now = new Date();
    hour.innerText = now.getHours();
    minutes.innerText = now.getMinutes().toString().padStart(2, '0');

    date.innerHTML = humanReadableDate(now);
}

function humanReadableDate(date) {
    const options = { year: 'numeric', month: 'long', day: '2-digit', weekday: 'short' };
    return date.toLocaleDateString(undefined, options);
}
