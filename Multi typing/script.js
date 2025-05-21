const span = document.querySelector('span');
const typingWords = ['Devloper.', 'Student.', 'Coder.', 'Teacher.', 'Youtuber.'];


let wordListIdx = 0;
let skipUpdate = 0;
let characterIndex = 0;
let reverseType = false;


const intervalId = setInterval(() => {
    if (skipUpdate) {
        skipUpdate--
        return
    }

    if (!reverseType) {
        skipUpdate = 2
        span.innerText = span.innerText + typingWords[wordListIdx][characterIndex]
        characterIndex++
    } else {
        span.innerText = span.innerText.slice(0, span.innerText.length - 1);
        characterIndex--
    }

    if (characterIndex === typingWords[wordListIdx].length) {
        skipUpdate = 6
        reverseType = true
    }


    if (span.innerText.length === 0 && reverseType) {
        reverseType = false
        wordListIdx++
    }

    if (wordListIdx === typingWords.length) {
        wordListIdx = 0;
    }

    console.log("Hello");
}, 100)
