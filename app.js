const choice = ["rock", "paper", "scissors"];
function getComputerChoice()
{
    return (choice[~~(Math.random() * 3)]);
}

function getPlayerChoice()
{
    let playerChoice = prompt("Rock, Paper or Scissors? ");
    let lowerCaseInput = playerChoice.trim().toLowerCase();
    return (lowerCaseInput);
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

function game()
{
    let roundResult;
    let playerPoints = 0;
    let compPoints = 0;
    let playerTurn = "";
    let compTurn ="";
    let rounds;
    let i;

    rounds = prompt("How many rounds do you want to play? ");
    for (i = 0; i < rounds; i++)
    {
        compTurn = getComputerChoice();
        playerTurn = getPlayerChoice();
        roundResult = playRound(playerTurn, compTurn);
        if (roundResult.includes("You win"))
        {
            playerPoints++;
        }
        else if (roundResult.includes("You Lose"))
        {
            compPoints++;
        }
        console.log(roundResult);
    }

    if (playerPoints > compPoints)
    {
        console.log("You won the game " + playerPoints + " to " + compPoints + " !");
    }
    else if (compPoints > playerPoints)
    {
        console.log("You lost the game " + compPoints + " to " + playerPoints + " !");
    }
    else
    {
        console.log("You tied at " + playerPoints + " points!");
    }
}
game();