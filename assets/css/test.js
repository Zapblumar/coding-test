



var startBtn = document.querySelector("#start");
var quiz = document.querySelector("main");
var passwordInput = document.querySelector("#high-score");
var timeLimit = document.getElementById("countdown");
var correct = document.querySelector("answer")







function renderLastRegistered() {
    var score = localStorage.getItem('high-score');
  
    
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


buttonA.onclick = correctAnswer;
buttonB.onclick = wrongAnswer;
buttonC.onclick = wrongAnswer;
buttonD.onclick = wrongAnswer;

var feedback = document.querySelector("#feedback")
function correctAnswer(){
 feedback.textContent = "correct";
  next()
}

function wrongAnswer(){
  feedback.textContent = "wrong";
  next()
}

function next(){
  quiz.innerHTML = "";
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

buttonA.onclick = correctAnswer;
buttonB.onclick = wrongAnswer;
buttonC.onclick = wrongAnswer;
buttonD.onclick = wrongAnswer;

var feedback = document.querySelector("#feedback")
function correctAnswer(){
 feedback.textContent = "correct";
  next2()
}

function wrongAnswer(){
  feedback.textContent = "wrong";
  next2()
}
}
function next2(){
  quiz.innerHTML = "";
 sample = document.createElement("h3");
sample.innerText = questions[2].question

quiz.appendChild(sample);

 buttonA = document.createElement("button");
buttonA.innerText = questions[2].answerA;

quiz.appendChild(buttonA);
 buttonB = document.createElement("button");
buttonB.innerText = questions[2].answerB;

quiz.appendChild(buttonB);
 buttonC = document.createElement("button");
buttonC.innerText = questions[2].answerC;

quiz.appendChild(buttonC);
 buttonD = document.createElement("button");
buttonD.innerText = questions[2].answerD;

quiz.appendChild(buttonD);

buttonA.onclick = correctAnswer;
buttonB.onclick = wrongAnswer;
buttonC.onclick = wrongAnswer;
buttonD.onclick = wrongAnswer;

var feedback = document.querySelector("#feedback")
function correctAnswer(){
 feedback.textContent = "correct";
  next3()
}

function wrongAnswer(){
  feedback.textContent = "wrong";
  next3()
}
}

//function correctAnswer(){
  //window.alert("correct");
  }
  
  function wrongAnswer(){
    //window.alert("wrong");
    }
function next3(){
  quiz.innerHTML = "";
 sample = document.createElement("h3");
sample.innerText = questions[3].question

quiz.appendChild(sample);

 buttonA = document.createElement("button");
buttonA.innerText = questions[3].answerA;

quiz.appendChild(buttonA);
 buttonB = document.createElement("button");
buttonB.innerText = questions[3].answerB;

quiz.appendChild(buttonB);
 buttonC = document.createElement("button");
buttonC.innerText = questions[3].answerC;

quiz.appendChild(buttonC);
 buttonD = document.createElement("button");
buttonD.innerText = questions[3].answerD;

quiz.appendChild(buttonD);

buttonA.onclick = correctAnswer;
buttonB.onclick = wrongAnswer;
buttonC.onclick = wrongAnswer;
buttonD.onclick = wrongAnswer;

var feedback = document.querySelector("#feedback")
function correctAnswer(){
 feedback.textContent = "correct";
  next4()
}

function wrongAnswer(){
  feedback.textContent = "wrong";
  next4()
}
}

function correctAnswer(){
  //window.alert("correct");
  }
  
  function wrongAnswer(){
   // window.alert("wrong");
    }
function next4(){
  quiz.innerHTML = "";
 sample = document.createElement("h3");
sample.innerText = questions[4].question

quiz.appendChild(sample);

 buttonA = document.createElement("button");
buttonA.innerText = questions[4].answerA;

quiz.appendChild(buttonA);
 buttonB = document.createElement("button");
buttonB.innerText = questions[4].answerB;

quiz.appendChild(buttonB);
 buttonC = document.createElement("button");
buttonC.innerText = questions[4].answerC;

quiz.appendChild(buttonC);
 buttonD = document.createElement("button");
buttonD.innerText = questions[4].answerD;

quiz.appendChild(buttonD);

buttonA.onclick = correctAnswer;
buttonB.onclick = wrongAnswer;
buttonC.onclick = wrongAnswer;
buttonD.onclick = wrongAnswer;

var feedback = document.querySelector("#feedback")
function correctAnswer(){
 feedback.textContent = "correct";
}

function wrongAnswer(){
  feedback.textContent = "wrong";
}
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