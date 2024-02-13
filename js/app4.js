function getSentenceWithDeletedSymbols(sentence, letters) {
    let newSentence = '';
    for (let i = 0; i < sentence.length; i++) {
        if (!letters.includes(sentence[i])) {
            newSentence += sentence[i];
        }
    }
    return newSentence;
}

let sentence = prompt("Enter sentence");
let arrayOfLetters = prompt("Enter letters to delete").split(' ');
alert(getSentenceWithDeletedSymbols(sentence, arrayOfLetters));