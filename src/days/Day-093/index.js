const button = document.getElementById('notification');
const title = document.querySelector('title');
const messages = document.querySelector('.unread');

const originalTitle = title.innerText;
let unread = 0;

button.addEventListener('click', () => {
    messages.classList.remove('pulse');
    messages.setAttribute('unread', ++unread > 9 ? '+9' : unread);
    messages.classList.add('new-messages');
    title.innerText = `(${unread}) ${originalTitle}`;

    if (unread > 1) {
        setTimeout(() => {
            messages.classList.add('pulse');
        }, 0);
    }
});
