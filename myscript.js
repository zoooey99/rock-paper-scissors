//figure out how to remove the buttons or stop the game once 
//someone has won
let humanScore = 0;
let computerScore = 0;
const list = document.querySelector('ul');
const scoreText = document.querySelector('h3');
const gameWinner = document.createElement('h1');

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
function GetHumanDecision(target){
    // let decision = prompt("Please enter rock, paper, or scissors.").toLowerCase();
    // while(decision != "scissors" && decision != "rock" && decision != "paper"){
    //     console.log('Input invalid. Please enter either rock, paper, or scissors.')
    //     decision = prompt("Please enter rock, paper, or scissors.").toLowerCase();
    // }

    return target.textContent;
}

function SingleRound(humanDecision, computerDecision){
    console.log('human played: ' + humanDecision);
    console.log('computer decision: ' + computerDecision);

    const paragraphNode = document.createElement('p');
    paragraphNode.textContent = 'human played: ' + humanDecision + '  computer decision: ' + computerDecision;
    list.appendChild(paragraphNode);

    const roundWinner = document.createElement('p');
    
    if (humanDecision == computerDecision){
        console.log('tie')
        roundWinner.textContent = 'tie';
    }else if(humanDecision == 'paper') {
        if(computerDecision == 'rock'){
            console.log('human wins!');
            roundWinner.textContent = 'human wins!';
            humanScore++;
        }else{
            console.log('computer wins!');
            roundWinner.textContent = 'computer wins!';
            computerScore++;
        }
    }else if(humanDecision == 'rock') {
        if(computerDecision == 'scissors'){
            console.log('human wins!');
            roundWinner.textContent = 'human wins!';
            humanScore++;
        }else{
            console.log('computer wins!');
            roundWinner.textContent = 'computer wins!';
            computerScore++;
        }
    } else if(humanDecision == 'scissors') {
        if(computerDecision == 'paper'){
            console.log('human wins!');
            roundWinner.textContent = 'human wins!';
            humanScore++;
        }else{
            console.log('computer wins!');
            roundWinner.textContent = 'computer wins!';
            computerScore++;
        }
    }
    //change score text and add winner text to list
    scoreText.textContent = 'human: ' + humanScore + ' computer: ' + computerScore;
    list.appendChild(roundWinner);

    //check for winner
    if(humanScore == 5){
        gameWinner.textContent = 'HUMAN WINS THE GAME';
        list.appendChild(gameWinner);
        
    }
    if(computerScore== 5){
        gameWinner.textContent = 'COMPUTER WINS THE GAME';
        list.appendChild(gameWinner);
        
    }
}

const buttons = [...document.querySelectorAll('button')];

buttons.map(button => {
    button.addEventListener('click', (e)=> SingleRound(GetHumanDecision(e.target), GetComputerDecision()))
});

// function PlayGame(){
//     for(let i = 0; i < 5; i++){
//         SingleRound(GetComputerDecision(), GetHumanDecision());
//     }

//     console.log('human score is: ' + humanScore);
//     console.log('computer score is: ' + computerScore);

// }
// PlayGame();