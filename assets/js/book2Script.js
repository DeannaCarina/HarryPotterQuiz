const book2Questions = [
  {
      question: "The Weasley's live in a house called 'The Burrow' but where is it?",
      answers: {
          a: "Upper Flagley",
          b: "Puddlemere",
          c: "Ottery St. Catchpole",
          d: "Tutshill"
      },
      correctAnswer: 'c'
    },
    {
      question: "What book did Mrs Weasley refer to before the garden de-gnoming?",
      answers: {
          a: "Where There’s a Wand There’s a Way",
          b: "Weird Wizarding Dilemmas and Their Solutions",
          c: "Olde and Forgotten Bewitchments and Charmes",
          d: "Gilderoy Lockhart’s Guide to Household Pests"
      },
      correctAnswer: 'd'
    },
    {
      question: "Which Quidditch team does Ron support?",
      answers: {
          a: "The Chudley Cannons",
          b: "Falmouth Falcons",
          c: "Holyhead Harpies",
          d: "Wimbourne Wasps "
      },
      correctAnswer: 'a'
    },
    {
      question: "What book was Hermione reading when Ron recieved the Howler from his mother?",
      answers: {
          a: "Voages with Vampires",
          b: "Wanderings with Werewolves",
          c: "Gadding with Ghouls",
          d: "Break with a Banshee"
      },
      correctAnswer: 'a'
    },
    {
      question: "When re-potting madrakes in their first Herbology lesson of second year, who joined Harry, Ron and Hermione?",
      answers: {
          a: "Neville Longbottom",
          b: "Justin Finch-Fletchley",
          c: "Dean Thomas",
          d: "Ernie Macmillan"
      },
      correctAnswer: 'b'
    },
    {
      question: "What is Gilderoy Lockheart's favourite colour?",
      answers: {
          a: "Teal",
          b: "Lilac",
          c: "Lavender",
          d: "Turquoise"
      },
      correctAnswer: 'b'
    },
    {
      question: "How many times did Nearly Headless Nick get hit with an axe during his attempted beheadding?",
      answers: {
          a: "17",
          b: "23",
          c: "45",
          d: "63"
      },
      correctAnswer: 'c'
    },
    {
      question: "Which deathday did Nearly Headless Nick invite Harry to celebrate?",
      answers: {
          a: "250th",
          b: "430th",
          c: "500th",
          d: "665th"
      },
      correctAnswer: 'c'
    },
    {
      question: "Who is the only ghost teacher at Hogwarts?",
      answers: {
          a: "Septima Vector",
          b: "Aurora Sinistra",
          c: "Silvanus Kettleburn",
          d: "Cuthbert Binns"
      },
      correctAnswer: 'd'
    },
    {
      question: "In which book can the Polyjuice Potion recipe be found?",
      answers: {
          a: "Moste Potente Potions",
          b: "Magical Drafts and Potions",
          c: "Book of Potions",
          d: "Advanced Potion-Making"
      },
      correctAnswer: 'a'
    },
    {
      question: "Who was the first person to be petrified by the Basilisk?",
      answers: {
          a: "Nearly Headless Nick",
          b: "Colin Creevy",
          c: "Justin Finch-Fletchley",
          d: "Hermione Granger"
      },
      correctAnswer: 'b'
    },
    {
      question: "What Christmas present did the Dursley's send harry in his second year?",
      answers: {
          a: "A 50 pence piece",
          b: "A coat hanger",
          c: "A toothpick",
          d: "A single tissue"
      },
      correctAnswer: 'c'
    },
    {
      question: "Who's robe did Hermione get the cat fur off that she later used in the Polyjuice Potion?",
      answers: {
          a: "Pansy Parkinson",
          b: "Millicent Bulstrode",
          c: "Daphne Greengrass",
          d: "Tracey Davis"
      },
      correctAnswer: 'b'
    },
    {
      question: "Who was the headmaster of Hogwarts when the Chamber of Secrets was last opened 50 years ago?",
      answers: {
          a: "Professor Dumbledore",
          b: "Phineas Nigellus Black",
          c: "Brutus Scrimgeour",
          d: "Professor Dippet"
      },
      correctAnswer: 'd'
    },
    {
      question: "What is Aragog's wife called?",
      answers: {
          a: "Moriel",
          b: "Madgi",
          c: "Mosag",
          d: "Morag"
      },
      correctAnswer: 'c'
    },
    {
      question: "Who used to tease Moaning Myrtle about her glasses?",
      answers: {
          a: "Olive Hornby",
          b: "Tom Riddle",
          c: "Peeves",
          d: "Cerelle Peach"
      },
      correctAnswer: 'a'
    },
    {
      question: "Where in their home did the Malfoy's hide their dark magic artefacts?",
      answers: {
          a: "In the basement",
          b: "Behind the tapestry in the dining room",
          c: "Under the drawing room floor",
          d: "In the attic"
      },
      correctAnswer: 'c'
    },
    {
      question: "Who is the leader of the headless hunt?",
      answers: {
          a: "Sir Patrick Delaney-Podmore",
          b: "Sir Peter Duncan-Pangbourne",
          c: "Sir Percy Douglas-Packwood",
          d: "Sir Podric Damson-Portwell"
      },
      correctAnswer: 'a'
    },
    {
      question: "Harry had to speak in Parsletongue to a tap in the bathroom to open the entrance to the Chamber of secrets, what kind of metal was it?",
      answers: {
          a: "Pewter",
          b: "Silver",
          c: "Brass",
          d: "Copper"
      },
      correctAnswer: 'd'
    },
    {
      question: "Who did Ginny walk in on kissing Percy Weasley?",
      answers: {
          a: "Angelina Johnson",
          b: "Penelope Clearwater",
          c: "Alicia Spinnet",
          d: "Katie Bell"
      },
      correctAnswer: 'b'
    }
];

// Below code inspired from https://simplestepscode.com/javascript-quiz-tutorial/

let containerOfQuiz = document.getElementById('quiz');
let containerOfResults = document.getElementById('results');
let submitQuizButton = document.getElementById('submit');
let containerOfHome = document.getElementById('home')

generateQuiz(book2Questions, containerOfQuiz, containerOfResults, submitQuizButton);

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