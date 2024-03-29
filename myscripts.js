let playerScore = 0;
let computerScore = 0;

function getAIChoice(){
    let choices = ["rock","paper","scissors"];
    let randomNumber = Math.floor(Math.random() * 3); 
    return choices[randomNumber];
}

function playRound(playerselection, computerSelection){
    if(playerselection === null || playerselection === undefined) return;
    let lowerCasePlayerChoice = playerselection.toLowerCase();
    const roundText = document.querySelector(".round")

    if(lowerCasePlayerChoice == computerSelection){
        roundText.innerText = "Draw";
        roundText.style.color = "gray"

    }else if(lowerCasePlayerChoice == "rock" && computerSelection == "scissors"){
        playerScore += 1;
        roundText.innerText = `Win! AI chose ${computerSelection}`;
        roundText.style.color = "green"

        roundText.innerText.color

    }else if(lowerCasePlayerChoice == "rock" && computerSelection == "paper"){
        computerScore += 1;
        roundText.innerText = `Lose! AI chose ${computerSelection}`;
        roundText.style.color = "red"


    }else if(lowerCasePlayerChoice == "paper" && computerSelection == "scissors"){
        computerScore += 1;
        roundText.innerText = `Lose! AI chose ${computerSelection}`;
        roundText.style.color = "red"


    }else if(lowerCasePlayerChoice == "paper" && computerSelection == "rock"){
        playerScore += 1;
        roundText.innerText = `Win! AI chose ${computerSelection}`;
        roundText.style.color = "green"


    }else if(lowerCasePlayerChoice == "scissors" && computerSelection == "paper"){
        playerScore += 1;
        roundText.innerText = `Win! AI chose ${computerSelection}`;
        roundText.style.color = "green"


    }else if(lowerCasePlayerChoice == "scissors" && computerSelection == "rock"){
        computerScore +=1;
        roundText.innerText = `Lose! AI chose ${computerSelection}`;
        roundText.style.color = "red"


    }else{
        console.log("ERROR");
    }
}

const buttons = document.querySelectorAll("input");

buttons.forEach((input) => {
    input.addEventListener("click", () => {
        playRound(input.className,getAIChoice());
        updateScore();
    })
});

function updateScore(){
    const texts = document.querySelector(".score").children;
    texts.item(1).innerText = `Player score: ${playerScore}`
    texts.item(2).innerText = `AI score: ${computerScore}`
}