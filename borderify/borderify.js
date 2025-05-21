document.body.style.border = "5px solid red";


const source = document.querySelector("div.moz24-newsletter-wrapper");

source.addEventListener("copy", (event) => {
    const selection = document.getSelection();
    const selectedText = selection.toString();

    let anchorHref = null;
    let node = selection.anchorNode;

    // Traverse upwards to find a local anchor <a href="#...">
    while (node && node !== document.body) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            const anchor = node.querySelector?.('a[href^="#"]');
            if (anchor) {
                anchorHref = anchor.getAttribute("href");
                break;
            }
        }
        node = node.parentNode;
    }

    const baseUrl = window.location.origin + window.location.pathname;
    const link = anchorHref ? `${baseUrl}${anchorHref}` : window.location.href;

    const markdownLink = `[${selectedText}](${link})`;

    event.clipboardData.setData("text/plain", markdownLink);
    event.preventDefault();
});
