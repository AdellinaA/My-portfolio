const computerChoice = document.getElementById('computer-choice');
const playerChoice = document.getElementById('player-choice');
const result = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

let playerOption
let computerOption
let finalResult

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e) => {
    playerOption = e.target.id
    playerChoice.innerHTML = playerOption
    generateComputerChoice()
    play ()
}));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1)

    if (randomNumber === 1) {
        computerOption = "scissors"
    }
    if (randomNumber === 2) {
        computerOption = "paper"
    }
    if (randomNumber === 3) {
        computerOption = "rock"
    }
    computerChoice.innerHTML = computerOption;   
};

function play () {
    if (computerOption === playerOption) {
    finalResult = 'The choices are the same!'
    }
    if (computerOption === "rock" && playerOption === "paper") {
        finalResult = alert("👏 'You win! Nice try!'")
    }
    if (computerOption === "rock" && playerOption === "scissors") {
        finalResult = 'You Lost!'
    }
    if (computerOption === "scissors" && playerOption === "paper") {
        finalResult = 'You Lost!'
    }
    if (computerOption === "paper" && playerOption === "scissors") {
        finalResult = alert("👏 'You have a great day!'")
    }
    if (computerOption === "paper" && playerOption === "rock") {
        finalResult = 'You Lost!'
    }
    if (computerOption === "scissors" && playerOption === "rock") {
        finalResult = alert("👏 'YOU WIN!'")
    }
    
    result.innerHTML=finalResult;
}








