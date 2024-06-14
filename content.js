function changeSpanBackground() {
    const classesToCheck = ['d-block', 'text-small'];
    const spans = document.querySelectorAll('span');

    spans.forEach(span => {
        const hasClass = classesToCheck.some(className => span.classList.contains(className));
        if (hasClass) {
            const text = span.textContent.toLowerCase();

            color = null

            if (text.includes('deploy v2')) {
                color = '#ffd6d6'
            } else if (text.includes('migration v2')) {
                color = '#fff3d6'
            }

            if (color != null) {
                const parentDiv = span.closest('.Box-row, .js-socket-channel, .js-updatable-content');
                if (parentDiv) {span
                    parentDiv.style.backgroundColor = color;
                }
            }
        }
    });
}

changeSpanBackground();

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    alert('updated from contentscript');
 });