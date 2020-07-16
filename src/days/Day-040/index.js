const [bait] = document.getElementsByClassName('banner_ad');
const [closeButton] = document.getElementsByClassName('close');

if (bait.clientHeight === 0) {
    toggleAdblockBanner(true);
}

closeButton.addEventListener('click', () => {
    toggleAdblockBanner(false);
});

function toggleAdblockBanner(open) {
    const [body] = document.getElementsByTagName('body');
    const [banner] = document.getElementsByTagName('aside');
    const [filter] = document.getElementsByClassName('filter');

    body.style.overflowY = open ? 'hidden' : 'auto';
    open ? banner.classList.remove('hidden') : banner.classList.add('hidden');
    open ? filter.classList.remove('hidden') : filter.classList.add('hidden');
}
