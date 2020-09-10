const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.addEventListener('input', (e) => {
        if (e.target.value.length > 0 && i < inputs.length - 1) {
            inputs[i + 1].focus();
        } else if (e.target.value.length === 0 && i > 0) {
            inputs[i - 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && i > 0 && e.target.value.length === 0) {
            inputs[i - 1].focus();
        }
    });
}
