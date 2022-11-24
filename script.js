const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    })
})

const playerScore = document.getElementById("playerscore");
const computerScore = document.getElementById('computerscore');
const result = document.getElementById('result');

let pScore = 0;
let cScore = 0;
let winScore = 5;

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    playerSelection = capitalize(playerSelection);
    if (playerSelection == computerSelection) {
        result.textContent = "It's a draw! " + playerSelection + " draws " + computerSelection + "!";
    } else if (playerSelection == "Rock" && computerSelection == "Paper" || 
               playerSelection == "Paper" && computerSelection == "Scissors" ||
               playerSelection == "Scissors" && computerSelection == "Rock") {
            result.textContent = "You Lose! " + computerSelection + " beats " + playerSelection +"!";
            cScore++;
            computerScore.textContent = cScore.toString();
    } else {
        result.textContent = "You Win! " + playerSelection + " beats " + computerSelection + "!";
        pScore++;
        playerScore.textContent = pScore.toString();
    }
    checkForWinner(); 
}


function checkForWinner() {
    if (pScore == winScore) {
        result.textContent = "The player wins, congratulations!";
    } else if (cScore == winScore) {
        result.textContent = "The computer wins, better luck next time!";
    }
}

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    console.log(randomChoice);

    if (randomChoice == 0) {
        return "Rock";
    } else if (randomChoice == 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function capitalize(word) {
    if (word == null) {
        return word;
    }
    firstLetter = word.slice(0,1);
    rest = word.substr(1);
    return firstLetter.toUpperCase() + rest.toLowerCase();
}

