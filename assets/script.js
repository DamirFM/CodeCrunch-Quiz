//Picking the HTML elements by Id 
let introPage = document.getElementById("intro");
let quizePage = document.getElementById("quize");
let initialsPage = document.getElementById("initials");
let highscorePage = document.getElementById("highscore");
let gameTimer = 60;
let startButton =  document.getElementById("start-quiz");
let finishButton = document.getElementById("finish-quiz");
let timerOfGame = document.getElementById("timer");

//Button which initialize game start
startButton.addEventListener("click", startGame);
//After a click on the button startGame () function will start
function startGame (){
    //Calling the questions function, which displays questions
    displayQuestion ();
    //Changing the display properties of "intro" section - to hide state
    introPage.classList.add("hide");
    //Removing "hide" display properties from "quize" section 
    quizePage.classList.remove("hide");
    //Setting the timer
    setInterval(startTimer, 1000)
};
//Decrementing the timer 
function startTimer () {
    timerOfGame.textContent = gameTimer--;
}

//Database of questions questions
let questionData = [{
    title: "q1",
    choices: ["c1", "c2", "c3", "c4"],
    answer: 1
}, {
    title: "q2",
    choices: ["c1", "c2", "c3", "c4"],
    answer: 3
}, {
    title: "q3",
    choices: ["c1", "c2", "c3", "c4"],
    answer: 2
}, {
    title: "q4",
    choices: ["c1", "c2", "c3", "c4"],
    answer: 1
}, {
    title: "q5",
    choices: ["c1", "c2", "c3", "c4"],
    answer: 0
} ];
//starting number of arrays questions
let index = 0;

//function which shows the questions
function displayQuestion () {
    //using innerHTML
    quizePage.innerHTML = `
    <h2>${questionData[index].title}</h2>
        <ol id="choiceButton">
            <li><button>${questionData[index].choices[0]}</button></li>
            <li><button>${questionData[index].choices[1]}</button></li>
            <li><button>${questionData[index].choices[2]}</button></li>
            <li><button>${questionData[index].choices[3]}</button></li>
        </ol>
    ` 
    let choiceButton = document.getElementById("choiceButton");
    choiceButton.addEventListener("click", nextQuestion)
    
}


function nextQuestion () {
    index++;
    displayQuestion (); 
}

finishButton.addEventListener("click", stageTwo);

function stageTwo (){
    quizePage.classList.add("hide");
    initialsPage.classList.remove("hide");
    clearInterval(startTimer, 1000);
};
