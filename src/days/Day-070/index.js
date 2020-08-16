const file = document.getElementById('file');
const content = document.getElementById('content');

file.addEventListener('input', (e) => {
    console.log(e.target.files);
    const reader = new FileReader();
    reader.addEventListener('load', (evt) => {
        console.log(evt);
        content.innerHTML = evt.target.result;
    });
    reader.readAsText(e.target.files[0], 'UTF-8');
});
