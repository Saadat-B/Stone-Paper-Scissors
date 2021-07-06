console.log("Stone, Paper and Scissors")


function computerPlay(){
    let options = ["ROCK", "PAPER", "SCISSORS"];
    let choice = options[Math.floor(Math.random() * options.length)];
    // console.log(choice)   ;
    return choice;
}
function playerPlay(){
    let choice2 = prompt().toUpperCase();
    return choice2;
}

// computerPlay()

function playRound(playerSelection, computerSelection){
    if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        console.log("You Win! Rock beats Scissors")
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        console.log("You Win! Paper beats Rock")
    }

    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        console.log("You Win! Scissors beats Paper")
    }


    else if (playerSelection == "ROCK" && computerSelection == "ROCK"){
        console.log("It's a Draw....")
    }
    else if (playerSelection == "PAPER" && computerSelection == "PAPER"){
        console.log("It's a Draw....")
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS"){
        console.log("It's a Draw....")
    }



    else if (playerSelection == "ROCK" && computerSelection == "PAPER"){
        console.log("You Lose! Paper beats Rock")
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        console.log("You Lose! Scissors beats Paper")
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        console.log("You Lose! Rock beats Scissors")
    }
    
}

const playerSelection = playerPlay();
const computerSelection = computerPlay();


playRound(playerSelection, computerSelection)
    
