// set up to work with on the canvas "NewCanvas"
var canvas = document.getElementById("NewCanvas");
var Jctx = canvas.getContext("2d");

Jctx.font = "40px Verdana";
Jctx.fillStyle="#000199";
Jctx.fillText("Paul wrote this", 30, 35);

Jctx.strokeStyle="DarkGrey";
Jctx.strokeText("Paul wrote this", 31, 36);

Jctx.strokeStyle="Red";
Jctx.strokeText("Paul did it", 75, 75);

function runMe() {    
    x = 1;
    y = 1;
    while (x <5) {
        Jctx.strokeStyle="Red";
        Jctx.strokeText("Pablo", x+40, y+150);
        x++;
        console.log(x);
    }
}

runMe();