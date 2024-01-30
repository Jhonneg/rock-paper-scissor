function getComputerChoice() {
    const computerPicks = ["rock", "paper", "scissor"];
    let computerCalc = Math.floor(Math.random() * computerPicks.length);
    let computerPicked = computerPicks[computerCalc];
    alert("Computer picked " + computerPicked);
    return computerPicked
}
function getPlayerChoice() {
    const playerChoice = prompt("pick rock, paper or scissor");
    alert("You picked " + playerChoice)
    return playerChoice
}
function playGame(){
    let playerScore = 0
    let computerScore = 0
    const playerChoice = getPlayerChoice();
     const computerPicked = getComputerChoice();
    for (let i = 0; i < 5; i++)
     if (computerPicked === playerChoice) {
        alert("Draw")
    } else if  (computerPicked === "paper" && playerChoice === "rock") {
        alert("Player lost")
         computerScore++
    } else if (computerPicked === "scissor" && playerChoice === "rock") {
        alert("Player won")
         playerScore++
    }
    if (playerScore =5 && computerScore<5) {
        alert("Player won the game")
    }
    else if (computerScore = 5 && playerScore<5) {
        alert("Computer won the game")
    }
}

playGame();