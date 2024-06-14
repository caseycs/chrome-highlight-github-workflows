document.getElementById('changeBackground').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: changeDivBackground
        });
    });
});

function changeDivBackground() {
    const divs = document.querySelectorAll('div');

    divs.forEach(div => {
        const text = div.textContent.toLowerCase();

        if (text.includes('warning')) {
            div.style.backgroundColor = 'yellow';
        } else if (text.includes('error')) {
            div.style.backgroundColor = 'red';
        } else if (text.includes('success')) {
            div.style.backgroundColor = 'green';
        }
    });
}