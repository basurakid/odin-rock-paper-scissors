const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const buttonsDiv = document.querySelector(".buttons");

const results = document.querySelector(".results");

console.log(rockBtn.textContent);

let humanScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", playRound(rockBtn.textContent, getComputerChoice()));
paperBtn.addEventListener("click", playRound(paperBtn.textContent, getComputerChoice()));
scissorsBtn.addEventListener("click", playRound(scissorBtn.textContent, getComputerChoice()));



function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        results.textContent = `It's a draw, you both chose ${humanChoice}`
    }
    else if (
        (humanChoice === "🤜" && computerChoice === "🫱") ||
        (humanChoice === "🫱" && computerChoice === "✌️") ||
        (humanChoice === "✌️" && computerChoice === "🤜"))
        {
            
            results.textContent = `You lose, ${computerChoice} beats ${humanChoice}`;
            computerScore ++;
    }
    else {
        results.textContent = `You win, ${humanChoice} beats ${computerChoice}`;
        humanScore ++;
    }

    if (humanScore === 5) {
        declareWinner("You");
    }
    else if (computerScore === 5) {
        declareWinner("AI")
    }
}

function declareWinner(winner) {
    if (winner === "You") {
        results.textContent = "YOU WIN. CONGRATULATIONS!"

    if (winner === "AI") {
        results.textContent = "AI WINS. BETTER LUCK NEXT TIME!"
    }
    delRockBtn = buttonsDiv.removeChild(rockBtn);
    delPaperBtn = buttonsDiv.removeChild(paperBtn);
    delScissorsBtn = buttonsDiv.removeChild(scissorsBtn);
    
    const playAgain = document.createElement("button");
    tryAgain.textContent = "Play Again";
    tryAgain.addEventListener("click", playAgain)
    buttonsDiv.appendChild(tryAgain);

}

function getComputerChoice() {
    computerChoice = getRandomInt();
    console.log(computerChoice);
    
    if (computerChoice === 0) {
        return "🤜";
    } 
    else if (computerChoice === 1) {
        return "🫱";
    }
    else {
        return "✌️";
    }
}

function getRandomInt(max=3) {
    return Math.floor(Math.random() * max);
}