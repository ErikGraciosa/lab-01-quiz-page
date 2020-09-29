import { isThisAYes } from './isThisAYes.js';

// import functions and grab DOM elements
const buttonQuiz = document.getElementById('button-quiz');

const quizResults = document.getElementById('quiz-results');

// initialize state
let correctAnswers = 0; //Update this variable +1 when user answers question correctly.


//Click button, prompt for name
// set event listeners to update state and DOM
buttonQuiz.addEventListener('click', () => {
    //This isn't refreshing, seems to just move past without updating
    quizResults.textContent = '';
    
    
    
    if (confirm('Do you want to proceed with the quiz?')){
        
        
        const userName = prompt('Enter your name');
          
        if (userName === '') {
            alert('Input invalid. Please try again and enter name.');
            return;
        }
        

        //Question 1
        const answer1 = prompt('Was Neo\'s daytime job a computer programmer job?');
        if (isThisAYes(answer1) === true) {
            correctAnswers++;
        }

        //Question 2
        const answer2 = prompt('Are 250,000 sentinels digging towards Zion?');
        if (isThisAYes(answer2) === true) {
            correctAnswers++;
        }

        //Question 3
        const answer3 = prompt('Is Neo held captive with The Merovingian?');
        if (isThisAYes(answer3) === true) {
            correctAnswers++;
        }

        alert('You have completed the quiz, results will display in page.');

        let correctAnswersAsPercent = Math.floor(correctAnswers / 3 * 100);
        quizResults.textContent = userName + ', you answered ' + correctAnswers + '/3 questions correct. That\'s ' + correctAnswersAsPercent + '%';

        ///Clears answers variables to start fresh if button clicked a second time
        correctAnswers = 0;
        correctAnswersAsPercent = 0;
    }
});
//does user name leave function?
