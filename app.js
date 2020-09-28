import { isThisAYes } from './isThisAYes.js';

// import functions and grab DOM elements
const buttonQuiz = document.getElementById('button-quiz');

const quizResults = document.getElementById('quiz-results');

// initialize state
let correctAnswers = 0; //Update this variable +1 when user answers question correctly.
console.log('did I get here?1');



//Click button, prompt for name
// set event listeners to update state and DOM
buttonQuiz.addEventListener('click', () => {
    console.log('did I get here?2');
    
    if (confirm('Do you want to proceed with the quiz?')){
        const userName = prompt('Enter your name');
        console.log(userName);

        //Question 1
        const answer1 = prompt('q1');
        if (isThisAYes(answer1) === true) {
            correctAnswers++;
        }

        //Question 2
        const answer2 = prompt('q2');
        if (isThisAYes(answer2) === true) {
            correctAnswers++;
        }

        //Question 3
        const answer3 = prompt('q2');
        if (isThisAYes(answer3) === true) {
            correctAnswers++;
        }

        quizResults.textContent = userName + ', you answered ' + correctAnswers + ' questions correct.';
    }
});
//does user name leave function?
