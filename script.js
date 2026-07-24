// ROCK PAPER SCISSORS
// By sdas_137

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

function getHumanChoice(event) {

    return event.target.classList[1];

}

function playGame() {

    let computerScore = 0;
    let humanScore = 0;

    // Compare computer and user choices and update score accordingly
    function playRound(computerChoice, humanChoice) {

        // Update choices displays
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

    // Plays a round only when the user clicks a button
    const NUM_ROUNDS = 5;
    let roundCount = 0;
    const inputButtons = document.querySelectorAll(".choose");
    inputButtons.forEach((button) => {
        button.addEventListener("click", (event) => {

            // Plays up to 5 rounds
            if (roundCount < NUM_ROUNDS) {
                const computerSelection = getComputerChoice();
                const humanSelection = getHumanChoice(event);
                playRound(computerSelection, humanSelection);
                roundCount++;
            }
            const scoresDisplay = document.querySelector(".scores");
            scoresDisplay.textContent = "Your score: " + humanScore + " Computer score: " + computerScore;

            // Display final score
            if (roundCount == NUM_ROUNDS) {
                const finalResult = document.querySelector(".result");
                if (computerScore > humanScore) finalResult.textContent = "You lose! Better luck next time!";
                else if (computerScore < humanScore) finalResult.textContent = "You win! Congratulations!";
                else finalResult.textContent = "It's a tie!";

                const refreshMessage = document.createElement("div");
                refreshMessage.classList.add("display", "refresh");
                refreshMessage.textContent = "Refresh this page to play again";
                const game = document.querySelector(".game"); game.appendChild(refreshMessage);
                roundCount++;
            }
        })
    });
}

playGame();