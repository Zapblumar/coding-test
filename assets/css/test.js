



var startBtn = document.querySelector("#start");
var quiz = document.querySelector("main");
var score = document.querySelector("#high-score");
var timeLimit = document.getElementById("countdown");
var correct = document.querySelector("answer")
var timeLeft = 30;



function countdown() {

  var timeInterval = setInterval(function () {
    if (timeLeft > -1) {
      timeLimit.textContent = timeLeft + "seconds remaining";
      timeLeft--;
    } else if (timeLeft === 0) {
      timeLimit.textContent = timeLeft + "second remaining";
      timeLeft--;
    }
  }, 1000);
}



var start = function () {
  quiz.innerHTML = "";
  renderLastRegistered();




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


  buttonA.onclick = wrongAnswer;
  buttonB.onclick = correctAnswer;
  buttonC.onclick = wrongAnswer;
  buttonD.onclick = wrongAnswer;

  var feedback = document.querySelector("#feedback")
  function correctAnswer() {
    feedback.textContent = "correct";
    next()
  }

  function wrongAnswer() {
    feedback.textContent = "wrong";
    timeLeft -= 5;
    console.log(timeLeft);
    next();
  }

  function next() {
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
    function correctAnswer() {
      feedback.textContent = "correct";
      next2()
    }

    function wrongAnswer() {
      feedback.textContent = "wrong";
      timeLeft -= 5;
      next2();
    }
  }
  function next2() {
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

    buttonA.onclick = wrongAnswer;
    buttonB.onclick = wrongAnswer;
    buttonC.onclick = correctAnswer;
    buttonD.onclick = wrongAnswer;

    var feedback = document.querySelector("#feedback")
    function correctAnswer() {
      feedback.textContent = "correct";
      next3()
    }

    function wrongAnswer() {
      feedback.textContent = "wrong";
      timeLeft -= 5;
      next3();
    }
  }


  function next3() {
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
    function correctAnswer() {
      feedback.textContent = "correct";
      next4();
    }

    function wrongAnswer() {
      feedback.textContent = "wrong";
      timeLeft -= 5;
      next4();
    }
  }



  function next4() {
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

    buttonA.onclick = wrongAnswer;
    buttonB.onclick = correctAnswer;
    buttonC.onclick = wrongAnswer;
    buttonD.onclick = wrongAnswer;

    var feedback = document.querySelector("#feedback")
    function correctAnswer() {
      feedback.textContent = "correct";
      window.clearInterval();
      timeSavecal();
    }

    function wrongAnswer() {
      feedback.textContent = "wrong";
      timeLeft -= 5;
      window.clearInterval();
      timeSavecal();
    }
  }
  // function timeSavecal(){
  //   localStorage.setItem("high-score", timeleft);
  // }
};

function timeSavecal() {
  localStorage.setItem("high-score", timeLeft);
}



function renderLastRegistered() {
  var score = document.querySelector("#high-score")
  score.textContent = localStorage.getItem('high-score');
}





startBtn.onclick = countdown;
startBtn.addEventListener("click", start);


var questions = [
  { question: "what class has the highest hit die?", answerA: "monk", answerB: "barbarian", answerC: "paladin", answerD: "fighter" },
  { question: "what die is used the most?", answerA: "D20", answerB: "D8", answerC: "D6", answerD: "D100" },
  { question: "what class can cast find steed?", answerA: "claric", answerB: "wizard", answerC: "paladin", answerD: "warlock" },
  { question: "what race is immune to sleep spells?", answerA: "drow", answerB: "dwarf", answerC: "orc", answerD: "halfling" },
  { question: "what level do you get a new feat?", answerA: "2", answerB: "4", answerC: "6", answerD: "8" },
];