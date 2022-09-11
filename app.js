const choice = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('button');
const resultDisplay = document.getElementById('results');
const compDisplay = document.getElementById('comp-choice');
let results;
let compChoice;
let playerPoints = 0;
let compPoints = 0;

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        compChoice = choice[~~(Math.random() * 3)];
        compDisplay.innerHTML = compChoice;
        playRound(e.target.id, compChoice);
        if (playerPoints === 5 || compPoints === 5)
            overallWinner();
    })
}
);

function playRound(playerSelection, computerSelection)
{
    if (playerSelection == computerSelection)
    {
        results = "You tie this round!";
    }
    else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
    )
    {
        compPoints = ++compPoints;
        results = `You Lose this round! ${computerSelection} beats ${playerSelection}`;
    }
    else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
    )
    {
        playerPoints = ++playerPoints;
        results = `You win this round! ${playerSelection} beats ${computerSelection}`;
    }
    resultDisplay.innerHTML = results;
}
function overallWinner()
{
    playerPoints > compPoints ? alert("You win the game!") : alert("You lost the game!");
}