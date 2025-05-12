let choices = ["rock", "paper", "scissors"];
let humanChoice;

const scoreContainer = document.getElementById("scoreContainer");
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const winnerDisplay = document.getElementById("winnerDisplay");
let humanScoreDisplay = document.getElementById("humanScoreDisplay");
let computerScoreDisplay = document.getElementById("computerScoreDisplay");

humanScore = 0;
computerScore = 0;



playRound(humanChoice);
        
function playRound(humanChoice){

    scoreContainer.style.display = "block";
    let index = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[index];

    if(computerChoice === humanChoice){
        playerDisplay.textContent = `Player: ${humanChoice}`;
        computerDisplay.textContent = `Computer: ${computerChoice}`;
        resultDisplay.textContent = "It's a tie!"
    }
    else{
        switch(humanChoice){
            case "rock":
                if(computerChoice === "paper"){
                    computerScore++;
                    playerDisplay.textContent = `Player: ${humanChoice}`;
                    computerDisplay.textContent = `Computer: ${computerChoice}`;
                    resultDisplay.textContent = "You lose!"
                    
                }
                else{
                    humanScore++;
                    playerDisplay.textContent = `Player: ${humanChoice}`;
                    computerDisplay.textContent = `Computer: ${computerChoice}`;
                    resultDisplay.textContent = "You win!"
                    
                }
                break;
            case "paper":
                if(computerChoice === "scissors"){
                    computerScore++;
                    playerDisplay.textContent = `Player: ${humanChoice}`;
                    computerDisplay.textContent = `Computer: ${computerChoice}`;
                    resultDisplay.textContent = "You lose!"
                   
                }
                else{
                    humanScore++;
                    playerDisplay.textContent = `Player: ${humanChoice}`;
                    computerDisplay.textContent = `Computer: ${computerChoice}`;
                    resultDisplay.textContent = "You win!"
                    
                }
                break;
            case "scissors":
                if(computerChoice === "rock"){
                    computerScore++;
                    playerDisplay.textContent = `Player: ${humanChoice}`;
                    computerDisplay.textContent = `Computer: ${computerChoice}`;
                    resultDisplay.textContent = "You lose!"
                    
                }
                else{
                    humanScore++;
                    playerDisplay.textContent = `Player: ${humanChoice}`;
                    computerDisplay.textContent = `Computer: ${computerChoice}`;
                    resultDisplay.textContent = "You win!"
                    
                }
                break;
        }
    }
    humanScoreDisplay.textContent = `Player Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

    checkWinner();
}

function checkWinner(){
    if(humanScore === 5){
        winnerDisplay.textContent = "Congratulations! You have won this game!";
        
    }
    else if (computerScore === 5){
        winnerDisplay.textContent = "Aww, you lost the game 😢 Good luck next time!";
        
    }


}