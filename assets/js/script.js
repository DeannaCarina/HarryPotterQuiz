'use strict';

const getJSON = async url => {
    try {
      const response = await fetch(url);
      if(!response.ok) // check if response worked (no 404 errors etc...)
        throw new Error(response.statusText);
  
      const data = await response.json(); // get JSON from the response
      return data; // returns a promise, which resolves to this data value
    } catch(error) {
      return error;
    }
  }
  
  console.log("Fetching data...");
  getJSON("https://8000-scarlet-caterpillar-4nnakuys.ws-eu11.gitpod.io/assets/js/QandA.json").then(data => {
    console.log(data);
  }).catch(error => {
    console.error(error);
  });

// URL WILL NEED UPDATING WHEN NOT IN DEVELOPMENT AS CURRENT LINK TO LOCALLY HOSTED SERVER!!!!!!!!!!!!!
// MAYBE ALSO NOT CONSOLE.LOG TH DATA TO MINIMISE CHEATING...
// Method abover from https://stackoverflow.com/questions/2499567/




let generateQuestion = function(){
// Potential question generated via JSON files in filename.json
}
let generateAnswer = function(){
// Potential answers generated via JSON files in filename.json
}
let checkAnswer = function(){
// Once user has selected answer, no other answers selectable, if correct, answer box will go green, if wrong, answer box will go red
}
let updateTally = function(){
// If user selects correct answer, tally number will go green, else it will go red
}
let nextQuestion = function(){
// If use has attempted the question, the next question button will appear, selecting button will generate a new question and answers via relevant functions
}
let backToHome = function(){
//Once the user has completed all questions, the last "next question" arrow will take the use back to main page    
}

//CODE FOR MAIN PAGE

let updateScore = function(){
//When the user has completed a quiz, the score will update in this page with their score    
}


