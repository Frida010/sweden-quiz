// Questions and answers for game area

const questions = [

    {
        question: "What is the name of Sweden's capital city?",
        answers: [
            { text: "Skellefteå", correct: false },
            { text: "Stockholm", correct: true },
            { text: "Sundsvall", correct: false },
            { text: "Söderköping", correct: false },
        ]
    },
    {
        question: "How much of Sweden's surface is covered by trees?",
        answers: [
            { text: "1/3", correct: false },
            { text: "2/7", correct: false },
            { text: "2/3", correct: true },
            { text: "4/8", correct: false },
        ]
    },
    {
        question: "What is the currency of Sweden?",
        answers: [
            { text: "Euro", correct: false },
            { text: "Swedish Pesos (SEP)", correct: false },
            { text: "Swedish Crowns (SEK)", correct: true },
            { text: "Swedish Dollar (SED)", correct: false },
        ]
    },
    {
        question: "What is the most sacred house rule in Sweden?",
        answers: [
            { text: "Take your shoes off indoors", correct: true },
            { text: "No alcohol at home", correct: false },
            { text: "No eating in-front of the TV", correct: false },
            { text: "No pets allowed indoors", correct: false },
        ]
    },
    {
        question: "What is the coldest temperature ever recorded in Sweden?",
        answers: [
            { text: "-56,6 Celsius", correct: false },
            { text: "-42,6 Celsius ", correct: false },
            { text: "-46,6 Celsius ", correct: false },
            { text: "-52,6 Celsius", correct: true },
        ]
    },
    {
        question: "How many lakes are there in Sweden? (circa)",
        answers: [
            { text: "1 000", correct: false },
            { text: "10 000", correct: false },
            { text: "100 000", correct: true },
            { text: "1 000 000", correct: false },
        ]
    }

];

// Variables for game area

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');


let currentQuestionIndex = 0;
let score = 0;

// Reset the current question index and score

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

// Dispalys the question and answers inside the buttons. 

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Checking for the right and wrong answers.

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// Show score function

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

// Next-button function

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();