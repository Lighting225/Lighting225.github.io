let UserScore = 0;
let ComputerScore = 0;
const UserScore_Span = document.getElementById("User-score");
const ComputerScore_Span = document.getElementById("Computer-score");
const ScoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const message_id = document.getElementById("message");
const reset_id = document.getElementById("reset-label");

function game(UserChoice) {
  var ComputerChoice = getComputerChoice();
  console.log("You clicked Something! " + UserChoice + "\nComputer's Choice: " + ComputerChoice);
  switch (UserChoice + ComputerChoice) {
    case "pr":
    case "rs":
    case "sp":
    win(UserChoice, ComputerChoice);
    break;
    case "rr":
    case "pp":
    case "ss":
    tie(UserChoice, ComputerChoice);
    break;
    default:
    lose(UserChoice, ComputerChoice);
    break;
  }
}
  function reset() {
    result_div.innerHTML = "Summer 2019";
    message_id.innerHTML = "Your turn!";
    UserScore = 0;
    ComputerScore = 0;
    UserScore_Span.innerHTML = UserScore;
    ComputerScore_Span.innerHTML = ComputerScore;
    console.log("Reset Completed");
    message_id.innerHTML = "Reset Successful! Your Turn!"
    setTimeout(() => message_id.innerHTML = "Your Turn!", 1000);
  }
function getComputerChoice() {
  const choicesArr = ["r", "p","s"];
  var randInt = Math.floor(Math.random()*3);
  return choicesArr[randInt];
}

function win(User, Comp) {
  console.log("You Win!");
  UserScore++;
  UserScore_Span.innerHTML = UserScore;
  console.log("Computer's Score: " + ComputerScore + "\nUser's Score: "+ UserScore);
  result_div.innerHTML = User + " beats " + Comp;
  message_id.innerHTML = "GOOD JOB!";
  document.getElementById(User).classList.add("green-glow");
  setTimeout(() => document.getElementById(User).classList.remove("green-glow"), 500);
}
function tie(User, Comp) {
  console.log("You Tied!");
  result_div.innerHTML = User + " ties with " + Comp;
  message_id.innerHTML = "NOT BAD!";
}
function lose(User, Comp) {
  console.log("You Lose!");
  ComputerScore++;
  ComputerScore_Span.innerHTML = ComputerScore;
  console.log("Computer's Score: " + ComputerScore + "\nUser's Score: " + UserScore);
  result_div.innerHTML = User + " loses to " + Comp;
  message_id.innerHTML = "Better Luck Next Time!";
  document.getElementById(User).classList.add("red-glow");
  setTimeout(() => document.getElementById(User).classList.remove("red-glow"), 500);
}
function main() {
rock_div.addEventListener('click', function() {
  game("r");
})
paper_div.addEventListener('click',function() {
  game("p");
})
scissor_div.addEventListener('click',function() {
game("s");
})
reset_id.addEventListener('click',function(){
  reset();
})
}
main();
