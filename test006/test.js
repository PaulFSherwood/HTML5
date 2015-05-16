var userChoice = prompt("Rock, Paper, Scissors, Lizard, Spock");

var computerChoice = Math.floor(Math.random() * 5) + 1;
if (computerChoice === 1) {
	computerChoice = "Rock";
} else if (computerChoice === 2) {
	computerChoice = "Paper";
} else if (computerChoice === 3) {
    computerChoice = "Scissors";
} else if (computerChoice === 3) {
    computerChoice = "Lizard";
} else if (computerChoice === 3) {
    computerChoice = "Spock";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function ( choice1, choice2 )
{
    if ( choice1 === choice2 )
    {
        return "The result is a tie!";
    } else if ( choice1 === "Rock" ) {
        if ( choice2 === "scissors" ) {
            return "Rock wins!";
        } else if ( choice2 === "Lizard" ) {
            return "Rock wins!";
        }else {
            return choice2 + " wins";
        }
    } else if ( choice1 === "Paper" ) {
        if ( choice2 === "Rock" ) {
            return "Paper wins";
        } else if ( choice2 === "Spock" ) {
            return "Paper wins";
        } else {
            return choice2 + " wins";
        }
    } else if ( choice1 === "Scissors" ) {
        if ( choice2 === "Lizard" ) {
            return "Scissors wins";
        } else if ( choice2 === "Paper" ) {
            return "Scissors wins";
        } else {
            return choice2 + " wins";
        }
    }  else if ( choice1 === "Lizard" ) {
        if ( choice2 === "Spock" ) {
            return "Lizard wins";
        } else if ( choice2 === "Paper" ) {
            return "Lizard wins";
        } else {
            return choice2 + " wins";
        }
    }  else if ( choice1 === "Spock" ) {
        if ( choice2 === "Rock" ) {
            return "Spock wins";
        } else if ( choice2 === "Scissors" ) {
            return "Spock wins";
        } else {
            return choice2 + " wins";
        }
    }
}

compare( userChoice, computerChoice );
