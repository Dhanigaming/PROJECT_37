var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  database = firebase.database();
  canvas = createCanvas(1500,400);
  
 
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("skyblue");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
