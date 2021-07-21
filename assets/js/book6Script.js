const book6Questions = [
    {
      question: "Question",
      answers: {
          a: "Answer",
          b: "Answer",
          c: "Answer",
          d: "Answer"
      },
      correctAnswer: 'abcd'
    },
    {
      question: "Question",
      answers: {
          a: "Answer",
          b: "Answer",
          c: "Answer",
          d: "Answer"
      },
      correctAnswer: 'abcd'
    },
    {
      question: "Question",
      answers: {
          a: "Answer",
          b: "Answer",
          c: "Answer",
          d: "Answer"
      },
      correctAnswer: 'abcd'
    },
    {
      question: "Question",
      answers: {
          a: "Answer",
          b: "Answer",
          c: "Answer",
          d: "Answer"
      },
      correctAnswer: 'abcd'
    },
    {
      question: "Question",
      answers: {
          a: "Answer",
          b: "Answer",
          c: "Answer",
          d: "Answer"
      },
      correctAnswer: 'abcd'
    },
    {
      question: "Question",
      answers: {
          a: "Answer",
          b: "Answer",
          c: "Answer",
          d: "Answer"
      },
      correctAnswer: 'abcd'
    },
    {
      question: "Question",
      answers: {
          a: "Answer",
          b: "Answer",
          c: "Answer",
          d: "Answer"
      },
      correctAnswer: 'abcd'
    },
    {
      question: "Question",
      answers: {
          a: "Answer",
          b: "Answer",
          c: "Answer",
          d: "Answer"
      },
      correctAnswer: 'abcd'
    },
    {
      question: "Question",
      answers: {
          a: "Answer",
          b: "Answer",
          c: "Answer",
          d: "Answer"
      },
      correctAnswer: 'abcd'
    },
    {
      question: "Question",
      answers: {
          a: "Answer",
          b: "Answer",
          c: "Answer",
          d: "Answer"
      },
      correctAnswer: 'abcd'
    },
    {
      question: "Question",
      answers: {
          a: "Answer",
          b: "Answer",
          c: "Answer",
          d: "Answer"
      },
      correctAnswer: 'abcd'
    },
    {
      question: "Question",
      answers: {
          a: "Answer",
          b: "Answer",
          c: "Answer",
          d: "Answer"
      },
      correctAnswer: 'abcd'
    },
    {
      question: "Question",
      answers: {
          a: "Answer",
          b: "Answer",
          c: "Answer",
          d: "Answer"
      },
      correctAnswer: 'abcd'
    },
    {
      question: "Question",
      answers: {
          a: "Answer",
          b: "Answer",
          c: "Answer",
          d: "Answer"
      },
      correctAnswer: 'abcd'
    },
    {
      question: "Question",
      answers: {
          a: "Answer",
          b: "Answer",
          c: "Answer",
          d: "Answer"
      },
      correctAnswer: 'abcd'
    },
    {
      question: "Question",
      answers: {
          a: "Answer",
          b: "Answer",
          c: "Answer",
          d: "Answer"
      },
      correctAnswer: 'abcd'
    },
    {
      question: "Question",
      answers: {
          a: "Answer",
          b: "Answer",
          c: "Answer",
          d: "Answer"
      },
      correctAnswer: 'abcd'
    },
    {
      question: "Question",
      answers: {
          a: "Answer",
          b: "Answer",
          c: "Answer",
          d: "Answer"
      },
      correctAnswer: 'abcd'
    },
    {
      question: "Question",
      answers: {
          a: "Answer",
          b: "Answer",
          c: "Answer",
          d: "Answer"
      },
      correctAnswer: 'abcd'
    },
    {
      question: "Question",
      answers: {
          a: "Answer",
          b: "Answer",
          c: "Answer",
          d: "Answer"
      },
      correctAnswer: 'abcd'
    }    
];

alert('This page is under construction, appologies for any inconvenience this causes!')
window.location.replace('../index.html');

