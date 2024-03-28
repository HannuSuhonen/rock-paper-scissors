let playerScore = 0;
let computerScore = 0;
let aiChoice;

function getAIChoice(){
    let choices = ["rock","paper","scissors"];
    let randomNumber = Math.floor(Math.random() * 3); 
    aiChoice = choices[randomNumber];
    return aiChoice;
}

function playRound(playerselection, computerSelection){
    if(playerselection === null || playerselection === undefined) return;
    let lowerCasePlayerChoice = playerselection.toLowerCase();

    if(lowerCasePlayerChoice == computerSelection){
        console.log("Draw");
    }else if(lowerCasePlayerChoice == "rock" && computerSelection == "scissors"){
        playerScore += 1;
    }else if(lowerCasePlayerChoice == "rock" && computerSelection == "paper"){
        computerScore += 1;
    }else if(lowerCasePlayerChoice == "paper" && computerSelection == "scissors"){
        computerScore += 1;
    }else if(lowerCasePlayerChoice == "paper" && computerSelection == "rock"){
        playerScore += 1;
    }else if(lowerCasePlayerChoice == "scissors" && computerSelection == "paper"){
        playerScore += 1;
    }else if(lowerCasePlayerChoice == "scissors" && computerSelection == "rock"){
        computerScore +=1;
    }else{
        console.log("ERROR");
    }
}

function endGame(numberOfRounds = 5){
    if(playerScore === numberOfRounds || computerScore === numberOfRounds){
        const resultText = document.querySelector("h2");
        playerScore > computerScore ? 
        resultText.innerText = `Congratulations!, you won this best of ${numberOfRounds}` : 
        resultText.innerText = `Dang, you lost this best of ${numberOfRounds}, better luck next time!`;
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        switch(button.innerText){
            case "Rock":
                playRound("Rock",getAIChoice());
                break;
            case "Paper":
                playRound("Paper",getAIChoice());
                break;
            case "Scissors":
                playRound("Scissors",getAIChoice());
                break;
            default:
                console.log("Choice unidentified");
        }
        updateScore();
        endGame(5);
    })
});

function updateScore(){
    const texts = document.querySelector(".score").children;

    texts.item(0).innerText = `ai choice: ${aiChoice}`
    texts.item(1).innerText = `player score: ${playerScore}`
    texts.item(2).innerText = `cpu score: ${computerScore}`
}