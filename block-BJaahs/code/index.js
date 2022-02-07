// Without object
let title = 'Where is the capital of Jordan';
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex = 1;

function isAnswerCorrect(index) {
    return index === correctAnswerIndex;
}
function getCorrectAnswer() {
    return `Correct answer is ${options[correctAnswerIndex]}`;
}

// With Object

let question = {
    title : 'Where is the capital of Jordan',
    options :  ,
    correctAnswerIndex : 1,
    isAnswerCorrect(index) {
        return index === question.correctAnswerIndex;
    },
    getCorrectAnswer() {
        return `Correct answer is ${question.options[question.correctAnswerIndex]}`;
    }
   };

// Using function

function createObject(title, options, correctAnswerIndex) {
    let question = {};
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    question.isAnswerCorrect = function(index) {
        return index === question.correctAnswerIndex;
    },
    question.getCorrectAnswer = function() {
        return `Correct answer is ${question.options[question.correctAnswerIndex]}`;
    }
 return question;
}

// this

function createObject(title, options, correctAnswerIndex) {
    let question = {};
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    question.isAnswerCorrect = function(index) {
        return index === this.correctAnswerIndex;
    },
    question.getCorrectAnswer = function() {
        return `Correct answer is ${this.options[this.correctAnswerIndex]}`;
    }
 return question;
}

