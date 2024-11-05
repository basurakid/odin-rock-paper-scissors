const getComputerChoice = () => {
    computerChoice = getRandomInt();
    console.log(computerChoice);
    
    if (computerChoice === 0) {
        return "rock";
    } 
    else if (computerChoice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

const getRandomInt = (max=3) => {
    return Math.floor(Math.random() * max);
}

const getHumanChoice = () => {
    let keepGoing = true
    while (keepGoing){
        humanChoice = prompt("ROCK, PAPER, SCISSORS, SHOOT!").toLowerCase();

        if (humanChoice === "rock") {
            keepGoing = false
        }
        if (humanChoice === "paper") {
            keepGoing = false
        }
        if (humanChoice === "scissors") {
            keepGoing = false
        } 
    }
    return humanChoice;
}

const playGame = () => {
    humanScore = 0;
    computerScore = 0;
    const playRound = (humanChoice, computerChoice) => {
        if (humanChoice === computerChoice) {
            console.log(`It's a draw, you both chose ${humanChoice}`)
        }
        else if (
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "rock")){
                
                console.log(`You lose, ${computerChoice} beats ${humanChoice}`)
                computerScore ++;
        }
        else {
            console.log(`You win, ${humanChoice} beats ${computerChoice}`)
            humanScore ++;
        }
    }

    for (let i=1; i <= 5; i++) {
        console.log(`Round ${i}`)
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log(`${humanScore > computerScore ? "You win!" : computerScore > humanScore ? "You lose!" : "You draw!"}`)
}

playGame()