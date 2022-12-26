// Markdown editor
const textEditor = document.querySelector('.textarea');
const previewArea = document.querySelector('.previewEditor');
const converter = new showdown.Converter();

const renderPreview = (value) => {
    const html = converter.makeHtml(value);
    previewArea.innerHTML = html;
}


textEditor.addEventListener('keyup', (e) => {
    const value = e.target.value;
    const html = converter.makeHtml(value);
    window.localStorage.setItem('markdown', value);
    previewArea.innerHTML = html;
    console.log(value);
});


const storedMarkdown = window.localStorage.getItem('markdown');


if (storedMarkdown) {
    textEditor.value = storedMarkdown;
    renderPreview(storedMarkdown);
}


let help_button = document.querySelector(".help");
let help_instructions = document.querySelector(".help2");

// clear the local storage when the user has submitted the answer
let submitAnswer = document.querySelector(".btn-success");

submitAnswer.addEventListener("click", () => {
    window.localStorage.clear();
});

