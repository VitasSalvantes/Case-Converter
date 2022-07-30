/*
 * MIT License
 *
 * Copyright (c) 2022 Ivan Bobrov
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to
 * whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

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
