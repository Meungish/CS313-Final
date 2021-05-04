let userScore = 0;
let computerScore = 0;
const defaultscore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const reset = document.getElementById("reset");

main();

function win(hand) {///////////////////////////WIN RESULT
    const w = "You Win!"
    userScore++;
    userScore_span.innerHTML = userScore;
    if (hand == 'r') {
        result_div.innerHTML = "Rock Breaks Scissors. " + w;
    }
    else if (hand == 'p') {
        result_div.innerHTML = "Paper Covers Rock. " + w;
    }
    else {
        result_div.innerHTML = "Scissors Cuts Paper. " + w;
    }
}
function lose(hand) {///////////////////////////LOSE RESULT
    const l = "You Lose!"
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    if (hand == 'r') {
        result_div.innerHTML = "Rock Covered by Paper. " + l;
    }
    else if (hand == 'p') {
        result_div.innerHTML = "Paper Cut by Scissors. " + l;
    }
    else {
        result_div.innerHTML = "Scissors Broken by Rock. " + l;
    }
}

function tie(hand) {//////////////////////////////TIE RESULT
    const t = "Its a Tie!"
    if (hand == 'r') {
        result_div.innerHTML = "Rock Against Rock. " + t;
    }
    else if (hand == 'p') {
        result_div.innerHTML = "Paper Against Paper. " + t;
    }
    else {
        result_div.innerHTML = "Scissors against Scissors. " + t;
    }
}

function getComputerHand() { /////////////////////COMPUTER HAND
    const hands = ['r', 'p', 's'];
    const handIndex = Math.floor(Math.random() * 3);
    return hands[handIndex];
}

function game(playerhand) { //////////////////////GAME PROCESS
    const computerHand = getComputerHand();
    switch (playerhand + computerHand) {
        case "rs":
        case "pr":
        case "sp":
            win(playerhand);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(playerhand);
            break;
        case "rr":
        case "pp":
        case "ss":
            tie(playerhand);
            break;
    }
}

function main() { //////////////////////////////////MAIN FUNCTION
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })

    reset.addEventListener('click', function() {
        userScore = 0;
        computerScore = 0;
        computerScore_span.innerHTML = 0;
        userScore_span.innerHTML = 0;
        result_div.innerHTML = "Choose your hand";
    })


}