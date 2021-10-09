console.log("Rock, Paper and Scissors")
const buttons = document.querySelectorAll('.button');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissor');
const score = document.querySelector('#score');
const result = document.querySelector('#result');
const points = 5;
const playerWon = 'You Scored 5 Points! You Won!';
const computerWon = 'Computer Scored 5 Points! You Lost...';
let choice2;
let playerScore = 0;
let computerScore = 0;


function computerPlay(){
    const options = ["ROCK", "PAPER", "SCISSORS"];
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}
function playerPlay(){
    if(choice2 !== "ROCK" && choice2 !== "PAPER" && choice2 !== "SCISSORS"){
      console.log(choice2);
      console.error('Oops wrong Input....choose wisely');
      return playerPlay();
    }
    return choice2;
}


function playRound(playerSelection, computerSelection){
    

   
    if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        result.textContent = 'You Win! Rock beats Scissor';
        playerScore++;
        score.textContent = `Your Score ${playerScore} Computer's Score ${computerScore}`;
        if(playerScore === points){
          console.log(playerWon);
          playerScore = 0;
          computerScore = 0;
          return playRound(playerPlay(),computerPlay());
          }
          if(computerScore === points){
          console.log(computerWon);
          playerScore = 0;
          computerScore = 0;
          return playRound(playerPlay(),computerPlay());
          }
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        result.textContent = "You Win! Paper beats Rock";
        playerScore++;
        score.textContent = `Your Score ${playerScore} Computer's Score ${computerScore}`;
        if(playerScore === points){
          console.log(playerWon);
          playerScore = 0;
          computerScore = 0;
          return playRound(playerPlay(),computerPlay());
          }
          if(computerScore === points){
          console.log(computerWon);
          playerScore = 0;
          computerScore = 0;
          return playRound(playerPlay(),computerPlay());
          }
        // if(playerScore === 5){
        //   console.log('You have won the battle!');
        // }
        // return;

    }

    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        result.textContent = "You Win! Scissor beats Paper";
        playerScore++;
        score.textContent = `Your Score ${playerScore} Computer's Score ${computerScore}`;
        if(playerScore === points){
          console.log(playerWon);
          playerScore = 0;
          computerScore = 0;
          return playRound(playerPlay(),computerPlay());
          }
          if(computerScore === points){
          console.log(computerWon);
          playerScore = 0;
          computerScore = 0;
          return playRound(playerPlay(),computerPlay());
          }
        // if(playerScore === 5){
        //   console.log('You have won the battle!');
        // }
        // return;

    }

    else if (playerSelection == "ROCK" && computerSelection == "ROCK"){
        result.textContent = "It's a Draw....";
        score.textContent = `Your Score ${playerScore} Computer's Score ${computerScore}`;
        if(playerScore === points){
          console.log(playerWon);
          playerScore = 0;
          computerScore = 0;
          return playRound(playerPlay(),computerPlay());
          }
          if(computerScore === points){
          console.log(computerWon);
          playerScore = 0;
          computerScore = 0;
          return playRound(playerPlay(),computerPlay());
          }
        // return;

    }
    else if (playerSelection == "PAPER" && computerSelection == "PAPER"){
        result.textContent = "It's a Draw....";
        score.textContent = `Your Score ${playerScore} Computer's Score ${computerScore}`;
        if(playerScore === points){
          console.log(playerWon);
          playerScore = 0;
          computerScore = 0;
          return playRound(playerPlay(),computerPlay());
          }
          if(computerScore === points){
          console.log(computerWon);
          playerScore = 0;
          computerScore = 0;
          return playRound(playerPlay(),computerPlay());
          }
        // return;

    }
    else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS"){
        result.textContent = "It's a Draw....";
        score.textContent = `Your Score ${playerScore} Computer's Score ${computerScore}`;
        if(playerScore === points){
          console.log(playerWon);
          playerScore = 0;
          computerScore = 0;
          return playRound(playerPlay(),computerPlay());
          }
          if(computerScore === points){
          console.log(computerWon);
          playerScore = 0;
          computerScore = 0;
          return playRound(playerPlay(),computerPlay());
          }
        // return;

    }

    else if (playerSelection == "ROCK" && computerSelection == "PAPER"){
        result.textContent = "You Lose! Paper beats Rock";
        computerScore++;
        score.textContent = `Your Score ${playerScore} Computer's Score ${computerScore}`;
        if(playerScore === points){
          console.log(playerWon);
          playerScore = 0;
          computerScore = 0;
          return playRound(playerPlay(),computerPlay());
          }
          if(computerScore === points){
          console.log(computerWon);
          playerScore = 0;
          computerScore = 0;
          return playRound(playerPlay(),computerPlay());
          }
        // return;

    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        result.textContent = "You Lose! Scissor beats Paper";
        computerScore++;
        score.textContent = `Your Score ${playerScore} Computer's Score ${computerScore}`;
        if(playerScore === points){
          console.log(playerWon);
          playerScore = 0;
          computerScore = 0;
          return playRound(playerPlay(),computerPlay());
          }
          if(computerScore === points){
          console.log(computerWon);
          playerScore = 0;
          computerScore = 0;
          return playRound(playerPlay(),computerPlay());
          }
        // return;

    }
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        result.textContent = "You Lose! Rock beats Scissors";
        computerScore++;
        score.textContent = `Your Score ${playerScore} Computer's Score ${computerScore}`;
        if(playerScore === points){
          console.log(playerWon);
          playerScore = 0;
          computerScore = 0;
          return playRound(playerPlay(),computerPlay());
          }
          if(computerScore === points){
          console.log(computerWon);
          playerScore = 0;
          computerScore = 0;
          return playRound(playerPlay(),computerPlay());
          }
        
        // return;

    }
    

}

// function startGame(){
//   playerScore = 0;
//   computerScore = 0;
//   for(i = 0; i < 2; i++){
//     playRound(playerPlay(),computerPlay());
//   }
//   if(playerScore > computerScore){
//     console.log('You won the game!😃');
//     return;
  
//   } else if(playerScore < computerScore){
//     console.log('Computer won the game!🤦');
//     return;
  
//   } else{
//     console.log("It's a Draw....");
//     return;
//   }

// }

// startGame();
rockButton.addEventListener('click', ()=> {
  choice2 = 'ROCK';
  playRound(playerPlay(),computerPlay());});

paperButton.addEventListener('click', ()=> {
  choice2 = 'PAPER';
  playRound(playerPlay(),computerPlay());});

scissorButton.addEventListener('click', ()=> {
  choice2 = 'SCISSORS';
  playRound(playerPlay(),computerPlay());});

  buttons.forEach(button => button.addEventListener('click', ()=>{
    button.classList.add(shadowchange);
    // setTimeout(()=>{button.classList.remove("shadowchange")},1000)

  }))
  // buttons.forEach(button => button.addEventListener('mouseup', ()=>{
  //   button.classList.remove("shadowchange");
  // }))

  

