let playerScore = 0;
let computerScore = 0;

function getAIChoice(){
    let choices = ["rock","paper","scissors"];
    let randomNumber = Math.floor(Math.random() * 3); 
    return choices[randomNumber];
}

function getPlayerChoice(){
    let userChoice = prompt("Your choice?");
    return userChoice
}

function playRound(playerselection, computerSelection){
    if(playerselection === null || playerselection === undefined) return;
    let lowerCasePlayerChoice = playerselection.toLowerCase();

    if(lowerCasePlayerChoice == computerSelection){
        return "Draw"
    }else if(lowerCasePlayerChoice == "rock" && computerSelection == "scissors"){
        playerScore += 1;
        return "You win!"
    }else if(lowerCasePlayerChoice == "rock" && computerSelection == "paper"){
        computerScore += 1;
        return "You lose!"
    }else if(lowerCasePlayerChoice == "paper" && computerSelection == "scissors"){
        computerScore += 1;
        return "You lose!"
    }else if(lowerCasePlayerChoice == "paper" && computerSelection == "rock"){
        playerScore += 1;
        return "You win!"
    }else if(lowerCasePlayerChoice == "scissors" && computerSelection == "paper"){
        playerScore += 1;
        return "You win!"
    }else if(lowerCasePlayerChoice == "scissors" && computerSelection == "rock"){
        computerScore +=1;
        return "You lose!"
    }else{
        return "Choice unrecognized!";
    }
}

function playGame(numberOfRounds = 3){
    //Calls playround() until either player or computer has won the provided numberOfRounds (default 3)
    while(playerScore < numberOfRounds && computerScore < numberOfRounds){
        let result = playRound(getPlayerChoice(),getAIChoice())

        if(result === null || result === undefined){
            resetGame();
            return;
        }
        alert(result);
    }
    endGame();
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
}

function endGame(){
    playerScore > computerScore ? 
    alert("Congratulations!, you won this best of 3") : 
    alert("Dang, you lost this best of 3, better luck next time!") 
    
    if(confirm("Restart game?")){
        resetGame();
        playGame();
    }
}