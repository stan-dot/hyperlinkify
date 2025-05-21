document.body.style.border = "5px solid red";


const source = document.querySelector("div.moz24-newsletter-wrapper");

source.addEventListener("copy", (event) => {
    const selection = document.getSelection();
    const selectedText = selection.toString();
    const websiteUrl = window.location.href; // You can customize this if needed

    const markdownLink = `[${selectedText}](${websiteUrl})`;

    event.clipboardData.setData("text/plain", markdownLink);
    event.preventDefault();
});
