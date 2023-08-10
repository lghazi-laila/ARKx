const prompt = require("prompt-sync")({ sigint: true });

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let randomRPS = choice[Math.floor(Math.random() * choice.length)];
    return randomRPS;
}

function playRound(playerSelection, computerSelection) {
    //playerSelection = playerSelection.toLowerCase();

    if ((playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "rock")) {
        return ("You Win! " + playerSelection + " beats " + computerSelection);
    } else if ((playerSelection === "rock" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "rock")) {
        return ("You Loose! " + computerSelection + " beats " + playerSelection);
    } else if (playerSelection === computerSelection) {
        return ("Tie!")
    }
}

function game() {
    for (let i = 0; i < 5; i++) {


        let playerSelection = prompt("Enter Rock, Paper or Scissors :");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();