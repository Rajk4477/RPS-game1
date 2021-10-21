console.log('raja')
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getcomputerChoice() {
    const Choices=['r','p','s'];
    const randomNumber=Math.floor(Math.random() * 3);
    return Choices[randomNumber];
}
function convertToword(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}
function Win(userChoice , computerChoice){
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    const userChoice_div=document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML= computerScore;
    result_p.innerHTML=convertToword(userChoice) +(smallUserWord) + " beats " + convertToword(computerChoice) +(smallCompWord) + " You win!";
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {userChoice_div.classList.remove('green-glow') },1000);

}
function Lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML= computerScore;
    const userChoice_div=document.getElementById(userChoice);
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    result_p.innerHTML=convertToword(userChoice) +(smallUserWord) + " loses to " + convertToword(computerChoice) +(smallCompWord) + " You lost!";
    userChoice_div.classList.add('red-glow');
    setTimeout(function() { userChoice_div.classList.remove('red-glow') },1000);
}
function Draw(userChoice,computerChoice){
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML= computerScore;
    const userChoice_div=document.getElementById(userChoice);
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    result_p.innerHTML=convertToword(userChoice) +(smallUserWord) + " equals to " + convertToword(computerChoice) +(smallCompWord) + " It's a draw!";
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() { userChoice_div.classList.remove('gray-glow') },1000);
}

function game(userChoice) {
    const computerChoice = getcomputerChoice();
    switch(userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
        Win(userChoice,computerChoice);
        break;
    case "rp":
    case "ps":
    case "sr":
        Lose(userChoice,computerChoice);
        break;
    case "rr":
    case "pp":
    case "ss":
        Draw(userChoice,computerChoice);
     break; 
    }
}

function main() {

    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();




