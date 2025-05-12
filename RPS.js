/* Please
read
the
comments
near 
the 
functions
...
...
...
Thank you! */


let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

playGame();

function playGame(){
    do {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice);
        roundsPlayed++;
        
    } while (roundsPlayed < 5);

    console.log(`Game is over, the final score is: (You) ${humanScore} : ${computerScore} (Computer)`);
}


function getComputerChoice(){
    let index = Math.floor(Math.random() * choices.length);
    console.log(choices[index]) // this is just to check if the function works properly, can be removed
    return choices[index];
   
    
}

function getHumanChoice(){
    let index = prompt("Enter a choice: 1 (rock), 2 (paper) or 3 (scissors)");
    index = (parseInt(index) - 1);
    console.log(choices[index]) // this is just to check if the function works properly, can be removed
    return choices[index];
    
}

function playRound(computerChoice, humanChoice){
    if(computerChoice === humanChoice){
        console.log("It's a tie!");
    }
    else{
        switch(humanChoice){
            case "rock":
                if(computerChoice === "paper"){
                    console.log("You lose!")
                    computerScore++;
                }
                else{
                    console.log("You win!");
                    humanScore++;
                }
                break;
            case "paper":
                if(computerChoice === "scissors"){
                    console.log("You lose!");
                    computerScore++;
                }
                else{
                    console.log("You win!");
                    humanScore++;
                }
                break;
            case "scissors":
                if(computerChoice === "rock"){
                    console.log("You lose!"); 
                    computerScore++;
                }
                else{
                    console.log("You win!");
                    humanScore++;
                }
                break;
        }
    }
}