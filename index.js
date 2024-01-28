getPlayerChoice();
getComputerChoice();
startRound();

 function startRound(playerChoice,computerChoice){
     let roundWinner;
     const roundDraw = new Boolean(false);
     if (playerChoice > computerChoice) {
         roundWinner = playerChoice;
     }
     if (playerChoice = computerChoice) {
         roundDraw = true;
     }
     if (playerChoice < computerChoice) {
         roundWinner = computerChoice;
     }
     if (roundDraw); {
         alert("Draw!");
     }
     if (playerChoice=!computerChoice){
         alert("The winner is " + roundWinner + " .");
     }
     return;
 }


function getPlayerChoice() {
    let playerChoice = prompt("pick rock, paper or scissor");
    if (playerChoice == "rock") { playerChoice <=1
    }
    if (playerChoice == "paper") { playerChoice > 1 && playerChoice <= 2
    }
    if (playerChoice == "scissor") {playerChoice = 3
    }
    alert("You picked " + playerChoice);
    return playerChoice;
}

function getComputerChoice() {
    let computerChoice = Math.random() * 3;
    computerChoice = Math.floor(computerChoice) + 1;
    if (computerChoice <= 1) {
        alert("Computer picked rock")
    }
    else if (computerChoice > 1 && computerChoice <= 2) {
        alert("Computer picked paper")
    }
    else if (computerChoice = 3) { 
        alert("Computer picked scissor")
    }
    return computerChoice;
}


