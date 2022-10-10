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

console.log(getComputerChoice());