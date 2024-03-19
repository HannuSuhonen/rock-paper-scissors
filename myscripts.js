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

    if(playerselection === null || computerSelection === undefined) return;
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
        console.log(playerScore);
        return "You win!"
    }else if(lowerCasePlayerChoice == "scissors" && computerSelection == "paper"){
        playerScore += 1;
        return "You win!"
    }else if(lowerCasePlayerChoice == "scissors" && computerSelection == "rock"){
        computerScore +=1;
        return "You lose!"
    }else{
        return;
    }
}

function playGame(){
 
    while(playerScore < 3 && computerScore < 3){
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
    if(playerScore > computerScore){
        alert("Congratulations, you won the best of 3!")
    }else{
        alert("Dang, you lost this best of 3, better luck next time!")
    }
    
    if(confirm("Restart game?")){
        resetGame();
        playGame();
    }
}