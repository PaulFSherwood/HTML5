// background
var canvasBg = document.getElementById('canvasBg');
var ctxBg = canvasBg.getContext('2d');
// jet
var canvasJet = document.getElementById('canvasJet');
var ctxJet = canvasJet.getContext('2d');

var jet1;
var gameWidth = canvasBg.width;
var gameHeight = canvasBg.height;
var fps = 10;
var drawInterval;

// loading images
var imgSprite = new Image();
imgSprite.src = 'img/sprite.png';
imgSprite.addEventListener('load',init, false);

function init(){
    drawBg();
    startDrawing();
    jet1 = new Jet();
    document.addEventListener('keydown', checkKeyDown, false);
    document.addEventListener('keyup', checkKeyUp, false);
}

function draw(){
    jet1.draw();
}

function startDrawing(){
	stopDrawing();
    drawInterval = setInterval(draw, fps);
}

function stopDrawing(){
	// reset our interval
	clearInterval(drawInterval);
}

function Jet(){
    this.srcX   =   0;
    this.srcY   = 601;
    this.drawX  = 150;
    this.drawY  = 250;
    this.width  = 100;
    this.height =  40;

}

Jet.prototype.draw = function() {
    clearCtxJet();
    ctxJet.drawImage(imgSprite, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);
};

function drawJet(){
}

function drawBg(){
    var srcX = 0;
    var srcY = 0;
    var drawX = 0;
    var drawY = 0;
    ctxBg.drawImage(imgSprite, srcX, srcY, gameWidth, gameHeight, drawX, drawY, gameWidth, gameHeight);
}

function clearCtxBg() {
    ctxBg.clearRect(0,0,800,500);
}

function clearCtxJet() {
	ctxJet.clearRect(0, 0, gameWidth, gameHeight);
}

function checkKeyDown(e){
    var keyID = (e.keyCode) ? e.keyCode : e.which;
    if (keyID == 38 || keyID == 87) { // 38 is up arrow, and 87 is 'w' key
        e.preventDefault();
    }
    if (keyID == 39 || keyID == 68) { // 39 is down arrow, and 68 is 'd' key
        e.preventDefault();
    }
    if (keyID == 40 || keyID == 83) { // 40 is right arrow, and 87 is 's' key
        e.preventDefault();
    }
    if (keyID == 37 || keyID == 65) { // 41 is left arrow, and 65 is 'a' key
        e.preventDefault();
    }
}

function checkKeyUp(e){
    var keyID = (e.keyCode) ? e.keyCode : e.which;
    if (keyID == 38 || keyID == 87) { // 38 is up arrow, and 87 is 'w' key
        e.preventDefault();
    }
    if (keyID == 39 || keyID == 68) { // 39 is right arrow, and 68 is 'd' key
        e.preventDefault();
    }
    if (keyID == 40 || keyID == 83) { // 40 is right arrow, and 87 is 's' key
        e.preventDefault();
    }
    if (keyID == 37 || keyID == 65) { // 41 is left arrow, and 65 is 'a' key
        e.preventDefault();
    }
}
