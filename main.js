const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const random = options[Math.floor(Math.random() * options.length)];
    return random;
}

function winnerOfRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection) {
        return "tie";
    } else if((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")) {
        return "player";
    } else { 
        return "computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const res = winnerOfRound(playerSelection, computerSelection)
    if(res === "tie"){
        return "Its a tie!"
    } else if (res === "player") {
        return `Player wins! ${playerSelection} beats ${computerSelection}.`;
    } else{
        return `Computer wins! ${computerSelection} beats ${playerSelection}.`;
    }
}

function checkPlayerInput() {
    let input = false;
    while(input == false) {
        const playerChoice = prompt("Choose rock, paper or scissors");
        if(playerChoice == null) {
            continue;
        } 
        const inputInLowerCase = playerChoice.toLocaleLowerCase();
        if(options.includes(inputInLowerCase)) {
            input = true;
            return inputInLowerCase;
        }
    }
}

let playerScore = 0;
let computerScore = 0;

function playGame() {
    for(i = 1; i <= 5; i++) {
        const playerSelection = checkPlayerInput();
        const computerSelection = getComputerChoice();
        console.log("Round " + i)
        console.log(playRound(playerSelection, computerSelection))
        if(winnerOfRound(playerSelection, computerSelection) === "player") {
            playerScore++;
        } else if(winnerOfRound(playerSelection, computerSelection) === "computer") {
            computerScore++;
        }
        console.log("Player score: " + playerScore + " | " + "Computer score: " + computerScore);
        console.log("__________________________________")
        
    } 

    console.log("Game over")

    if(playerScore > computerScore) {
        console.log("Player won the game!");
    } else if(computerScore > playerScore) {
        console.log("Computer won the game!");
    } else {
        console.log("It was a tie!")
    }
}

playGame()
