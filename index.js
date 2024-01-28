getPlayerChoice();
getComputerChoice();

function getPlayerChoice() {
    playerChoice = prompt("pick rock, paper or scissor");
    if (playerChoice == "rock") {
        alert("you picked rock");
    }
    if (playerChoice == "paper") {
        alert("you picked paper");
    }
    if (playerChoice == "scissor") {
        alert("you picked scissor");
    }
    return playerChoice;
}

function getComputerChoice() {
    let computerChoice = Math.random() * 100;
    computerChoice = Math.floor(computerChoice) + 1;
    if (computerChoice <= 33) {
        alert("computer picked rock");
    }
    if (computerChoice > 34 && computerChoice <= 67) {
        alert("computer picked paper");
    }
    if (computerChoice > 68) {
        alert("computer picked scissor");
    }
    return computerChoice;
}


