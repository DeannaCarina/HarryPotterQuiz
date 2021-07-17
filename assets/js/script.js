'use strict';

function getJSON(){
  var Httpreq = new XMLHttpRequest();
  Httpreq.open("GET","https://8000-scarlet-caterpillar-4nnakuys.ws-eu11.gitpod.io/assets/js/QandA.json",false);
  Httpreq.send(null);
  return Httpreq.responseText;          
}
var jsonObject = JSON.parse(getJSON("https://8000-scarlet-caterpillar-4nnakuys.ws-eu11.gitpod.io/assets/js/QandA.json"));

/* Above method from https://stackoverflow.com/questions/2499567/ */

// console.log(jsonObject);
// console.log(jsonObject.book1Questions)


function generateQuestion(questions){
  // Potential question generated via JSON files in filename.json
    for (var question in questions){
      // console.log(questions[question])
    }
    const questionChange = document.getElementById("book-1-question");
    questionChange.innerText = jsonObject.book1Questions[0].question;
  };

generateQuestion(jsonObject.book1Questions)



function generateAnswer(answers){
// Potential answers generated via JSON files in filename.json
    for (var answer in answers){
      // console.log(answers[answer])
    }
    const answerChangeA = document.getElementById("book-1-answerA");
    answerChangeA.innerText = jsonObject.book1Questions[0].answers[0];
    const answerChangeB = document.getElementById("book-1-answerB");
    answerChangeB.innerText = jsonObject.book1Questions[0].answers[1];
    const answerChangeC = document.getElementById("book-1-answerC");
    answerChangeC.innerText = jsonObject.book1Questions[0].answers[2];
    const answerChangeD = document.getElementById("book-1-answerD");
    answerChangeD.innerText = jsonObject.book1Questions[0].answers[3];
};

generateAnswer(jsonObject.book1Questions)


function checkAnswers(check){
// Once user has selected answer, no other answers selectable, if correct, answer box will go green, if wrong, answer box will go red

}
function updateTally(tally){
// If user selects correct answer, tally number will go green, else it will go red
}
function nextQuestion(next){
// If use has attempted the question, the next question button will appear, selecting button will generate a new question and answers via relevant functions
}
function backToHome(home){
//Once the user has completed all questions, the last "next question" arrow will take the use back to main page    
}

//CODE FOR MAIN PAGE

function updateScore(score){
//When the user has completed a quiz, the score will update in this page with their score    
}


