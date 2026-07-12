
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

// Function to play game
function playGame() {
    // Score counts
    let computerScore = 0;
    let humanScore = 0;

    // Function to compare computer and user choices and update score accordingly
    function playRound(computerChoice, humanChoice) {
        console.log("You chose: '" + humanChoice + "'. Computer chose: '" + computerChoice + "'.");
        if (computerChoice === humanChoice) console.log("Tie!");
        else if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper") {
            computerScore++;
            console.log("You lose this round!");
        }
        else {
            humanScore++;
            console.log("You win this round!");
        }
    }

    // Game plays for 5 rounds
    console.log("Rock, Paper, Scissors! \nPlay against a computer for 5 rounds!");
    for (let i = 0; i < 5; i++){

        console.log("\nRound " + (i + 1));

        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(computerSelection, humanSelection);

        console.log("Your score: " + humanScore + ". Computer score: " + computerScore + ".");
    }

    console.log("\nFinal scores: \nYour score: " + humanScore + ". Computer score: " + computerScore + ".");

    if (computerScore > humanScore) console.log("You lose! Better luck next time!");
    else if (computerScore < humanScore) console.log("You win! Congratulations!");
    else console.log("It's a tie!");

    console.log("\nRefresh this page to play again");

}

playGame();