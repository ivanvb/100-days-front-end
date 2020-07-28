const send = document.querySelector('button');
const textarea = document.querySelector('textarea');
const mail = document.querySelector('.mailbox');
const message = document.querySelector('.message');

send.addEventListener('click', () => {
    textarea.classList.add('send');
    mail.classList.add('close');
    mail.classList.add('sendToMailbox');
    message.classList.add('appear');
});
