//first function is get computer choice
//write a prompt for user input
//new function called game (nest the playRound function IN this one)
//lastly, loop the function to play 5 rounds of the game

let choice = ["rock", "paper", "scissors"] // this works

let randomNum = Math.floor(Math.random() * choice.length) //randomNum works with getComputerChoice() and correlates it to a string to get randomized computer choice
 


  let playerScore = 0;
  let computerScore = 0;

    function getComputerChoice() {
      
        let choice =  ["rock", "paper", "scissors"]
        let randomNum = Math.floor(Math.random() * choice.length)
        if (randomNum == 0)
        return "rock";
        else if (randomNum == 1)
        return "paper";
        else {
          return "scissors";
        }
    }
  

function playRound() {  // this function gets the User choice to play RPS
    const playerSelection = prompt("rock paper or scissors")
    let computerSelection = getComputerChoice();
    checkWinner()
   
    
     if (playerSelection === "rock" && computerSelection === "scissors" ||
     playerSelection === " paper" && computerSelection === "rock" ||
     playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
     return checkWinner();
     }

     else if (playerSelection === " scissors" && computerSelection === "rock" ||
     playerSelection === "rock" && computerSelection === "paper" ||
     playerSelection === " paper" && computerSelection === "scissors") {
        computerScore++
        return checkWinner();
     }

     else {
      
        return checkWinner();
     }

     function checkWinner() { // this nested function works with playRound() to check the winner of the individual rounds played.
         if ((playerSelection === "rock" && computerSelection === "scissors" ||
         playerSelection === " paper" && computerSelection === "rock" ||
         playerSelection === "scissors" && computerSelection === "paper")) {
            return `${playerSelection} beats ${computerSelection} ! you win this round!`
          }
          else if (playerSelection === " scissors" && computerSelection === "rock" ||
          playerSelection === "rock" && computerSelection === "paper" ||
          playerSelection === " paper" && computerSelection === "scissors") {
            return `${computerSelection} beats ${playerSelection}! you lose this round!`;
          }
          else {
            return "it's a tie!";
          }
     }
     
     }

    function declareWinner() { // this function calls who wins after all rounds have been played.
      if (playerScore > computerScore) {
        return "You won the game! great job"
      }
      else if (computerScore > playerScore) {
        return "computer wins the game."
      }
      else if (computerScore == playerScore) {
        return "game ends with a tie"
      }
    }





function game() { // this function puts all of them together to run the game 
    getComputerChoice()
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(`${playerScore} ${computerScore}`)
    console.log(declareWinner())
}

game()




