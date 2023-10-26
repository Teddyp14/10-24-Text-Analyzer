//Utility Logic

function isEmpty() {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i].trim().length === 0) {
            return true;
        }
    }
    return false;
}

//business logic 

function wordCounter(text) {
    if (isEmpty(text)) {
        return 0
    }
    let wordCount = 0;
    const textArray = text.split(" ");
    textArray.forEach(function (element) {
        if (!Number(element)) {
            wordCount++;
        }
    })
    return wordCount;
}

function numberOfOccurenencesInText(word, text) {
    if (isEmpty(word)) {
        return 0;
    }
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function (element) {
        if (element.toLowerCase().includes(word.toLowerCase())) {
            wordCount++;
        }
    })
    return wordCount;
}

function omitsOffensiveWordsV2(text) {
    const textArray = text.split(" ");
    let = censoredArray = [];
    textArray.forEach(function (element) {
        if (element.toLowerCase() !== "zoinks" &&
            element.toLowerCase() !== "muppeteer" &&
            element.toLowerCase() !== "biffaroni" &&
            element.toLowerCase() !== "loopdaloop") {
            censoredArray.push(element);
        }
    })

    return censoredArray.join(" ");
}

//Pig Latin 

const vowelArray = ["a", "e", "i", "o", "u"];

function vowelWords(text) {
    if (vowelArray.includes(text[0])) {
        return text + "way"
    } else {
        return consonant(text)
    }
}

function consonant(text) {
    const vowelArray = ["a", "e", "i", "o", "u"];
    if (text.slice(0, 2) === "qu") {
        return text.slice(3) + "quay"
    } else if (text.slice(0, 3) === "squ") {
        return text.slice(1) + "say"
    }
    for (let i = 0; i < text.length; i++) {
        if (vowelArray.includes(text[i])) {
            let firstLetters = text.slice(0, i)
            let lastLetters = text.slice(i)
            return lastLetters + firstLetters + "ay";
        }
    }
}

//UI Logic
function boldPassage(word, text) {
    if (isEmpty(word, text)) {
        return null;
    }
    const p = document.createElement("p");
    let textArray = text.split(" ");
    textArray.forEach(function (element, index) {
        if (word === element) {
            const bold = document.createElement("strong");
            bold.append(element);
            p.append(bold);
        } else {
            p.append(element);
        }
        if (index !== (textArray.length - 1)) {
            p.append(" ");
        }
    });
    return p;
}

function handleFormSubmission() {
    event.preventDefault();
    const passage = document.getElementById("text-passage").value;
    const word = document.getElementById("word").value;
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurenencesInText(word, passage);
    document.getElementById("total-count").innerText = wordCount;
    document.getElementById("selected-count").innerText = occurrencesOfWord;

    let boldedPassage = boldPassage(word, passage);
    if (boldedPassage) {
        document.querySelector("div#bolded-passage").append(boldedPassage);
    } else {
        document.querySelector("div#bolded-passage").innerText = null;
    }
}

window.addEventListener("load", function () {
    document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});