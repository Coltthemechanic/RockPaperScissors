//first function is get computer choice
//write a prompt for user input
//new function called game (nest the playRound function IN this one)
//lastly, loop the function to play 5 rounds of the game

let choice = ["rock", "paper", "scissors"] // this works

console.log(choice)
let randomNum = Math.floor(Math.random() * choice.length) // this works

console.log(randomNum) 

const playerSelection = prompt("rock paper scissors")

function getPlayerSelection() {

    if (userAnswer === "rock") {
    return "rock";
    }
    else if (userAnswer === "paper") {
    return "paper";
}
    else {
        return "scissors";
    }
        
    }

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
     if (playerSelection === "rock" && computerSelection === "scissors" ||
     playerSelection === "paper" && computerSelection === "rock" ||
     playerSelection === "scissors" && computerSelection === "paper") {

     return "good job you win this time";
     }

     else if (playerSelection === "scissors" && computerSelection === "rock" ||
     playerSelection === "rock" && computerSelection === "paper" ||
     playerSelection === "paper" && computerSelection === "scissors") {
        
        return "you lose this round";
     }

     else {
        return "it's a tie";
     }
}

console.log(playRound(playerSelection, computerSelection)) // all functions working



