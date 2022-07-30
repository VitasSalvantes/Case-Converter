const upperCaseButton = document.getElementById("upper-case");
const lowerCaseButton = document.getElementById("lower-case");
const properCaseButton = document.getElementById("proper-case");
const sentenceCaseButton = document.getElementById("sentence-case");
const saveTextFileButton = document.getElementById("save-text-file");
const textArea = document.querySelector(".input-text");

upperCaseButton.addEventListener("click", function () {
    textArea.value = textArea.value.toUpperCase();
});

lowerCaseButton.addEventListener("click", function () {
    textArea.value = textArea.value.toLowerCase();
});

properCaseButton.addEventListener("click", function () {
    convertFirstCharsToUpperCase(" ");
});

sentenceCaseButton.addEventListener("click", function () {
    convertFirstCharsToUpperCase(". ");
});

saveTextFileButton.addEventListener("click", function () {
    download("text.txt", textArea.value);
});

function convertFirstCharsToUpperCase(separator) {
    const words = textArea.value.toLowerCase().split(separator);

    textArea.value = words.map((word) => {
        const chars = word.split("");
        chars[0] = typeof chars[0] === "undefined" ? "" : chars[0].toUpperCase();
        return chars.join("");
    }).join(separator);
}

function download(filename, text) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
