window.onload = () => {
    const [collapsible] = document.getElementsByClassName('collapsible');
    const [paragraph] = document.getElementsByClassName('paragraph');
    const arrow = document.getElementById('arrow');

    let isOpen = false;
    collapsible.addEventListener('click', () => {
        if (!isOpen) {
            paragraph.style.maxHeight = paragraph.scrollHeight + 'px';
            paragraph.style.paddingBottom = '15px';
            arrow.style.transform = 'rotate(180deg)';
        } else {
            paragraph.style.maxHeight = '0px';
            paragraph.style.paddingBottom = '0px';
            arrow.style.transform = 'rotate(0deg)';
        }
        isOpen = !isOpen;
    });
};
