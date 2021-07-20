const book3Questions = [
  {
    question: "Who was looking after Aunt Marge's other dogs while she was staying with the Dursleys?",
    answers: {
        a: "Colonel Fubster",
        b: "Captain Freeman",
        c: "Sergeant Fuller",
        d: "General Franklin"
    },
    correctAnswer: 'a'
  },
  {
    question: "Before Sirius Black was declared innocent, how many people was he said to have killed with a single curse?",
    answers: {
        a: "11",
        b: "13",
        c: "15",
        d: "17"
    },
    correctAnswer: 'b'
  },
  {
    question: "After Harry left Privet Drive on the Knight Bus, where did he stay prior to the school term starting?",
    answers: {
        a: "At the Burrow",
        b: "At Hogwarts",
        c: "At the Three Broomsticks",
        d: "At the Leaky Cauldron"
    },
    correctAnswer: 'd'
  },
  {
    question: "What was the set book for Divination on Harry's book list?",
    answers: {
        a: "Predicting the Unpredictable",
        b: "Broken Balls: When Fortunes Turn Foul",
        c: "Unfogging the Future",
        d: "Omens, Oracles & the Goat"
    },
    correctAnswer: 'c'
  },
  {
    question: "What is Professor Lupin's middle name?",
    answers: {
        a: "John",
        b: "Charles'",
        c: "Henry'",
        d: "George"
    },
    correctAnswer: 'a'
  },
  {
    question: "What was the name of the Knight that showed Harry, Ron and Hermoine the way to the North Tower for their first Divination lesson?",
    answers: {
        a: "Sir Waldegrave",
        b: "Sir Abingdon",
        c: "Sir Westmorland",
        d: "Sir Cadogan"
    },
    correctAnswer: 'd'
  },
  {
    question: "Which spell did Professor Lupin use on Peeves during his first Defence Against the Dark Arts class with the third years?",
    answers: {
        a: "Waddiwasi",
        b: "Oppugno",
        c: "Ebublio",
        d: "Vermiculus"
    },
    correctAnswer: 'a'
  },
  {
    question: "What form does Seamus Finnigan's boggart take?",
    answers: {
        a: "A mummy",
        b: "A spider",
        c: "A snake",
        d: "A banshee"
    },
    correctAnswer: 'd'
  },
  {
    question: "What did Professor Snape make Ron do for his detention?",
    answers: {
        a: "Scrub out bedpans in the hospital wing",
        b: "Disembowel a barrel full of horned toads",
        c: "Pickle rats’ brains in the dungeons",
        d: "Sorting out rotten Flobberworms from good ones"
    },
    correctAnswer: 'a'
  },
  {
    question: "What position did Charlie Weasley play on the Gryffindor Quidditch team when he was a student at Hogwarts?",
    answers: {
        a: "Beater",
        b: "Seeker",
        c: "Chaser",
        d: "Keeper"
    },
    correctAnswer: 'b'
  },
  {
    question: "What is the incantation to open the one-eyed witch passageway? ",
    answers: {
        a: "Diminuendo",
        b: "Diffindo",
        c: "Dissendium",
        d: "Descendo"
    },
    correctAnswer: 'c'
  },
  {
    question: "How many 'turns' did Professor Dumbledore instruct Hermione to carry out on the Time Turner?",
    answers: {
        a: "2",
        b: "3",
        c: "4",
        d: "5"
    },
    correctAnswer: 'b'
  },
  {
    question: "What was the name of the executioner sent to kill Buckbeak?",
    answers: {
        a: "Corban Yaxley",
        b: "Thorfinn Rowle",
        c: "Walden Macnair",
        d: "Antonin Dolohov"
    },
    correctAnswer: 'c'
  },
  {
    question: "On what floor is Professor Flitwick's office?",
    answers: {
        a: "4th",
        b: "5th",
        c: "6th",
        d: "7th"
    },
    correctAnswer: 'd'
  },
  {
    question: "What's the total number of real predictions that Professor Trelawny has made as of the end of Harry'd 3rd year at Hogwarts?",
    answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4"
    },
    correctAnswer: 'b'
  },
  {
    question: "Who are the Ravenclaw and Hufflepuff Seekers during Harry's 3rd year at Hogwarts?",
    answers: {
        a: "Cho Chang and Cedric Diggory",
        b: "Marcus Belby and Hannah Abbott",
        c: "Roger Davies and Ernie Macmillan",
        d: "Terry Boot and Zacharias Smith"
    },
    correctAnswer: 'a'
  },
  {
    question: "What name did Harry give himself when on the Knight Bus the night he left Privet Drive?",
    answers: {
        a: "Dean Thomas",
        b: "Ron Weasley",
        c: "Vernon Dudley",
        d: "Neville Longbottom"
    },
    correctAnswer: 'd'
  },
  {
    question: "When staying at The Leaky Cauldron, where did Harry do most of his homework?",
    answers: {
        a: "In his bedroom at The Leaky Cauldron",
        b: "Inside Flourish and Blotts book shop",
        c: "Outside Florean Fortescue's Ice Cream Parlour",
        d: "On the steps of Gringotts Bank"
    },
    correctAnswer: 'c'
  },
  {
    question: "After Neville breaks his first cup in Divination, what colour does Professor Trelawny tell him to get for his second?",
    answers: {
        a: "Blue",
        b: "Green",
        c: "Yellow",
        d: "Pink"
    },
    correctAnswer: 'a'
  },
  {
    question: "Who did Gryffindor beat in the final to win the Quidditch trophy?",
    answers: {
        a: "They didn't win the trophy!",
        b: "Hufflepuff",
        c: "Slytherin",
        d: "Ravenclaw"
    },
    correctAnswer: 'c'
  }
];

// Below code inspired from https://simplestepscode.com/javascript-quiz-tutorial/

let containerOfQuiz = document.getElementById('quiz');
let containerOfResults = document.getElementById('results');
let submitQuizButton = document.getElementById('submit');
let containerOfHome = document.getElementById('home')

generateQuiz(book3Questions, containerOfQuiz, containerOfResults, submitQuizButton, containerOfHome);

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
    containerOfHome.innerHTML = '<a href="../index.html" class="home-link link-3"><i class="fas fa-home"></i></a>';
  }
  // on submit, show results
  submitQuizButton.onclick = function(){
    showResults(questions, containerOfQuiz, containerOfResults, containerOfHome);
  }
}