const code = document.querySelector('.code pre');
const copyButton = document.querySelector('button');

copyButton.addEventListener('click', (e) => {
    navigator.clipboard.writeText(code.innerHTML);
    alert('The code has been copied! Check your clipboard');
});
