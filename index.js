//first function is get computer choice
//write a prompt for user input
//new function called game (nest the playRound function IN this one)
//lastly, loop the function to play 5 rounds of the game

let choice = ["rock", "paper", "scissors"] // this works

let randomNum = Math.floor(Math.random() * choice.length) // this works
 

const playerSelection = prompt("rock paper scissors") 
  



console.log(playerSelection) // this works

    function getComputerChoice() {//this function works!
        let choice =  ["rock", "paper", "scissors"]
        if (randomNum == 0)
        return "rock";
        else if (randomNum == 1)
        return "paper";
        else 
        return "scissors";
    }


console.log(getComputerChoice())



  const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {   // This works 
     if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors" ||
     playerSelection.toLowerCase() === "paper" && computerSelection === "rock" ||
     playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {

     return "good job you win this time";
     }

     else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock" ||
     playerSelection.toLowerCase() === "rock" && computerSelection === "paper" ||
     playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        
        return "you lose this round";
     }

     else {
        return "it's a tie";
     }
}

console.log(playRound(playerSelection, computerSelection)) // all functions working



