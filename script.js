var startBtn = document.getElementById("startBtn");
var questionText = document.getElementById("question");
var timeEl = document.querySelector("#time");
var timerDiv = document.getElementById("#timer");
var secondsLeft = 120;
var currentQuestion = 0; 
var btnA = document.getElementById("btnA");
var btnB = document.getElementById("btnB");
var btnC = document.getElementById("btnC");
var btnD = document.getElementById("btnD");

btnA.addEventListener('click', nextQuestion);
btnB.addEventListener('click', nextQuestion);
btnC.addEventListener('click', nextQuestion);
btnD.addEventListener('click', nextQuestion);

startBtn.addEventListener('click', startGame);

function startGame(){
    setTime()
    hideStart()
    displayQuestion()
}

function hideStart() {
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("controls").style.display = "block";
    document.getElementById("quizBox").style.display = "block";
}

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.innerHTML = "Time Left: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      
    }

  }, 1000);
}

function displayQuestion() {
    let q = questions[currentQuestion];
    question.innerHTML = "<p>"+ q.question +"</p>";
    btnA.innerHTML = q.choiceA;
    btnB.innerHTML = q.choiceB;
    btnC.innerHTML = q.choiceC;
    btnD.innerHTML = q.choiceD

}

function nextQuestion() {
    //CHECK ANSWER FUNCTION?
    let q = questions[currentQuestion++];
    question.innerHTML = "<p>"+ q.question +"</p>";
    btnA.innerHTML = q.choiceA;
    btnB.innerHTML = q.choiceB;
    btnC.innerHTML = q.choiceC;
    btnD.innerHTML = q.choiceD
 console.log('working')
}



var questions = [
    {
        question: "What does HTML stand for?",
        choiceA: "Hightech Markup Language",
        choiceB: "Hyperlink Text Model Language",
        choiceC: "Hypertext Markup Language",
        choiceD: "Hiddentext Magic Lamp",
        correct: "C"
    },
    {
        question: "What does CSS stand for?",
        choiceA: "ANSWER 1",
        choiceB: "ANSWER 2",
        choiceC: "ANSWER 3",
        choiceD: "ANSWER 4",
        correct: "C"
    },
    {
        question: "What does JS stand for?",
        choiceA: "ANSWER 1",
        choiceB: "ANSWER 2",
        choiceC: "ANSWER 3",
        choiceD: "ANSWER 4",
        correct: "B"
    },
    {
        question: "PLACEHOLDER QUESTION 1",
        choiceA: "ANSWER 1",
        choiceB: "ANSWER 2",
        choiceC: "ANSWER 3",
        choiceD: "ANSWER 4",
        correct: "B"
    },
    {
        question: "PLACEHOLDER QUESTION 2",
        choiceA: "ANSWER 1",
        choiceB: "ANSWER 2",
        choiceC: "ANSWER 3",
        choiceD: "ANSWER 4",
        correct: "B"
    }
];




