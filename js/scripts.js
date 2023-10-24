//business logic 

function wordCounter(text) {
    if (text.trim().length === 0) {
        return 0;
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

function numberOfOCcurenencesInText(word, text) {
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function (element) {
        if (element.toLowerCase().includes(word.toLowerCase())) {
            wordCount++;
        }
    })
    return wordCount;
}

function omitsOffensiveWords(text) {
    const censoredString = text.toLowerCase().replace("zoinks", "Kelly Clarkson");
    const censoredTwice = censoredString.toLowerCase().replace("muppeteer", "Kelly Clarkson");
    const censoredThrice = censoredTwice.toLowerCase().replace("biffaroni", "Kelly Clarkson");
    const censoredFourTimes = censoredThrice.toLowerCase().replace("loopdaloop", "Kelly Clarkson")
    return censoredFourTimes;
}

function omitsOffensiveWordsV2(text) {
    const textArray = text.split(" ");
    let = censoredArray = [];
    textArray.forEach(function (element) {
        if (element.toLowerCase() !== "zoinks" && element.toLowerCase() !== "muppeteer" && element.toLowerCase() !== "biffaroni" && element.toLowerCase() !== "loopdaloop") {
            censoredArray.push(element);
        }
    })

    return censoredArray.join(" ");
}