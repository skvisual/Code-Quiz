var startBtn = document.getElementById("startBtn");
var questionText = document.getElementById("question");
var timeEl = document.querySelector("#time");
var timerDiv = document.getElementById("#timer");
var secondsLeft = 40;
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

/////////////////////////////////////////////////


function startGame(){
    hideStart()
    setTime()
    displayQuestion()
}

//hideStart gets rid of the start button and unhides controls and quizBox 
function hideStart() {
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("controls").style.display = "block";
    document.getElementById("quizBox").style.display = "block";
}


//upon clicking start a countdown timer will begin. default time is set above.
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.innerHTML = "Time Left: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
        (alert("Out of time, try again!"));
        //alert that appears when time runs out
    

      
    }

  }, 1000); //decrement set to 1 second
}


//I don't why I struggle with using loops, but as a result this is the only way I could get any questions to display or change. I know it's not right, and wouldn't even work if I had the other parts to this assignment done. It's just here to show what I ended up with.

function displayQuestion() {
  let q = questions[currentQuestion];
  question.innerHTML = q.question;
  btnA.innerHTML = q.choiceA;
  btnB.innerHTML = q.choiceB;
  btnC.innerHTML = q.choiceC;
  btnD.innerHTML = q.choiceD
}

function nextQuestion() {
  let q = questions[currentQuestion++];
  question.innerHTML = "<p>"+ q.question +"</p>";
  btnA.innerHTML = q.choiceA;
  btnB.innerHTML = q.choiceB;
  btnC.innerHTML = q.choiceC;
  btnD.innerHTML = q.choiceD
  console.log('working')
}

//Went through what seemed like dozens of ways to lay this information out. Either way, since I couldn't get my loops done, these are also just kind of here to show what I ended up with.

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
      correct: "A"

  },
  {
      question: "What does JS stand for?",
      choiceA: "ANSWER 1",
      choiceB: "ANSWER 2",
      choiceC: "ANSWER 3",
      choiceD: "ANSWER 4",
      correct: "A"

  },
  {
      question: "PLACEHOLDER QUESTION 1",
      choiceA: "ANSWER 1",
      choiceB: "ANSWER 2",
      choiceC: "ANSWER 3",
      choiceD: "ANSWER 4",
      correct: "D"
  },
  {
      question: "PLACEHOLDER QUESTION 2",
      choiceA: "ANSWER 1",
      choiceB: "ANSWER 2",
      choiceC: "ANSWER 3",
      choiceD: "ANSWER 4",
      correct: "D"
  }
];

//MISSING SCORE, END SCREEN AND INPUTS. I tried focusing on getting the loop done. which unfortunately lie in stuff needed to really get this assignment done. I will be using my tutoring sessions to work on my js.......



// var questions = [
//   ["question 1 text", "choice 1", "choice 2", "choice 3", "choice 4"]
//   ["question 2 text", "choice 1", "choice 2", "choice 3", "choice 4"]
//   ["question 3 text", "choice 1", "choice 2", "choice 3", "choice 4"]
//   ["question 4 text", "choice 1", "choice 2", "choice 3", "choice 4"]
// ]

// var questions = ["QUESTION 1 TEXT", "QUESTION 2 TEXT", "QUESTION 3 TEXT", "QUESTION 4 TEXT"]
// var choices = [
// 	["Q1C1", "Q1C2", "Q1C3", "Q1C4"],
// 	["Q2C1", "Q2C2", "Q2Q3", "Q2C4"],
// 	["Q3C1", "Q3C2", "Q3Q3", "Q3C4"],
// 	["Q4C1", "Q4C2", "Q4Q3", "Q4C4"]
// ]
// var answerKey = ["Q1A", "Q2A", "Q3A", "Q4A"]

////////////////////
//


