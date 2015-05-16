// game setup
var playerGuess;
var playerRating = 100;
var isRunning = true;

// Find boat start
// cant go past 7 - 3 spaces
var cpuBoatStart = Math.floor(Math.random() * 5);

// init map plain
var map = ["X", "X", "X", "X", "X", "X", "X"];

// loop variables
var i = cpuBoatStart;

while (i <= map.length && i != cpuBoatStart+3) {
    // console.log("i: " + i);
    map[i] = "O";
    i++;
}
while (isRunning) {
    // ask the player to guess where the ship is
    playerGuess = prompt("guess map number");
    // fail protection
    if (!playerGuess) {
        console.log("we have issues, stop running.");
        isRunning = false;
    } 
    // check to see if it is a hit
    if (map[playerGuess] === "O") {
        console.log("you hit");
        
        // if it is a hit mark it on the map
        map[playerGuess] = "*";
    } else {
        console.log("you miss");
        // add something about rating
        playerRating = (playerRating / 10) * playerRating;
    }
    // You have a hit is if the game is finished
    var i = 0;
    var hit = 3;
    // look for hits
    while (i < map.length && hit <= 3 && isRunning) {
        if (map[i] === "*") {
            hit--;
        }
        // if you hit the ship in three spots
        if (hit == 0) {
            console.log("Looks like you won");
            console.log("Your rating is " + playerRating);
            isRunning = false;
        }
        i++;
    }
}
