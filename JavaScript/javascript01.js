var varX = varY = 20;
var c = document.getElementById("meCanvas");
var ctx = c.getContext("2d");
// set up for texts
ctx.font = "22px Serif";
// paint red square to the screen.
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 300, 300);
// cut out a white square
ctx.clearRect(varX, varY, 30, 30);

// variables for game logic
var directionX = "up";
var directionY = "up";
var someTextHere = "LOoke her";



// continuouse loop
setInterval(function() {
    // clear entire canvas
    ctx.clearRect(0, 0, 300, 300);
    
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 300, 300);
    ctx.clearRect(varX, varY, 30, 30);
    
    // if statmes
    if (varY > 150) {  // if (the thing that is in here evaluesa tes to true the run the following code
        someTextHere = "4 is less that three";  // this code
    }
    /*
    while(varX < 100) {
        someTextHere = "Var X is high";
    }*/
    for (var x = 0; x < 5; x++) {
        console.log("butt" + varY);
    }
    // find out if the variables should be going up or down
    if (varX > 300) {
        directionX = "down";
    } else if (varX <= 0) {
        directionX = "up";
    }
    if (varY > 300) {
        directionY = "down";
    } else if (varY <= 0) {
        directionY = "up";
    }
    // setting xy based on direction
    if (directionX === "up") {
        varX++;
    } else if (directionX === "down") {
        varX--;
    }
    if (directionY === "up") {
        varY++;
    } else if (directionY === "down") {
        varY--;
    }
    
    ctx.clearRect(varX, varY, 30, 30);
    // print out the current x and y
    ctx.fillStyle = "red";
    ctx.fillText(varX + "||" + varY, 225, 20);
    ctx.fillText(someTextHere, 200, 40);
    
}, 3000/30);
