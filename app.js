const choice = ["rock", "paper", "scissors"];
function getComputerChoice()
{
    return (choice[~~(Math.random() * 3)]);
}

let playerSelection = "PAPER";
let computerSelection;
function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    if (playerSelection == computerSelection)
    {
        return ("You tie!");
    }
    else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
    )
    {
        return (`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
    else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
    )
    {
        return (`You win! ${playerSelection} beats ${computerSelection}`);
    }
}