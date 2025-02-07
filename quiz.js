const quizData = [
    {
        question: "What is the name of the nerve that controls the neck muscles?",
        option: ["Cranial nerve", "Median nerve", "Ulnar nerve", "Cervical plexus"],
        answer: "Cervical plexus"
    },
    {
        question: "what is the capital of Denmark?",
        option: ["Sweden", "Nigeria", "France", "Copenhagen"],
        answer: "Copenhagen"
    },
    {
        question: "it is said to be known that planet Pluto can support life?",
        option: ["Yes", "Inbetween", "Not sure", "No"],
        answer: "No"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionEl = document.getElementById("option");
const resultEl = document.getElementById("result");
const progressEl = document.getElementById("progress");

function loadQuestion() {
    const { question, options } = quizData[currentQuestionIndex];
    questionEl.textContent = question;
    optionsEl.innerHTML = "";

    options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => checkAnswer(option);
        optionsEl.appendChild(button);
    });

    progressEl.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
}

function checkAnswer(selectedAnswer) {
    if (selectedAnswer === quizData[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;
    currentQuestionIndex < quizData.length ? loadQuestion() : showResult();
}

function showResult() {
    questionEl.remove();
    optionEl.remove();
    progressEl.remove();
    resultEl.textContent = `You scored ${score} out of ${quizData.length}`;
}

document.addEventListener("DOMContentLoaded", loadQuestion);