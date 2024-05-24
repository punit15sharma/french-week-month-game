const vocabulary = {
    "Monday": "Lundi",
    "Tuesday": "Mardi",
    "Wednesday": "Mercredi",
    "Thursday": "Jeudi",
    "Friday": "Vendredi",
    "Saturday": "Samedi",
    "Sunday": "Dimanche",
    "January": "Janvier",
    "February": "Février",
    "March": "Mars",
    "April": "Avril",
    "May": "Mai",
    "June": "Juin",
    "July": "Juillet",
    "August": "Août",
    "September": "Septembre",
    "October": "Octobre",
    "November": "Novembre",
    "December": "Décembre"
};


let words = Object.keys(vocabulary);
let randomWord = words[Math.floor(Math.random() * words.length)];
let correctCounter = 0;

document.getElementById('randomWord').textContent = randomWord;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const userGuess = guessInput.value.trim();
    const languageSelect = document.getElementById('languageSelect').value;
    let correctTranslation;
    if (languageSelect === "englishToFrench") {
        correctTranslation = vocabulary[randomWord];
    } else if (languageSelect === "frenchToEnglish"){
        correctTranslation = randomWord.toLowerCase();
    }

    if (correctTranslation) {
        if (userGuess.toLowerCase() === correctTranslation.toLowerCase()) {
            if (languageSelect === "frenchToEnglish") {
                message.textContent = `Correct! The translation for "${vocabulary[randomWord]}" is "${correctTranslation}".`;
                message.style.color = "green";
            }
            else{
                message.textContent = `Correct! The translation for "${randomWord}" is "${correctTranslation}".`;
                message.style.color = "green";
            }
            correctCounter++;
            document.getElementById('correctCounter').textContent = correctCounter;
        } else {
            if (languageSelect === "frenchToEnglish") {
                message.innerHTML = `Incorrect. The correct translation for "${vocabulary[randomWord]}" is "${correctTranslation}". Checkout <a href="https://github.com/punit15sharma/french-vocuabulary-practice/blob/main/French_English_Vocabulary.pdf"> this</a> `;
                message.style.color = "red";
            }
            else{
            message.innerHTML = `Incorrect. The correct translation for "${randomWord}" is "${correctTranslation}". Checkout <a href="https://github.com/punit15sharma/french-vocuabulary-practice/blob/main/French_English_Vocabulary.pdf"> this</a> `;
            message.style.color = "red";
            }
        }
    } else {
        message.innerHTML = `Something went wrong from our side!!. The correct translation is "${randomWord}". Checkout <a href="https://github.com/punit15sharma/french-vocuabulary-practice/blob/main/French_English_Vocabulary.pdf"> this</a> `;
        message.style.color = "red";
        console.log('No matching translation found for:', randomWord);
    }

    // Reset the game after 5 seconds
    setTimeout(() => {
        resetGame();
    }, 5000);
}

function resetGame() {
    const languageSelect = document.getElementById('languageSelect').value;
    randomWord = words[Math.floor(Math.random() * words.length)];

    if (languageSelect === "englishToFrench") {
        document.getElementById('randomWord').textContent = randomWord;
    } else {
        document.getElementById('randomWord').textContent = vocabulary[randomWord];
    }

    document.getElementById('guessInput').value = '';
    document.getElementById('message').textContent = '';
}
