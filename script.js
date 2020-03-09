//identify variables needed to link html to js
var startButton = document.getElementById("startBtn");
var contentBox = document.getElementById("question-container");
var questionText = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var buttonA = document.getElementById("btnA");
var buttonB = document.getElementById("btnB");
var buttonC = document.getElementById("btnC");
var buttonD = document.getElementById("btnD");


//Added an event listener to the startButton, that when 'clicked', it runs our startGame function
startButton.addEventListener("click", startGame);

//click event listener for buttonA-D, upon click, it runs the confirmChoice function
//answerButtons.addEventListener("click", confirmChoice); <--I originally had this, but then second-guessed myself. All buttons do console.log under confirmChoice function
buttonA.addEventListener("click", confirmChoice);
buttonB.addEventListener("click", confirmChoice);        
buttonC.addEventListener("click", confirmChoice);        
buttonD.addEventListener("click", confirmChoice);

//Our startGame function fires when the startButton is clicked
function startGame() {
    startButton.classList.add("hide") //adds the hide class to start button
    contentBox.classList.remove("hide") //removes the hide class from contentBox hidden by default
    displayQuestion(questions[0]) //...(question)-buttons undefined ...(arr.questions)/(arr.question)-default text (arr.questions[])-arr not defined

    console.log('Start Button OK')
}

//displays question on screen ::SEE NOTES BELOW!!!!::
function displayQuestion(question) {
    questionText.innerHTML = question.question;      
    buttonA.innerHTML = question.choiceA;         //currently undefined
    buttonB.innerHTML = question.choiceB;         //currently undefined
    buttonC.innerHTML = question.choiceC;         //currently undefined
    buttonD.innerHTML = question.choiceD;         //currently undefined
    console.log('displayQuestion function OK')
    
}

//function that runs when an answer button is clicked. Will check to see if the user guess matches the answer. if so, will add a point to score. if not, reduce time alloted by 5000ms. ??preventDefault() here???
function confirmChoice() {
    
    console.log("confirmChoice OK")

}

//An array containing the quiz-questions, as objects...that contains answer choices as objects......yes..? 
var questions = [
    {
        question: "This is Question 1",                 //I can access this, but only (to what I believe to be) statically through js:26.
        choices: {
            choiceA: "A",                               //How to call a specific key:value of an object within an array....that's in an array......
            choiceB: "B",
            choiceC: "C",
            choiceD: "D",
        },
        answer: "A"
    },
    {
        question: "This is Question 2",
        choices: {
            choiceA: "A",
            choiceB: "B",
            choiceC: "C",
            choiceD: "D",
        },
        answer: "B"
    }
];

//////////////////////////////////////*SCRATCH PAD*/////////////////////////////////////////////////////

//  :::::KIERAN, some of these comments still may not directly show on here. They are mainly just a collection of thoughts as I working. But definitely a good read:::::::

//addEventListener on answer buttons. I do not believe it will select properly upon click.

//displayQuestions function is wrong. There must be a better/correct way of doing this. As-is, I dont think this will be able to accept new values from the other questions.

//confirmChoice needs variable

//I need a userGuess variable somewhere....?

//second function to "retrieve" question and answer from questions array???

//button text reads undefined. (These will take the data from our choices in our answers array)

//preventDefault()

    //onclick for buttons. Make myFunction verify the answer chosen against the correct answer found in the appropriate question object.
//<button onclick="myFunction()">Click me</button>

//nextQuestion () needs to include a for loop to cycle through the remaining questions

 //??//value = object.property;??



 
////possibly the userGuess check value?/////

// var userGuess = (the value of the selected choice)
// function checkValue(){
//      var userGuess = ?????
//     if(userGuess === question.answer)<---?????
        
// }