// Below code inspired from https://simplestepscode.com/javascript-quiz-tutorial/

let containerOfQuiz = document.getElementById('quiz');
let containerOfResults = document.getElementById('results');
let submitQuizButton = document.getElementById('submit');
let containerOfHome = document.getElementById('home')

generateQuiz(book6Questions, containerOfQuiz, containerOfResults, submitQuizButton, containerOfHome);

function generateQuiz(questions, containerOfQuiz, containerOfResults, submitQuizButton){
  // show questions right away
  showQuizQuestions(questions, containerOfQuiz);
  // store output and answer choices for each question
  function showQuizQuestions(questions, containerOfQuiz){
    let output = [];
    let answers;
    for(let i=0; i<questions.length; i++){
      // reset the list of answers
      answers = [];
      /* for each available answer, add a radio button for selection of only one answer (this will be 
      removed via CSS and the whole label will be selectable by the user with stylings affecting the whole label) to show selection */
      for(letter in questions[i].answers){
        answers.push(
          '<input type="radio" id="'+ questions[i].answers[letter] +'" name="question'+i+'" value="'+letter+'">'
            + '<label  for="'+ questions[i].answers[letter] +'">'+ questions[i].answers[letter] +'</label>'
        );
      }
      // add questions and its answers to the quiz 
      output.push(
        '<div class="question"><h3 id="quiz-questions">' + questions[i].question + '</h3></div><br>'
        + '<div class="answers">' + answers.join('') + '</div><br>'
      );
    }
    // combine question and it's answers into one string of html and put it on the page (for all 20 questions)
    containerOfQuiz.innerHTML = output.join('');
  }
  function showResults(questions, containerOfQuiz, containerOfResults, containerOfHome){
    // gather answer containers from the quiz
    let answerContainers = containerOfQuiz.querySelectorAll('.answers');
    // keep track of user's answers
    let userAnswer = '';
    let numCorrect = 0;
    // for each question...
    for(let i=0; i<questions.length; i++){
      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      // if answer is correct
      if(userAnswer===questions[i].correctAnswer){
        // add to the number of correct answers
        numCorrect++;
        // color the answer text green
        answerContainers[i].style.color = 'green';
      }
      // if answer is wrong or blank
      else{
        // color the answer text red
        answerContainers[i].style.color = 'red';
      }
    }
    // show number of correct answers out of total
    containerOfResults.innerHTML = numCorrect + ' out of ' + questions.length;
    // Add alert once submit button is pressed for a visual prompt and a nice message for the user
    if (numCorrect <= 4){
      alert('You scored ' + numCorrect +'! Better luck next time! Try reading the books a few more times.')
    } else if (numCorrect >= 5 && numCorrect <= 7){
      alert('You scored ' + numCorrect +'! Well done, you know a little bit about Harry Potter! Maybe try re-reading the books to get a better score.')
    } else if (numCorrect >= 8 && numCorrect <= 12){
      alert('You scored ' + numCorrect +'! Well done, you know quite a bit about Harry Potter! Try rereshing your Harry Potter know-how by re-reading the books for a better score.')
    } else if (numCorrect >= 13 && numCorrect <= 16){
      alert('You scored ' + numCorrect +'! Well done, you know loads about Harry Potter! You must have read the books a few times.')
    } else if (numCorrect >= 17 && numCorrect <= 19){
      alert('You scored ' + numCorrect +'! Well done, you are almost at top marks! Try again and see if you can get 20/20.')
    } else {
      alert("You scored " + numCorrect +"! You got top marks! You're a Harry Potter wiz! Try challenging another Harry Potter nerd to see who wins!")
    };
    containerOfHome.innerHTML = '<a href="../index.html" class="home-link link-6"><i class="fas fa-home"></i></a>';
  }
  // on submit, show results
  submitQuizButton.onclick = function(){
    showResults(questions, containerOfQuiz, containerOfResults, containerOfHome);
  }
}