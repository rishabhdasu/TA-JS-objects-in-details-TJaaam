let form = document.querySelector("form");
let previous = document.querySelector(".prev");
let next = document.querySelector(".next");
let quizElm = document.querySelector(".quiz");
let totalQuestions = document.querySelector("header p");
let checkScore = document.querySelector(".checkScore");
let startButton = document.querySelector(".start");
let displayResult = document.querySelector(".result");

class Question {
    constructor(title, options, correctAnswerIndex) {
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
    isCorrect(answer) {
        return this.options[this.correctAnswerIndex] === answer;
    }
    getCorrectAnswer() {
        return `Correct answer is ${this.options[this.correctAnswerIndex]}`
    }
}

class Quiz {
    constructor(questions = [], scoreTotal = 0) {
        this.questions = questions;
        this.activeIndex = 0;
        this.scoreTotal = scoreTotal;
    }

    incrementScore() {
        this.scoreTotal = this.scoreTotal + 1;
   }

    nextQuestion() {
        this.activeIndex = this.activeIndex + 1;
        this.createUI();
    }

    previousQuestion() {
        this.activeIndex = this.activeIndex - 1;
        this.createUI();
    }

    addQuestion(title, options, answerIndex ) {
        let question = new Question(title, options, answerIndex);
        this.questions.push(question);
    }

    handleButtons() { 
        if(this.activeIndex === 0) {
            previous.style.visibility = "hidden";
            checkScore.style.display = "none";
            next.style.display = "block";
        } else if(this.activeIndex === (this.questions.length - 1)) {
            next.style.display = "none";
            previous.style.visibility = "visible";
        } else {
            previous.style.visibility = "visible";
            next.style.display = "block";
            checkScore.style.display = "none";
        }
    }

    createUI() {
        quizElm.innerHTML = "";
        let activeQuestion = this.questions[this.activeIndex]; 
        let form = document.createElement("form");
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        legend.innerText = `${this.activeIndex + 1}. ${activeQuestion.title}`;
        let options = document.createElement("div");
        options.classList.add(".options");
        let button = document.createElement("button");
        button.innerText = "Submit";
        
        activeQuestion.options.forEach((option, index) => {
            let input = document.createElement("input");
            let inputWrapper = document.createElement("div");
            inputWrapper.classList.add(".inputWrapper");
            input.type = "radio";;
            input.name = "options";
            input.id = `option-${index}`;
            input.required = true;
            input.value = option;
            let label = document.createElement("label");
            label.for = `option-${index}`;
            label.innerText = option;
            inputWrapper.append(input, label);

            form.addEventListener(`submit`, (event) => {
                event.preventDefault();
                if(input.checked) {
                    if(activeQuestion.isCorrect(input.value)) {
                        this.incrementScore();
                    }
                    if(this.activeIndex !== (this.questions.length - 1)) {
                        this.nextQuestion();
                    } else if (this.activeIndex === (this.questions.length - 1)) {
                        checkScore.style.display = "block";
                    }
                }
            })

            options.append(inputWrapper);
        })
        this.handleButtons()
        totalQuestions.innerText = `Total Questions : ${this.questions.length}`;
        fieldset.append(legend, options, button);
        form.append(fieldset);
        quizElm.append(form);
    }
}

function init() {
    let quiz = new Quiz();

quizCollection.forEach((question) => {
    quiz.addQuestion(question.title, question.options, question.answerIndex);
})

function hideButton() {
    previous.style.visibility = "hidden";
    next.style.display = "none";
    checkScore.style.display = "none";
}

hideButton();

startButton.addEventListener(`click`, () => {
    startButton.style.display = "none";
    quiz.createUI();
});


previous.addEventListener(`click`, quiz.previousQuestion.bind(quiz));
next.addEventListener(`click`, quiz.nextQuestion.bind(quiz));
checkScore.addEventListener(`click`, () => {
    quizElm.style.display = "none";
    let p = document.createElement("p");
    p.innerText = `Your score is ${quiz.scoreTotal}`;
    let reloadBtn = document.createElement("button");
    reloadBtn.classList.add("reload");
    let span = document.createElement("span");
    span.innerText = "refresh";
    span.classList.add("material-icons");
    reloadBtn.append(span);
    displayResult.append(p, reloadBtn);
    hideButton();
    displayResult.style.display = "block";
    reloadBtn.addEventListener(`click`, () => location = location)
});
}

init();