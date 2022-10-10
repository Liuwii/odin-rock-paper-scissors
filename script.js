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

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);
    if (playerSelection == computerSelection) {
        console.log("It's a draw! " + playerSelection + " draws " + computerSelection + "!");
        return 0;
    } else if (playerSelection == "Rock" && computerSelection == "Paper" || 
               playerSelection == "Paper" && computerSelection == "Scissors" ||
               playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log("You Lose! " + computerSelection + " beats " + playerSelection +"!");
        return 2; 
    } else {
        console.log("You Win! " + playerSelection + " beats " + computerSelection + "!");
        return 1;
    } 
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = capitalize(prompt("Rock, Paper or Scissors?", ""));
        if (!(playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors") || playerSelection == "") {
            console.log("You are disqualified!");
            return;
        }
        let roundResult = playRound(playerSelection, getComputerChoice());
        if (roundResult == 1) {
            playerScore++;
        } 
        if (roundResult == 2) {
            computerScore++;
        }
    }
    return "Result: " + playerScore.toString() + ":" + computerScore.toString();
}

console.log(game());