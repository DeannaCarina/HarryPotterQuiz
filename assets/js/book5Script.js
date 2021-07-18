const book5Questions = [
  //Book 1 Questions
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

// Below code inspired from https://simplestepscode.com/javascript-quiz-tutorial/

let containerOfQuiz = document.getElementById('quiz');
let containerOfResults = document.getElementById('results');
let submitQuizButton = document.getElementById('submit');

generateQuiz(book5Questions, containerOfQuiz, containerOfResults, submitQuizButton);

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
      // for each available answer, add a radio button for selection 
      for(letter in questions[i].answers){
        answers.push(
          '<label>'
            + '<input type="radio" id="radio-select" name="question'+i+'" value="'+letter+'">'
            + questions[i].answers[letter]
            + '</label>'
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
  function showResults(questions, containerOfQuiz, containerOfResults){
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
  }
  // on submit, show results
  submitQuizButton.onclick = function(){
    showResults(questions, containerOfQuiz, containerOfResults);
  }
}