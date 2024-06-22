const quizData = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Jupiter", correct: false },
            { text: "Mars", correct: true },
            { text: "Saturn", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Jane Austen", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    }
];

const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const questionElement = document.getElementById('question');
const answersContainer = document.getElementById('answers-container');
const scoreElement = document.getElementById('score-value');

let currentQuestionIndex = 0;
let score = 0;

// Function to load next question
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersContainer.innerHTML = '';

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('answer-btn');
        button.addEventListener('click', () => selectAnswer(answer.correct));
        answersContainer.appendChild(button);
    });
}

// Function to handle answer selection
function selectAnswer(isCorrect) {
    if (isCorrect) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Function to show quiz result
function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.textContent = score;
}

// Function to restart quiz
function restartQuiz() {
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

// Event listeners
document.getElementById('submit-btn').addEventListener('click', () => selectAnswer());
document.getElementById('restart-btn').addEventListener('click', restartQuiz);

// Initial load
loadQuestion();
