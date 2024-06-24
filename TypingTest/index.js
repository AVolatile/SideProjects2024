const texts = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "To be or not to be, that is the question.",
    "All that glitters is not gold.",
    "The only thing we have to fear is fear itself."
];

let currentIndex = 0;
let currentText = "";
let timer;
let timeElapsed = 0;
let errors = 0;

const textDisplay = document.getElementById("text-display");
const textInput = document.getElementById("text-input");
const timeElement = document.getElementById("time");
const errorsElement = document.getElementById("errors");
const wpmElement = document.getElementById("wpm");
const startButton = document.getElementById("start-button");

startButton.addEventListener("click", startTest);

textInput.addEventListener("input", () => {
    const typedText = textInput.value;
    if (typedText === currentText) {
        clearInterval(timer);
        calculateWPM();
        textInput.disabled = true;
        startButton.disabled = false;
        startButton.textContent = "Start Test";
    } else {
        checkErrors(typedText);
    }
});

function startTest() {
    currentIndex = Math.floor(Math.random() * texts.length);
    currentText = texts[currentIndex];
    textDisplay.textContent = currentText;
    textInput.value = "";
    textInput.disabled = false;
    textInput.focus();
    timeElapsed = 0;
    errors = 0;
    updateStats();
    startButton.disabled = true;
    startButton.textContent = "Typing...";
    timer = setInterval(() => {
        timeElapsed++;
        updateStats();
    }, 1000);
}

function checkErrors(typedText) {
    const textArray = currentText.split("");
    const typedArray = typedText.split("");
    errors = 0;
    textArray.forEach((char, index) => {
        if (typedArray[index] && char !== typedArray[index]) {
            errors++;
        }
    });
    updateStats();
}

function updateStats() {
    timeElement.textContent = timeElapsed;
    errorsElement.textContent = errors;
}

function calculateWPM() {
    const wordsTyped = textInput.value.trim().split(" ").length;
    const minutesElapsed = timeElapsed / 60;
    const wpm = Math.round(wordsTyped / minutesElapsed);
    wpmElement.textContent = wpm;
}
