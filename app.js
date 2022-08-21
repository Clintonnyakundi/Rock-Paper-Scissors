const choice = ["rock", "paper", "scissors"];
function getComputerChoice()
{
    return (choice[~~(Math.random() * 3)]);
}
console.log (getComputerChoice());

