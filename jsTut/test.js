var f = function() {
    var canvas = document.getElementsByTagName('canvas')[0];
    var c = canvas.getContext('2d');
    
    c.beginPath();
    c.moveTo(100, 100);
    c.lineTo(450, 300);
    c.stroke();
    
    // ready to start our path
    c.beginPath();
    // move the cursor/start position to 50, 50 location
    c.moveTo(50, 50);
    // draw line to following locations
    c.lineTo(100, 250);
    c.lineTo(400, 250);
    c.lineTo(600, 50);
    // close off the box that we started
    c.closePath();
    
    // continue line
    c.lineTo(500, 500);
    c.lineTo(500, 600);
    c.lineTo(100, 400);
    c.lineTo(200, 400);
    // output the lines to the screen
    c.stroke();
}

window.addEventListener('load', f, false);
