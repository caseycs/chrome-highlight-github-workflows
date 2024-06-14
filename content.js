function changeSpanBackground() {
    const classesToCheck = ['d-block', 'text-small'];
    const spans = document.querySelectorAll('span');

    spans.forEach(span => {
        const hasClass = classesToCheck.some(className => span.classList.contains(className));
        if (hasClass) {
            const text = span.textContent.toLowerCase();

            color = null

            if (text.includes('deploy v2')) {
                console.log(span.textContent)
                color = '#ffd6d6'
            } else if (text.includes('migration v2')) {
                color = '#fff3d6'
            }

            if (color != null) {
                const parentDiv = span.closest('.Box-row, .js-socket-channel, .js-updatable-content');
                console.log(parentDiv)
                if (parentDiv) {
                    parentDiv.style.backgroundColor = color;
                }
            }
        }
    });
}

changeSpanBackground();
