function getComputerChoice() {
    const computerPicks = ["Rock", "Paper", "Scissor"];
    let computerCalc = Math.floor(Math.random() * computerPicks.length);
    let computerPicked = computerPicks[computerCalc];
    document.querySelector(".computerpick").textContent = computerPicked
    return computerPicked
}

function getPlayerChoice() {
    let playerChoice = document.querySelector('button').getAttribute('value')
    document.querySelector(".playerpick").textContent = playerChoice
    return
}
function playGame() {
    getPlayerChoice()
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 6; i++) {
        const playerChoice = getPlayerChoice();
        const computerPicked = getComputerChoice();
        if (computerPicked === playerChoice) {
            alert("Draw")
        } else if (computerPicked === "paper" && playerChoice === "rock") {
            alert("Player lost")
            computerScore++
        } else if (computerPicked === "scissor" && playerChoice === "rock") {
            alert("Player won")
            playerScore++
        } else if (computerPicked === "rock" && playerChoice === "paper") {
            alert("Player won")
            playerScore++
        } else if (computerPicked === "paper" && playerChoice === "scissor") {
            alert("Player won")
            playerScore++
        } else if (computerPicked === "scissor" && playerChoice === "paper") {
            alert("Player lost")
            computerScore++
        } else if (computerPicked === "rock" && playerChoice === "scissor") {
            alert("Player lost")
            computerScore++
        }
    }
    if (playerScore == 3 || computerScore == 3) {
        i = 6
    } 
    if (playerScore > computerScore) {
        alert("Player won the game")
    } else if (computerScore > playerScore) {
        alert("Computer won the game")
    }
    
}
