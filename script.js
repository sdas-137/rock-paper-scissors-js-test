// ROCK PAPER SCISSORS
// By sdas_137

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

    const inputButtons = document.querySelector(".buttons");

    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");

    let input;
    inputButtons.addEventListener("click", (event) => {
        input = event.target.id;
    });

    return input;

}

// Function to play game
function playGame() {

    // Score counts
    let computerScore = 0;
    let humanScore = 0;

    // Function to compare computer and user choices and update score accordingly
    function playRound(computerChoice, humanChoice) {

        const humanChoiceDisplay = document.querySelector(".human-choice");
        const computerChoiceDisplay = document.querySelector(".computer-choice");
        const gameLog = document.querySelector(".gamelog");

        humanChoiceDisplay.textContent = "You chose " + humanChoice + "!";
        computerChoiceDisplay.textContent = "Computer chose " + computerChoice + "!";

        // Game logic
        if (computerChoice === humanChoice) {
            gameLog.textContent = "Tie!";
        }
        else if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper") {
            computerScore++;
            gameLog.textContent = "You lose this round!";
        }
        else {
            humanScore++;
            gameLog.textContent = "You win this round!";
        }

    }

    console.log("Rock, Paper, Scissors! \nPlay against a computer for 5 rounds!");
    
    // Game plays for 5 rounds
    for (let i = 0; i < 5; i++){

        console.log("\nRound " + (i + 1));

        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(computerSelection, humanSelection);

        console.log("Your score: " + humanScore + ". Computer score: " + computerScore + ".");

    }

    console.log("\nFinal scores: \nYour score: " + humanScore + ". Computer score: " + computerScore + ".");

    // Final scores and decide winner
    if (computerScore > humanScore) console.log("You lose! Better luck next time!");
    else if (computerScore < humanScore) console.log("You win! Congratulations!");
    else console.log("It's a tie!");

    console.log("\nRefresh this page to play again");

}

playGame();