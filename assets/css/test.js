



var startBtn = document.querySelector("#start");
var quiz = document.querySelector("main");
var passwordInput = document.querySelector('#high-score');
var timeLimit = document.getElementById('countdown');



function renderLastRegistered() {
    var score = localStorage.getItem('high-score');
  
    if ( score === null) {
      return;
    }
}


var start = function () {
 quiz.innerHTML = "";

}

questions = [
    {question: "bla bla bla"},
    {question: "bla bla bla"},
    {question: "bla bla bla"},
    {question: "bla bla bla"},
    {question: "bla bla bla"},
];



function countdown() {
    var timeLeft = 30;

    var timeInterval = setInterval(function() {
      if (timeLeft > -1) {
        timeLimit.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 0) {
        timeLimit.textContent = timeLeft + ' second remaining';
        timeLeft--;
      }
    }, 1000);
  }







 // localStorage.setItem('high-score', score);

 startBtn.onclick = countdown;
startBtn.addEventListener("click", start);