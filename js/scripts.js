//Utility Logic

function isEmpty(testString) {
    return (testString.trim().length === 0);
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

function numberOfTimesWordAppears(text) {
    const textArray = text.toLowerCase().split(" ");
    let wordCounterArray = []
    textArray.forEach(function (element) {
        wordCounterArray.push({ element, count: 1 })
    })
    return wordCounterArray
}


//UI Logic
function boldPassage(word, text) {
    if (isEmpty(word) || isEmpty(text)) {
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