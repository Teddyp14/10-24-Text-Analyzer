Describe: WordCounter()

Test: "It should return 1 if a passafe has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");

Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("      ")
Expected Output: 0

Test" "It should not count numbers as words."
Code: wordCounter("Hello there 14 15.")
Expected Output: 2

Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Describe: omitOffensiveWords()

Test: "It should return the original text if there are no bad words."
Code:
const text = "A sentence with no bad words."
omitOffensiveWords("A sentence with no bad words.")
Expected Output: "A sentence with no bad words."

Test: "It should replace the word "zoinks" with "Kelly Clarkson"."
Code:
const word1 = "zoinks";
omitOffensiveWords("Scooby-Doo likes to say zoinks!")
Expected output: "Scooby-Doo likes to say Kelly Clarkson!"

Test: "It should replace the word "muppeteer" with "Kelly Clarkson"."
Code:
const word2 = muppeteer
omitOffensiveWords("A muppeteer is not the same as a rocketeer.")
Expected output: "A Kelly Clarkson is not the same as a rocketeer."

Test: "It should replace the word "biffaroni" with "Kelly Clarkson"."
Code:
const word3 = biffaroni
omitOffensiveWords("That dude just took a huge biffaroni.")
Expected output: "That dude just took a huge Kelly Clarkson."

Test: "It should replace the word "loopdaloop" with "Kelly Clarkson"."
Code:
const word4 = loopdaloop
omitOffensiveWords("There they go 'round the loopdaloop.")
Expected output: "There they go 'round the Kelly Clarkson."