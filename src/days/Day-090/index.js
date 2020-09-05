const HOUR_ANIMATION_NAME = 'hour-animation';
const MINUTE_ANIMATION_NAME = 'minute-animation';
const SECOND_ANIMATION_NAME = 'second-animation';

const clock = document.querySelector('.clock');

window.onload = () => {
    const secondsHand = document.getElementById('seconds-hand');
    const minutesHand = document.getElementById('minutes-hand');
    const hoursHand = document.getElementById('hours-hand');

    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDeg = getAngle(seconds);
    const minutesDeg = getAngle(minutes);
    const hoursDeg = hours * 30 + minutes / 2;

    let hourAnimation = createRotateAnimation(HOUR_ANIMATION_NAME, hoursDeg, hoursDeg + 360);
    let minuteAnimation = createRotateAnimation(
        MINUTE_ANIMATION_NAME,
        minutesDeg,
        minutesDeg + 360
    );
    let secondAnimation = createRotateAnimation(
        SECOND_ANIMATION_NAME,
        secondsDeg,
        secondsDeg + 360
    );

    addAnimation(secondsHand, SECOND_ANIMATION_NAME, '60s');
    addAnimation(minutesHand, MINUTE_ANIMATION_NAME, '3600s');
    addAnimation(hoursHand, HOUR_ANIMATION_NAME, '43200s');

    document.querySelector(
        'style'
    ).innerHTML = `${hourAnimation}\n${minuteAnimation}\n${secondAnimation}`;

    clock.style.display = 'block';
};

function getAngle(number) {
    return number * 6;
}

function addAnimation(element, animation_name, time) {
    element.style.animation = `${animation_name} ${time} linear infinite`;
}

function createRotateAnimation(name, startDeg, endDeg) {
    return `
    @keyframes ${name}{
        from{
            transform: rotate(${startDeg}deg);
        }

        to{
            transform: rotate(${endDeg}deg);
        }
    }
    `;
}
