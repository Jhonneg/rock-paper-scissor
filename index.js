
getPlayerChoice();
getComputerChoice();
startRound();

function startRound(playerChoice, computerPicked) {
    
}


function getPlayerChoice() {
    let playerChoice = prompt("pick rock, paper or scissor");
    if (playerChoice == "rock") {
        return alert("You picked rock")
    }
    else if (playerChoice == "paper") {
        return alert("You picked paper")
    }
    if (playerChoice == "scissor") {
        return alert("You picked scissor")
    }
}

function getComputerChoice() {
    let computerPicks = ["Rock","Paper","Scissor"];
    let computerCalc = Math.floor(Math.random()*computerPicks.length);
    let computerPicked = computerPicks[computerCalc];
    return alert("Computer picked "+computerPicked);

}


