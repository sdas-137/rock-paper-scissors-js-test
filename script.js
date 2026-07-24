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

// This function returns the user's choice
function getHumanChoice(event) {

    return event.target.classList;

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
    
    // Game plays for 5 rounds
    const NUM_ROUNDS = 5;
    let roundCount = 0;

    // Get references to input buttons
    const inputButtons = document.querySelectorAll(".choose");

    // Plays a round only when the user clicks a button
    inputButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const computerSelection = getComputerChoice();
            const humanSelection = getHumanChoice(event);
            if (roundCount != NUM_ROUNDS) {
                playRound(computerSelection, humanSelection);
                roundCount++;
            }
        })
    });

    console.log("\nFinal scores: \nYour score: " + humanScore + ". Computer score: " + computerScore + ".");

    // Final scores and decide winner
    if (computerScore > humanScore) console.log("You lose! Better luck next time!");
    else if (computerScore < humanScore) console.log("You win! Congratulations!");
    else console.log("It's a tie!");

    console.log("\nRefresh this page to play again");

}

playGame();