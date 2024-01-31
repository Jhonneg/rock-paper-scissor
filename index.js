function getComputerChoice() {
    const computerPicks = ["Rock", "Paper", "Scissor"];
    let computerCalc = Math.floor(Math.random() * computerPicks.length);
    let computerPicked = computerPicks[computerCalc];
    document.querySelector(".computerpick").textContent = computerPicked
    return computerPicked
}
function getPaper(){
    let playerChoice = 'Paper'
    return playerChoice
}
function getScissor() {
    let playerChoice = "Scissor"
    return playerChoice;
}
function getRock() {
    let playerChoice = "Rock"
    return playerChoice;
}
function getPlayerChoice() {
    let playerChoice = document.querySelector('button').value
    document.querySelector(".playerpick").textContent = playerChoice
    return playerChoice;
}

function playGame() {
    getPlayerChoice()
    getScissor()
    getRock()
    getPaper()
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 6; i++) {
        const playerChoice = getPlayerChoice();
        const computerPicked = getComputerChoice();
        if (computerPicked === playerChoice) {
            document.querySelector(".winner").textContent = 'Draw'
        } else if (computerPicked === "Paper" && playerChoice === "Rock") {
            document.querySelector(".winner").textContent = 'Computer won'
            computerScore++
        } else if (computerPicked === "Scissor" && playerChoice === "Rock") {
            document.querySelector(".winner").textContent = 'Computer won'
            playerScore++
        } else if (computerPicked === "Rock" && playerChoice === "Paper") {
            document.querySelector(".winner").textContent = 'Player won'
            playerScore++
        } else if (computerPicked === "Paper" && playerChoice === "Scissor") {
            document.querySelector(".winner").textContent = 'Player won'
            playerScore++
        } else if (computerPicked === "Scissor" && playerChoice === "Paper") {
            document.querySelector(".winner").textContent = 'Computer won'
            computerScore++
        } else if (computerPicked === "Rock" && playerChoice === "Scissor") {
            document.querySelector(".winner").textContent = 'Computer won'
            computerScore++
        }
    }
    if (playerScore == 3 || computerScore == 3) {
        i = 6
    } 
    if (playerScore > computerScore) {
        document.querySelector(".winner").textContent = 'Player won'
    } else if (computerScore > playerScore) {
        document.querySelector(".winner").textContent = 'Computer won'
    }
    
}