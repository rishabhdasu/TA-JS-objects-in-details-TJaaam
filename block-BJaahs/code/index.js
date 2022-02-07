// Without object
let title = 'Where is the capital of Jordan';
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex = 1;

function isAnswerCorrect(index) {
 let correct = undefined;
 if(index === correctAnswerIndex){
    correct = `Answer is correct`;
 }
 else 
 function getCorrectAnswer() {
    correct = `Correct answer is ${options[1]}`;
 }
getCorrectAnswer();
 return correct;
}

// With Object

let obj = {
    title : 'Where is the capital of Jordan',
    options : ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex : 1
   }
   function isAnswerCorrect(index) {
    let correct = undefined;
    if(index === obj.correctAnswerIndex) {
     correct = `Answer is correct`;
    } else 
      function getCorrectAnswer() {
      correct = `Correct answer is ${obj.options[1]}`;
    } 
    getCorrectAnswer();
    return correct;
   }