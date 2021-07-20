const book4Questions = [
  {
    question: "Frank is the gardener at the Riddle House, what is his last name?",
    answers: {
        a: "Bradley",
        b: "Brentford",
        c: "Bryce",
        d: "Bridgeman"
    },
    correctAnswer: 'c'
  },
  {
    question: "What did Dudley throw out of the window when he was threatened with the removal of his pocket money after smuggling donughts into his bedroom even though he was on a diet?",
    answers: {
        a: "His PlayStation",
        b: "His Xbox",
        c: "His computer",
        d: "His Television"
    },
    correctAnswer: 'a'
  },
  {
    question: "What did Harry buy for Ron and Hermoine at the Quidditch World Cup for 10 Galleons each?",
    answers: {
        a: "Irish player figurines that move",
        b: "Programmes",
        c: "Irish Quidditch shirts",
        d: "Omnioculars"
    },
    correctAnswer: 'd'
  },
  {
    question: "Which department at the Ministry of Magic is Ludovic Bagman head of?",
    answers: {
        a: "Department of Magical Law Enforcement",
        b: "Department of Magical Accidents and Catastrophes",
        c: "Department of Magical Games and Sports",
        d: "Department for the Regulation and Control of Magical Creatures"
    },
    correctAnswer: 'c'
  },
  {
    question: "Where is the Portkey located that will transport Harry and the Weasleys to the Quidditch World Cup?",
    answers: {
        a: "Stoatshead Hill",
        b: "Ashton Hill",
        c: "Beacon Hill",
        d: "Seven Stones Hill"
    },
    correctAnswer: 'a'
  },
  {
    question: "What is the name of Barty Crouch's house elf?",
    answers: {
        a: "Winky",
        b: "Hokey",
        c: "Gimkey",
        d: "Vekey"
    },
    correctAnswer: 'a'
  },
  {
    question: "What does S.P.E.W stand for?",
    answers: {
        a: "Society for the Promotion of Elfish Well-being",
        b: "Society for the Prevention of Elfish Woe",
        c: "Society for the Protection of Elfish Welfare",
        d: "Society for the Promotion of Elfish Welfare"
    },
    correctAnswer: 'd'
  },
  {
    question: "What fruit do you have to tickle to gain access to the kitchens at Hogwarts?",
    answers: {
        a: "A banana",
        b: "An orange",
        c: "A pear",
        d: "An apple"
    },
    correctAnswer: 'c'
  },
  {
    question: "What band had Dumbledore booked for the Yule Ball?",
    answers: {
        a: "The Hobgoblins",
        b: "The Bent-Winged Snitches",
        c: "Spellbound",
        d: "The Wierd Sisters"
    },
    correctAnswer: 'd'
  },
  {
    question: "What is the password to the prefect's bathroom where Cedric suggests Harry go with his golden egg?",
    answers: {
        a: "Citrus Splash",
        b: "Pine Fresh",
        c: "Lemon Breeze",
        d: "Cool Mint"
    },
    correctAnswer: 'b'
  },
  {
    question: "What is the name of Hagrid's mother?",
    answers: {
        a: "Adrastea",
        b: "Galatea",
        c: "Orinthia",
        d: "Fridwulfa"
    },
    correctAnswer: 'd'
  },
  {
    question: "How do you say 'pickaxe' in Gobbledegook?",
    answers: {
        a: "Bladvak",
        b: "Kazma",
        c: "Krumpache",
        d: "Hakku"
    },
    correctAnswer: 'a'
  },
  {
    question: "What colour are baby unicorns (less than two years old)?",
    answers: {
        a: "Bronze",
        b: "Silver",
        c: "Gold",
        d: "Black"
    },
    correctAnswer: 'c'
  },
  {
    question: "Who gave Harry the Gillyweed on the day of the second task?",
    answers: {
        a: "Cedric Diggory",
        b: "Mad-eye Moody",
        c: "Dobby",
        d: "Neville Longbottom"
    },
    correctAnswer: 'c'
  },
  {
    question: "In which magazine/newspaper did Rita Skeeter publish the article about the Hermione-Harry-Krum love triangle?",
    answers: {
        a: "Witch Weekly",
        b: "The Daily Prophet",
        c: "Wizard Enquirer",
        d: "Spellbound"
    },
    correctAnswer: 'a'
  },
  {
    question: "What name does Sirius as Harry, Ron and Hermione to use when they talk about him?",
    answers: {
        a: "Padfoot",
        b: "Snuffles",
        c: "Wolfie",
        d: "Archer"
    },
    correctAnswer: 'b'
  },
  {
    question: "What is the Fat Lady's best friend called?",
    answers: {
        a: "Iris",
        b: "Rose",
        c: "Violet",
        d: "Poppy"
    },
    correctAnswer: 'c'
  },
  {
    question: "Who came to Hogwarts the morning of the third task to show support for Harry along with Molly Weasley?",
    answers: {
        a: "Bill Weasley",
        b: "Charlie Weasley",
        c: "Arthur Weasley",
        d: "Percy Weasley"
    },
    correctAnswer: 'a'
  },
  {
    question: "What creature did Harry meet in the maze that gave him a riddle to solve before he could continue?",
    answers: {
        a: "A Manticore",
        b: "A Satyr",
        c: "A Centaur",
        d: "A Sphinx"
    },
    correctAnswer: 'd'
  },
  {
    question: "What did Harry do with the winnings from the Triwizard Tournament",
    answers: {
        a: "Gave it all to Cedric's parents",
        b: "Split it 50/50 with Cedric's parents",
        c: "Gave it to Fred and George",
        d: "Gave it to Dumbledore to help in the Anti-Voldemeort effort"
    },
    correctAnswer: 'c'
  }
];

// Below code inspired from https://simplestepscode.com/javascript-quiz-tutorial/

let containerOfQuiz = document.getElementById('quiz');
let containerOfResults = document.getElementById('results');
let submitQuizButton = document.getElementById('submit');
let containerOfHome = document.getElementById('home')

generateQuiz(book4Questions, containerOfQuiz, containerOfResults, submitQuizButton, containerOfHome);

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
    containerOfHome.innerHTML = '<a href="../index.html" class="home-link link-4"><i class="fas fa-home"></i></a>';
  }
  // on submit, show results
  submitQuizButton.onclick = function(){
    showResults(questions, containerOfQuiz, containerOfResults, containerOfHome);
  }
}