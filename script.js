
// ROCK PAPER SCISSORS

// This function returns the computer's choice
function getComputerChoice() {
    let choice  = Math.floor(Math.random()*3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// This function gets and returns the user's choice
function getHumanChoice() {
    let input = prompt("Enter your input: \nNote: valid inputs are only 'rock', 'paper' and 'scissors' (quotation marks excluded, case insensitive)", "");

    // Handle input validitiy
    if (!input) input = "";
    input = input.toLowerCase();
    if (input != "rock" && input != "paper" && input != "scissors") {
        input = getComputerChoice();
        console.log("Invalid input! The computer has picked a random choice for you.");
    }

    return input;
}

// Score counts
let computerScore = 0;
let humanScore = 0;

// Function to compare computer and user choices and update score accordingly
function playRound(computerChoice, humanChoice) {
    console.log("You chose: '" + humanChoice + "'. Computer chose: '" + computerChoice + "'.");
    if (computerChoice === humanChoice) console.log("Tie!");
    else if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        console.log("You lose!");
    }
    else {
        humanScore++;
        console.log("You win!");
    }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);