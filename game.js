// background
var canvasBg = document.getElementById('canvasBg');
var ctxBg = canvasBg.getContext('2d');
// jet
var canvasJet = document.getElementById('canvasJet');
var ctxJet = canvasJet.getContext('2d');

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
}

function draw(){
    drawJet();
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
