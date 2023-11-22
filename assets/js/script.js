//Picking the HTML elements by Id 
let introPage = document.getElementById("intro");
let quizPage = document.getElementById("quiz");
let initialsPage = document.getElementById("initials");
let highscorePage = document.getElementById("highscore");
let signUpButton = document.querySelector("#sign-up");
let startButton = document.getElementById("start-quiz");
let questionElement = document.getElementById('question');
let choiceElement = document.getElementById('choices');
let initialInput = document.getElementById("msg");
let scoresList = document.querySelector("#scores-list");
let scoresForm = document.querySelector("#score-form");


let scoresArray = [];

let points = 0;

// let finishButton = document.getElementById("finish-quiz");
let timerOfGame = document.getElementById("timer");
let pointsOfGame = document.getElementById("points");

let gameTimer = 100;
//Button which initialize game start
startButton.addEventListener("click", startGame);
//After a click on the button startGame () function will start

function startGame() {
    //Calling the questions function, which displays questions
    displayQuestion();
    //Changing the display properties of "intro" section - to hide state
    introPage.classList.add("hide");
    //Removing "hide" display properties from "quiz" section 
    quizPage.classList.remove("hide");
    //Setting the timer


};

// Setting up the timer of the game
let myInterval = setInterval(myTimer, 1000);

function myTimer() {
    // Decrement by one every each second
    gameTimer--;
    timerOfGame.textContent = gameTimer + " seconds left";
    // Counting a points for the correct answers
    pointsOfGame.textContent = points + " your score";

    if (gameTimer === 0 || gameTimer < 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        stageInitials();
    };
};

//Database of questions questions
let questionData = [{
    title: "Which HTML tag is used to link an external JavaScript file to an HTML document?",
    choices: ["script", "link", "js", "javascript"],
    answer: 0
}, {
    title: "What does CSS stand for?",
    choices: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
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
}];
// Starting number of arrays questions
let currentQuestion = 0;

// Function which shows the questions

function displayQuestion() {
    // Declaring the actualQuestion and assigning the index from questionData
    let actualQuestion = questionData[currentQuestion];
    // div with the question assigning to the title - key from the questionData database
    questionElement.textContent = actualQuestion.title;
    myTimer();
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
};

// Function to check the answers
function checkAnswer(choiceIndex) {
    // Declaring choiceIndex
    // Declaring the current question and assigning the current object from questionData array 
    let actualQuestion = questionData[currentQuestion];
    // if users choise index is equal to answer index  alert('Correct!') and add 100 points
    if (choiceIndex === actualQuestion.answer) {
        alert('Correct!');
        points += 100;
    } else {
        // if users choise index is not equal to answer index  alert('Incorrect!') and decrement 10 sec
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
    }
}
// section for initials
function stageInitials() {
    // Make section visible
    quizPage.classList.add("hide");
    // Hide previous one
    initialsPage.classList.remove("hide");
    highscorePage.classList.add("hide");
    // visible

    function storeScore() {
        // Stringify and set key in localStorage to scoresArray array
        localStorage.setItem("scoresArray", JSON.stringify(scoresArray));
    }
    // Add submit event to form 
    scoresForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let scoreText = initialInput.value.trim();
        // Return from function early if submitted scoreText is blank
        if (scoreText === "") {
            return;
        }
        // Add new scoreText and points to todos scoresArray
        scoresArray.push([scoreText] + [points]);
        // Clear the input
        initialInput.value = "";
        // Store updated scoresArray in localStorage, re-render the list
        storeScore();
        renderScores();
    })
    stageHighscore();
    
};

// Funtion that taking from the memory data about users
function renderScores() {
    scoresList.innerHTML = "";
    // scoresCount.textContent = scoresArray.length;
    // Render a new li for each todo
    for (let i = 0; i < scoresArray.length; i++) {
        let score = scoresArray[i];
        let li = document.createElement("li");
        li.textContent = score;
        li.setAttribute("data-index", i);
        scoresList.appendChild(li);
    }
}
// Section with information about previous 
function stageHighscore() {

    highscorePage.classList.remove("hide");
    function myStopFunction() {
        clearInterval(myInterval);
    }

    // This function is being called below and will run when the page loads.
    function init() {
        let storedScores = JSON.parse(localStorage.getItem("scoresArray"));
        // If storedScores were retrieved from localStorage, update the todos array to it
        if (storedScores !== null) {
            scoresArray = storedScores;
        }
        // This is a helper function that will render scoresArray to the DOM
        renderScores();
    }
    init()
    myStopFunction()
};
