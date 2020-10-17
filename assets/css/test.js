



var startBtn = document.querySelector("#start");
var quiz = document.querySelector("main");
var passwordInput = document.querySelector("#high-score");
var timeLimit = document.getElementById("countdown");
var correct = document.querySelector("answer")







function renderLastRegistered() {
    var score = localStorage.getItem('high-score');
  
    if ( score === null) {
      return;
    }
}


var start = function () {
 quiz.innerHTML = "";





var sample = document.createElement("h3");
sample.innerText = questions[0].question

quiz.appendChild(sample);

var buttonA = document.createElement("button");
buttonA.innerText = questions[0].answerA;

quiz.appendChild(buttonA);
var buttonB = document.createElement("button");
buttonB.innerText = questions[0].answerB;

quiz.appendChild(buttonB);
var buttonC = document.createElement("button");
buttonC.innerText = questions[0].answerC;

quiz.appendChild(buttonC);
var buttonD = document.createElement("button");
buttonD.innerText = questions[0].answerD;

quiz.appendChild(buttonD);

}
// if("bla bla bla === A")
debugger;
function next(){
 sample = document.createElement("h3");
sample.innerText = questions[1].question

quiz.appendChild(sample);

 buttonA = document.createElement("button");
buttonA.innerText = questions[1].answerA;

quiz.appendChild(buttonA);
 buttonB = document.createElement("button");
buttonB.innerText = questions[1].answerB;

quiz.appendChild(buttonB);
 buttonC = document.createElement("button");
buttonC.innerText = questions[1].answerC;

quiz.appendChild(buttonC);
 buttonD = document.createElement("button");
buttonD.innerText = questions[1].answerD;

quiz.appendChild(buttonD);

}


function countdown() {
    var timeLeft = 30;

    var timeInterval = setInterval(function() {
      if (timeLeft > -1) {
        timeLimit.textContent = timeLeft + "seconds remaining";
        timeLeft--;
      } else if (timeLeft === 0) {
        timeLimit.textContent = timeLeft + "second remaining";
        timeLeft--;
      }
    }, 1000);
  }







 // localStorage.setItem('high-score', score);

 startBtn.onclick = countdown;
startBtn.addEventListener("click", start);


var questions = [
  {question: "bla bla bla", answerA:"A",answerB:"B",answerC:"C",answerD:"D"},
  {question: "bla blu blu", answerA:"A",answerB:"B",answerC:"C",answerD:"D"},
  {question: "bla ble ble", answerA:"A",answerB:"B",answerC:"C",answerD:"D"},
  {question: "bla blr blr", answerA:"A",answerB:"B",answerC:"C",answerD:"D"},
  {question: "bla bli bli", answerA:"A",answerB:"B",answerC:"C",answerD:"D"},
];