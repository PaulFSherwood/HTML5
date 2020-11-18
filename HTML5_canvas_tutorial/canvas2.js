var canvas = document.getElementById("NewCanvas");
var Jctx = canvas.getContext("2d");

Jctx.moveTo(10, 10); // x-axis and y-axis
Jctx.lineTo(200, 400); 
Jctx.strokeStyle="blue";
Jctx.lineWidth=13;
Jctx.stroke();

Jctx.moveTo(200, 400); // x-axis and y-axis
Jctx.lineTo(390, 10);
Jctx.stroke();

Jctx.moveTo(390, 10); // x-axis and y-axis
Jctx.lineTo(10, 10);
Jctx.stroke();

function drawCircle(xAxis, yAxis, sAngle, eAngle, direction, aContext) {
    //sAngle = sAngle * Math.PI;
    //eAngle = eAngle * Math.PI;
    aContext.beginPath();
    aContext.arc(xAxis, yAxis, sAngle, eAngle, direction);
    aContext.stroke();
}
function drawLine(xStart, yStart, xStop, yStop, aContext) {
    aContext.moveTo(xStart, yStart);
    aContext.lineTo(xStop, yStop);
    aContext.stroke();
}

var canvas2 = document.getElementById("NewCanvas2");
var Jctx2 = canvas2.getContext("2d");
// arc(x, y, r, start, stop)
Jctx2.strokeStyle="green";
Jctx2.lineWidth=5;
// face ears
drawCircle(200, 200, 100, 0, 2*Math.PI, Jctx2);
drawCircle(95, 93, 50, 0, 2*Math.PI, Jctx2);
drawCircle(305, 93, 50, 0, 2*Math.PI, Jctx2);
// eyes
drawCircle(160, 150, 20, 0, 2*Math.PI, Jctx2);
drawCircle(240, 150, 20, 0, -2*Math.PI, Jctx2);
// nose
drawLine(200, 180, 200, 210, Jctx2);
drawCircle(200, 230, 50, 0, 1*Math.PI, Jctx2);