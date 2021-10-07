console.log("Rock, Paper and Scissors")

let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    const options = ["ROCK", "PAPER", "SCISSORS"];
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}
function playerPlay(){
    const choice2 = prompt().toUpperCase();
    if(choice2 !== "ROCK" && choice2 !== "PAPER" && choice2 !== "SCISSORS"){
      console.log(choice2);
      console.error('Oops wrong Input....choose wisely');
      return playerPlay();
    }
    return choice2;
}


function playRound(playerSelection, computerSelection){
    if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        console.log("You Win! Rock beats Scissors");
        playerScore++;
        console.log(`Your Score ${playerScore}`,`Computer's Score ${computerScore}`);
        return;
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        console.log("You Win! Paper beats Rock");
        playerScore++;
        console.log(`Your Score ${playerScore}`,`Computer's Score ${computerScore}`);
        return;

    }

    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        console.log("You Win! Scissors beats Paper");
        playerScore++;
        console.log(`Your Score ${playerScore}`,`Computer's Score ${computerScore}`);
        return;

    }

    else if (playerSelection == "ROCK" && computerSelection == "ROCK"){
        console.log("It's a Draw....");
        console.log(`Your Score ${playerScore}`,`Computer's Score ${computerScore}`);
        return;

    }
    else if (playerSelection == "PAPER" && computerSelection == "PAPER"){
        console.log("It's a Draw....")
        console.log(`Your Score ${playerScore}`,`Computer's Score ${computerScore}`);
        return;

    }
    else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS"){
        console.log("It's a Draw....")
        console.log(`Your Score ${playerScore}`,`Computer's Score ${computerScore}`);
        return;

    }

    else if (playerSelection == "ROCK" && computerSelection == "PAPER"){
        console.log("You Lose! Paper beats Rock");
        computerScore++;
        console.log(`Your Score ${playerScore}`,`Computer's Score ${computerScore}`);
        return;

    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        console.log("You Lose! Scissors beats Paper");
        computerScore++;
        console.log(`Your Score ${playerScore}`,`Computer's Score ${computerScore}`);
        return;

    }
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
        console.log(`Your Score ${playerScore}`,`Computer's Score ${computerScore}`);
        return;

    }

}

function startGame(){
  for(i = 0; i < 5; i++){
    playRound(playerPlay(),computerPlay());
  }
  if(playerScore > computerScore){
    console.log('You won the game!😃');
    return;
  
  } else if(playerScore < computerScore){
    console.log('Computer won the game!🤦');
    return;
  
  } else{
    console.log("It's a Draw....");
    return;
  }

}

startGame();

