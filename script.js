const prompt = require('prompt-sync')();
const validChoices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choiceUser = prompt("rock, paper or scissors? ");
    choiceUser = choiceUser.toLowerCase();
    while (!validChoices.includes(choiceUser)) {
        console.log("Invalid choice. Please choose rock, paper or scissors.");
        choiceUser = prompt("rock, paper or scissors? ");
        choiceUser = choiceUser.toLowerCase();
    }
    return choiceUser;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log('Computer chose: ' + computerChoice);
    console.log('You chose: ' + humanChoice);
    if (humanChoice === computerChoice) {
        console.log('Draw, no points given to either side.');
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log('You Won!');
        humanScore++;
    } else {
        console.log('You Lost!');
        computerScore++;
    }
}

function playGame() {
    for (let j = 0; j <= 5; j++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log('You Won the Game!');
    } else if (humanScore < computerScore) {
        console.log('You Lost the Game!');
    } else {
        console.log('The Game is a Draw!');
    }
}

playGame();

