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
        question: "What is the coldest temperature ever recored in Sweden?",
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