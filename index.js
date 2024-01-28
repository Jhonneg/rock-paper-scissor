getPlayerChoice();
getComputerChoice();
startRound();
 function startRound(playerChoice,computerChoice){
    if (playerChoice = "rock" && computerChoice <= 33); {
         alert("there was a draw");
     }
 }


function getPlayerChoice() {
    const playerChoice = prompt("pick rock, paper or scissor");
    if (playerChoice == "rock") {
    }
    if (playerChoice == "paper") {
    }
    if (playerChoice == "scissor") {
    }
    alert("you picked " + playerChoice);
    return playerChoice;
}

function getComputerChoice() {
    let computerChoice = Math.random() * 100;
    computerChoice = Math.floor(computerChoice) + 1;
    if (computerChoice <= 33) {
        computerChoice = "rock"
    }
    if (computerChoice > 34 && computerChoice <= 67) {
        computerChoice = "paper"
    }
    if (computerChoice > 68) { 
        computerChoice = "scissor"
    }
    alert("Computer picked " + computerChoice);
    return computerChoice;
}


