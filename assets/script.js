//Picking the HTML elements by Id 
let introPage = document.getElementById("intro");
let quizPage = document.getElementById("quiz");
let initialsPage = document.getElementById("initials");
let highscorePage = document.getElementById("highscore");

let startButton =  document.getElementById("start-quiz");
let finishButton = document.getElementById("finish-quiz");
let timerOfGame = document.getElementById("timer");

<<<<<<< HEAD

let gameTimer = 5;
=======
let gameTimer = 100;
>>>>>>> 7bdb52c (add setting up the timer)
//Button which initialize game start
startButton.addEventListener("click", startGame);
//After a click on the button startGame () function will start



function startGame (){
    //Calling the questions function, which displays questions
    displayQuestion ();
    //Changing the display properties of "intro" section - to hide state
    introPage.classList.add("hide");
    //Removing "hide" display properties from "quiz" section 
    quizPage.classList.remove("hide");
    //Setting the timer

    function setTime() {
        // Sets interval in variable
        let timerInterval = setInterval(function() {
            gameTimer--;
            timerOfGame.textContent = gameTimer + " seconds left";
      
          if(gameTimer === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            stageTwo();
          }
      
        }, 1000);
      }
      setTime();
};


//Database of questions questions
let questionData = [{
    title: "Which HTML tag is used to link an external JavaScript file to an HTML document?",
    choices: ["script", "link", "js", "javascript"],
    answer: 0
}, {
    title: "What does CSS stand for?",
    choices: ["Computer Style Sheets", "Creative Style Sheets", " Cascading Style Sheets", "Colorful Style Sheets"],
    answer: 2
}, {
    title: "Which JavaScript method is used to add elements to the end of an array?",
    choices: ["push()", "append()", "addToEnd()", "concat()"],
    answer: 0
}, {
    title: " In CSS, which property is used to change the text color of an element?",
    choices: ["text-color", "color", "font-color", "text-style"],
    answer: 1
}, {
    title: "What is the correct syntax to create a function in JavaScript?",
    choices: ["function = myFunction() {}", "var function = myFunction() {}", "function myFunction() {}", "create function myFunction() {}"],
    answer: 2
} ];
//starting number of arrays questions
let index = 0;

//function which shows the questions
function displayQuestion () {
    //using innerHTML
    quizPage.innerHTML = `
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
    finishButton.addEventListener("click", stageTwo)

<<<<<<< HEAD
}
=======
function displayQuestion() {

    const actualQuestion = questionData[currentQuestion];
    questionElement.textContent = actualQuestion.title;

    choiceElement.innerHTML = ''; // Clear previous choices
    // Iterates through the choices array for the current question

    actualQuestion.choices.forEach((choice, index) => {
        // For each choice in the array, a button is created dynamically
        const choiceButton = document.createElement('button');
        // Text content set to the choice.
        choiceButton.textContent = choice;
        // An event listener is added to each button that listens for a click 
        choiceButton.addEventListener('click', () => checkAnswer(index));
        // Once a button is clicked, the checkAnswer(index) function is called with the index passed as an argument.
        choiceElement.appendChild(choiceButton);
    });
}
// Function to check the answers
function checkAnswer(choiceIndex) {
    // Declaring choiceIndex
    // Declaring the current question and assigning the current object from questionData array 
    const actualQuestion = questionData[currentQuestion];
    // if users choise index is equal to answer index  alert('Correct!')
    if (choiceIndex === actualQuestion.answer) {
        alert('Correct!');
        // if users choise index is not equal to answer index  alert('Incorrect!') and decrement 10 sec
    } else {
        gameTimer = gameTimer - 10;
        alert('Incorrect!');
    }
    // Switch to the next question
    currentQuestion++;
    // if currentQuestion less than length of array of questionData - continue
    if (currentQuestion < questionData.length) {
        displayQuestion();
    } else {
        // else - stop the quiz
        stageInitials();
        alert('Quiz finished');
>>>>>>> 7bdb52c (add setting up the timer)


function nextQuestion () {
    index++;
    displayQuestion (); 
}

<<<<<<< HEAD



function stageTwo (){
=======
let initialInput = document.querySelector("#initial-input");

function stageInitials() {
>>>>>>> 7bdb52c (add setting up the timer)
    quizPage.classList.add("hide");
    initialsPage.classList.remove("hide");

};
