const imgInput = document.getElementById('img');

imgInput.addEventListener('change', (e) => {
    const files = e.target.files;
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            document.querySelector('img').setAttribute('src', fr.result);
            document.querySelector('.container').style.display = 'block';
            document.getElementById('message').style.display = 'block';
        };
        fr.readAsDataURL(files[0]);
    }
});
