function createFileAndDownload(filename, text) {
    const dummyLink = document.createElement('a');
    dummyLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    dummyLink.setAttribute('download', filename);

    dummyLink.style.display = 'none';
    document.body.appendChild(dummyLink);

    dummyLink.click();

    document.body.removeChild(dummyLink);
}

document.getElementById('downloadForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const filename = document.getElementById('filename').value;
    const content = document.getElementById('file-content').value;

    createFileAndDownload(filename, content);
    document.querySelector('form').reset();
});
