document.body.style.border = "5px solid red";


const source = document.querySelector("div.moz24-newsletter-wrapper");

source.addEventListener("copy", (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
    event.preventDefault();
});
