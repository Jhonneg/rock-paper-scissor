
getPlayerChoice();
getComputerChoice();
startRound();

 function startRound(playerChoice,computerChoice){
     let roundWinner;

     if (playerChoice > computerChoice) {
         roundWinner = playerChoice;
     }
     if (playerChoice < computerChoice) {
         roundWinner = computerChoice;
     }
     return alert("The winner is " + roundWinner + " .");
 }


function getPlayerChoice() {
    let playerChoice = prompt("pick rock, paper or scissor");
    if (playerChoice == "rock") {playerChoice == 1
    }
    if (playerChoice == "paper") {playerChoice == 2
    }
    if (playerChoice == "scissor") {playerChoice == 3
    }
    return alert("You picked " + playerChoice);
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice == 1) {return "rock"}
    else if (computerChoice == 2) {return "paper"}
    else if (computerChoice == 3) {return "scissor" }
}


