function question(title, options, correctAnswerIndex) {
    let quiz = {};
    quiz.title  = title;
    quiz.options = options;
    quiz.correctAnswerIndex = correctAnswerIndex;
    quiz.isAnswerCorrect = function(index) {
    return index === quiz.correctAnswerIndex;
    };
    quiz.getCorrectAnswer = function() {
    return `Correct answer is ${quiz.options[quiz.correctAnswerIndex]}`;
    };
    return quiz;
}

let firstQuestion = question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );

//   Prototypal Method
  let questionMethods = {
    isAnswerCorrect : function(index) {
    return index === this.correctAnswerIndex;
    },
    getCorrectAnswer : function() {
    return `Correct answer is ${this.options[this.correctAnswerIndex]}`;
    },
  }
  function question(title, options, correctAnswerIndex) {
    let quiz = Object.create(questionMethods);
    quiz.title  = title;
    quiz.options = options;
    quiz.correctAnswerIndex = correctAnswerIndex;
    return quiz;
}

let firstQuestion = question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );

// Pseudoclassical method

  function Question(title, options, correctAnswerIndex) {
    this.title  = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
}

Question.prototype = {
    isAnswerCorrect : function(index) {
    return index === this.correctAnswerIndex;
    },
    getCorrectAnswer : function() {
    return `Correct answer is ${this.options[this.correctAnswerIndex]}`;
    },
  }

  let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );

//   Using Class

class Questions {
    constructor(title, options, correctAnswerIndex){
    this.title  = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
    }
    isAnswerCorrect(index) {
    return index === this.correctAnswerIndex;
    };
    getCorrectAnswer() {
    return `Correct answer is ${this.options[this.correctAnswerIndex]}`;
    }
}

let firstQuestion = new Questions(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);
let secondQuestion = new Questions(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
);