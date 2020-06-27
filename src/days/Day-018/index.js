window.onload = () => {
    const search = document.getElementById('search');
    const [paragraph] = document.getElementsByClassName('text');
    const [found] = document.getElementsByClassName('found');

    const upButton = document.getElementById('up-button');
    const downButton = document.getElementById('down-button');

    let originalText = paragraph.innerHTML;

    let highlightedMatchIndex = 0;
    let matches = 0;

    search.addEventListener('input', (e) => {
        highlightedMatchIndex = 0;
        const inputFieldHasText = e.target.value.length > 0;

        matches = inputFieldHasText
            ? (originalText.match(new RegExp(e.target.value, 'ig')) || []).length
            : 0;

        updateFoundIndexVisual();
        let highlightedText = inputFieldHasText
            ? highlightText(e.target.value, originalText)
            : originalText;
        let indexedAndHighlightedText = highlightNthMatch(highlightedMatchIndex, highlightedText);
        paragraph.innerHTML = indexedAndHighlightedText;
    });

    function highlightText(filter, text) {
        const highlightedText = text.replace(new RegExp(`${filter}`, 'ig'), (match) => {
            return `<span class="highlight">${match}</span>`;
        });

        return highlightedText;
    }

    function highlightNthMatch(n, highlightedText) {
        const textWithCurrentActiveRemoved = highlightedText.replace(/(?<=highlight) active/g, '');
        let i = 0;
        return textWithCurrentActiveRemoved.replace(
            new RegExp('(?<=<span class=")highlight', 'g'),
            (match) => {
                return i++ === n ? 'highlight active' : match;
            }
        );
    }

    function updateFoundIndexVisual() {
        if (matches === 0) {
            found.innerHTML = '';
        } else {
            found.innerHTML = `${highlightedMatchIndex + 1}/${matches}`;
        }
    }

    upButton.addEventListener('click', () => {
        uppdateHighlight('up');
    });

    downButton.addEventListener('click', (e) => {
        uppdateHighlight('down');
    });

    function uppdateHighlight(direction) {
        const upButtonIndexClick =
            highlightedMatchIndex + 1 >= matches ? 0 : highlightedMatchIndex + 1;
        const downButtonIndexClick =
            highlightedMatchIndex - 1 < 0 ? matches - 1 : highlightedMatchIndex - 1;

        highlightedMatchIndex = direction === 'up' ? upButtonIndexClick : downButtonIndexClick;

        let indexedAndHighlightedText = highlightNthMatch(
            highlightedMatchIndex,
            paragraph.innerHTML
        );
        paragraph.innerHTML = indexedAndHighlightedText;
        updateFoundIndexVisual();
    }
};
