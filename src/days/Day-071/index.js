const button = document.getElementById('notifyButton');

button.addEventListener('click', async () => {
    if (!('Notification' in window)) {
        alert('Your browser does not support web notifications 😞');
    } else if (Notification.permission === 'granted') {
        sendNotification();
    } else {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            sendNotification();
        }
    }
});

function sendNotification() {
    new Notification('A Web notification', {
        body: 'Hello there! This is a web notification! 🎅',
        vibrate: window.navigator.vibrate([200, 100, 200, 100, 500]),
    });
}

self.addEventListener('notificationclick', (e) => {
    console.log(e);
});
