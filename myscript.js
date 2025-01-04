// Step 2: Write the logic to get the computer choice
// Your game will be played against the computer. 
// You will write a function that randomly returns 
// “rock”, “paper” or “scissors

function GetComputerDecision(){
    let decision = '';
    let randNum = Math.floor(Math.random() * 3);
    switch(randNum){
        case 1: 
            decision= 'rock';
            break;
        case 2: 
            decision = 'paper';
            break;
        case 0:
            decision = 'scissors';
            break;
        default:
            decision = 'switch statement malfunctioned';
    }
    return decision;
}
// Step 3: Write the logic to get the human choice
// Your game will be played by a human player. 
// You will write a function that takes the user 
// choice and returns it.

function GetHumanDecision(){
    let decision = prompt("Please enter rock, paper, or scissors.").toLowerCase();
    while(decision != "scissors" && decision != "rock" && decision != "paper"){
        console.log('Input invalid. Please enter either rock, paper, or scissors.')
        decision = prompt("Please enter rock, paper, or scissors.").toLowerCase();
    }

    return decision;
}

// Step 4: Declare the players score variables
// Your game will keep track of the players score. 
// You will write variables to keep track of the players score.

let humanScore = 0;
let computerScore = 0;

// Step 5: Write the logic to play a single round
// Your game will be played round by round. 
// You will write a function that takes the human 
// and computer player choices as arguments, plays 
// a single round, increments the round winner’s 
// score and logs a winner announcement.

function SingleRound(humanDecision, computerDecision){
    console.log('human played: ' + humanDecision);
    console.log('computer decision: ' + computerDecision);
    if (humanDecision == computerDecision){
        console.log('tie')
    }
    if(humanDecision == 'paper') {
        if(computerDecision == 'rock'){
            console.log('human wins!');
            humanScore++;
        }else{
            console.log('computer wins!');
            computerScore++;
        }
    }else if(humanDecision == 'rock') {
        if(computerDecision == 'scissors'){
            console.log('human wins!');
            humanScore++;
        }else{
            console.log('computer wins!');
            computerScore++;
        }
    } else if(humanDecision == 'scissors') {
        if(computerDecision == 'paper'){
            console.log('human wins!');
            humanScore++;
        }else{
            console.log('computer wins!');
            computerScore++;
        }
    }
}


// Step 6: Write the logic to play the entire game
// Your game will play 5 rounds. 
// You will write a function named playGame that
//  calls playRound to play 5 rounds, keeps track 
//  of the scores and declares a winner at the end.

function PlayGame(){
    for(let i = 0; i < 5; i++){
        SingleRound(GetComputerDecision(), GetHumanDecision());
    }

    console.log('human score is: ' + humanScore);
    console.log('computer score is: ' + computerScore);

}
PlayGame();