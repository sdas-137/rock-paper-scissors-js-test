console.log("Hello World!");

function getComputerChoice () {
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

for (let i = 0; i < 10; i++) console.log(getComputerChoice());