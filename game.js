var canvasBg = document.getElementById('canvasBg');
var ctxBg = canvasBg.getContext('2d');

var clearCanvasBtn = document.getElementById('clearCanvasBtn');
clearCanvasBtn.addEventListener('click', clearCanvas, false);

var gameWidth = canvasBg.width;
var gameHeight = canvasBg.height;

// loading images
var imgSprite = new Image();
imgSprite.src = 'img/sprite.png';
imgSprite.addEventListener('load',drawBg, false);

function drawBg(){
    var srcX = 0;
    var srcY = 0;
    var drawX = 0;
    var drawY = 0;
    ctxBg.drawImage(imgSprite, srcX, srcY, gameWidth, gameHeight, drawX, drawY, gameWidth, gameHeight);

}

function clearCanvas() {
    ctxBg.clearRect(0,0,800,500);
}
