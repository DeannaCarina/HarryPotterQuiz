const book1Questions = [
  //Book 1 Questions
  {
      question: "What is the title of the first chapter in Harry Potter and the Philosopher's Stone?",
      answers: {
          a: "Number Four Privet Drive",
          b: "The Boy Who Lived",
          c: "The Vanishing Glass",
          d: "The Potters"
      },
      correctAnswer: 'b'
    },
    {
      question: "Mr Dursley works for a firm called 'Grunnings', but what do they do?",
      answers: {
          a: "Make shotguns",
          b: "Make lawnmowers",
          c: "Make drills",
          d: "Make racing bikes"
      },
      correctAnswer: 'c'
    },
    {
      question: "On the trip to the zoo, which of Dudley's friends went too?",
      answers: {
          a: "Piers",
          b: "Paul",
          c: "Peter",
          d: "Phil"
      },
      correctAnswer: 'a'
    },
    {
      question: "When Harry removed the glass in the zoo, where did the snake say he was going?",
      answers: {
          a: "Nepal",
          b: "Burma",
          c: "Brazil",
          d: "Peru"
      },
      correctAnswer: 'c'
    },
    {
      question: "In Harry's 'Set Books' list, who wrote 'Magical Theory'?",
      answers: {
          a: "Bathilda Bagshot",
          b: "Miranda Goshawk",
          c: "Adalbert Waffling",
          d: "Emeric Switch"
      },
      correctAnswer: 'c'
    },
    {
      question: "Which brick did Hagrid need to tap three times to gain access to Diagon Alley?",
      answers: {
          a: "Three up... Four Across",
          b: "Four up... One Across",
          c: "Two up... Four Across",
          d: "Three up... Two Across"
      },
      correctAnswer: 'd'
    },
    {
      question: "How does the currency system work in the wizarding world?",
      answers: {
          a: "15 Sickles to a Galleon, 25 Knuts to a Sickle",
          b: "17 Sickles to a Galleon, 29 Knuts to a Sickle",
          c: "10 Sickles to a Galleon, 30 Knuts to a Sickle",
          d: "19 Sickles to a Galleon, 27 Knuts to a Sickle"
      },
      correctAnswer: 'b'
    },
    {
      question: "Who bought Hedwig?",
      answers: {
          a: "Harry",
          b: "Hagrid",
          c: "Professor McGonagall",
          d: "Professor Dumbledore"
      },
      correctAnswer: 'b'
    },
    {
      question: "When Harry was fitted for his robes at Madam Malkin's, which other student was in the shop?",
      answers: {
          a: "Ron Weasley",
          b: "Neville Longbottom",
          c: "Hermione Granger",
          d: "Draco Malfoy"
      },
      correctAnswer: 'd'
    },
    {
      question: "On the train ride to Hogwarts, who did Scabbers bite?",
      answers: {
          a: "Vincent Crabbe",
          b: "Draco Malfoy",
          c: "Gregory Goyle",
          d: "Neville Longbottom"
      },
      correctAnswer: 'c'
    },
    {
      question: "What is Nearly Headless Nick's full name?",
      answers: {
          a: "Sir Nicholas de Mimsy-Porpington",
          b: "Sir Nicholas de Michael-Parkinson",
          c: "Sir Nicholas de Magnus-Pilkington",
          d: "Sir Nicholas de Milton-Paddington"
      },
      correctAnswer: 'a'
    },
    {
      question: "What is the first password for Gryffindor common room that we learn of?",
      answers: {
          a: "Fortuna Major",
          b: "Caput Draconis",
          c: "Pig Snout",
          d: "Flibbertigibbet"
      },
      correctAnswer: 'b'
    },
    {
      question: "What would you get if you added powdered root of asphodel to an infusion of wormwood? Where would you find a bezoar? What's the difference between monkshood and wolfsbane?",
      answers: {
          a: "A love potion. The stomach of a pig. They are the same.",
          b: "A luck potion. The stomach of a dragon. One is a herb, the other a potion.",
          c: "A sleeping potion. The stomach of a goat. They are the same.",
          d: "A healing potion. The stomach of a phoenix. One is a flower, the other a poison."
      },
      correctAnswer: 'c'
    },
    {
      question: "What is Hagrid's dog called?",
      answers: {
          a: "Buckbeak",
          b: "Norbet",
          c: "Fluffy",
          d: "Fang"
      },
      correctAnswer: 'd'
    },
    {
      question: "Which lesson was Oliver Wood in when Harry cought Neville's rememberall in his first flying lesson?",
      answers: {
          a: "Charms",
          b: "Transfiguration",
          c: "Defence against the dark arts",
          d: "Potions"
      },
      correctAnswer: 'a'
    },
    {
      question: "How many different ways are there to commit a Quidditch foul?",
      answers: {
          a: "50",
          b: "150",
          c: "350",
          d: "700"
      },
      correctAnswer: 'd'
    },
    {
      question: "Who are the three chasers in Harry's first Quidditch match?",
      answers: {
          a: "Oliver Wood, Angelina Johnson, Penelope Clearwater",
          b: "Katie Bell, Alicia Spinnet and Angelina Johnson",
          c: "Alicia Spinnet, Veronica Smethley, Katie Bell",
          d: "Angelina Johnson, Katie Bell, Oliver Wood"
      },
      correctAnswer: 'b'
    },
    {
      question: "What colour was Harry's Christmas jumper from Mrs Weasley?",
      answers: {
          a: "Emerald",
          b: "Maroon",
          c: "Navy",
          d: "Yellow"
      },
      correctAnswer: 'a'
    },
    {
      question: "What are the words of the inscription on the Mirror of Erised?",
      answers: {
          a: "Et respice et vide quid tibi petitiones cordis tui",
          b: "Speculum hoc maneat periculo non auferetur",
          c: "Erised stra ehru oyt ube cafru oyt on wohsi",
          d: "Erised est cor tuum in viam quaerere invenire"
      },
      correctAnswer: 'c'
    },
    {
      question: "What is the name of Nicholas Flamel's wife?",
      answers: {
          a: "Persephone",
          b: "Priscilla",
          c: "Penelope",
          d: "Perenelle"
      },
      correctAnswer: 'd'
    }    
];


// Below code inspired from https://simplestepscode.com/javascript-quiz-tutorial/

let containerOfQuiz = document.getElementById('quiz');
let containerOfResults = document.getElementById('results');
let submitQuizButton = document.getElementById('submit');

generateQuiz(book1Questions, containerOfQuiz, containerOfResults, submitQuizButton);

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