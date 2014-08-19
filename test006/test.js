// create the function
var checkWinner = function (userChoice) {
    "use strict";
    var isWinning, usrNum, cpuNum = Math.floor(Math.random() * 3) + 1;
    if (userChoice === 'rock') {
        usrNum = 1;
    } else if (userChoice === 'paper') {
        usrNum = 2;
    } else {
        // default value
        usrNum = 3;
    }
    // check if you beat computer
    // WIN
    if ((usrNum === 1 && cpuNum === 3) || (usrNum === 2 && cpuNum === 1) || (usrNum === 3 && cpuNum === 2)) {
        // rock beats scissors
        isWinning = 1; // win
    // LOOSE
    } else if ((usrNum === 1 && cpuNum === 2) || (usrNum === 2 && cpuNum === 3) || (usrNum === 3 && cpuNum === 1)) {
        // rock looses to paper
        isWinning = 2; // fail
    // DRAW
    } else if ((usrNum === 1 && cpuNum === 1) || (usrNum === 2 && cpuNum === 2) || (usrNum === 3 && cpuNum === 3)) {
        isWinning = 3; // tie
    }
    // Show what happend
    if (isWinning === 1) {
        console.log("You won");
    } else if (isWinning === 2) {
        console.log("You lose");
    } else if (isWinning === 3) {
        console.log("oh a tie, try again");
    }
}

// get user choice
var userChoice = prompt("Pleace choose 'rock' 'paper'or 'scissors'");

// call check function to find out who won
checkWinner(userChoice);
