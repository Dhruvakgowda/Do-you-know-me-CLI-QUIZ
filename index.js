var readlineSync = require("readline-sync");

var score=0;

var name = readlineSync.question("Whats your name? ");

console.log("Welcome to the Quiz "+name+"!")

var questions = [{
  question:"Where do i live? ",
  answer: "bangalore"
} , {
  question:"Where do i study? ",
  answer:"cmrit"
},{
  question:"What brand phone do i own? ",
  answer:"samsung"
}];

function quiz(question,answer){
  var userAnswer=readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Correct!!")
    score = score+1;
    console.log("----------")
  }
  else {
    console.log("Wrong!!")
    score = score+0;
    console.log("----------")
  }
}

function game(){
  for(var i=0;i<questions.length;i++){
    var currentQuestion=questions[i];
    quiz(currentQuestion.question,currentQuestion.answer)
  }
}
function scores(){
  console.log("Your Score is: "+score);
}

game();
scores();