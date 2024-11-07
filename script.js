const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const buttonsDiv = document.querySelector(".buttons");

const humanIcon = document.querySelector("#human-icon")
const aiIcon = document.querySelector("#ai-icon")

const results = document.querySelector(".results");
const score = document.querySelector(".score");

let humanScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorsBtn.addEventListener("click", playRound);



function playRound(e) {
    humanChoice = e.target.textContent
    
    computerChoice = getComputerChoice();

    updateIcon(humanChoice, computerChoice);
    
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
    
    updateScore();

    if (humanScore === 5) {
        declareWinner("You");
    }
    else if (computerScore === 5) {
        declareWinner("AI")
    }
}

function updateScore() {
    const scoreMsg = `${humanScore} ${computerScore}`;
    score.textContent = scoreMsg;
}

function updateIcon(iconHuman="👤", iconAi="🤖") {
    humanIcon.textContent = iconHuman;
    aiIcon.textContent = iconAi;
}

function declareWinner(winner) {
    if (winner === "You") {
        results.textContent = "YOU WIN. CONGRATULATIONS!"
    }
    if (winner === "AI") {
        results.textContent = "AI WINS. BETTER LUCK NEXT TIME!"
    }
    buttonsDiv.removeChild(rockBtn);
    buttonsDiv.removeChild(paperBtn);
    buttonsDiv.removeChild(scissorsBtn);
    
    const playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "Play Again";
    playAgainBtn.setAttribute("id", "playAgain")
    playAgainBtn.addEventListener("click", playAgain)
    buttonsDiv.appendChild(playAgainBtn);

}

function playAgain(delRockBtn, delPaperBtn, delScissorsBtn) {
    humanScore = 0;
    computerScore = 0;
    
    updateScore()

    results.textContent = "Ready? Click your choice.";
    const playAgainBtn = document.querySelector("#playAgain");
    buttonsDiv.removeChild(playAgainBtn);

    const rockBtn = document.createElement("button");
    const paperBtn = document.createElement("button");
    const scissorsBtn = document.createElement("button");

    rockBtn.setAttribute("id", "rock");
    paperBtn.setAttribute("id", "paper");
    scissorsBtn.setAttribute("id", "scissors");
    
    rockBtn.textContent = ("🤜");
    paperBtn.textContent = ("🫱");
    scissorsBtn.textContent = ("✌️");

    rockBtn.addEventListener("click", playRound);
    paperBtn.addEventListener("click", playRound);
    scissorsBtn.addEventListener("click", playRound);

    buttonsDiv.appendChild(rockBtn);
    buttonsDiv.appendChild(paperBtn);
    buttonsDiv.appendChild(scissorsBtn);

}

function getComputerChoice() {
    computerChoice = getRandomInt();
    
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