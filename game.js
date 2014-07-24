// background
var canvasBg = document.getElementById('canvasBg');
var ctxBg = canvasBg.getContext('2d');
// jet
var canvasJet = document.getElementById('canvasJet');
var ctxJet = canvasJet.getContext('2d');
// enemy
var canvasEnemy = document.getElementById('canvasEnemy');
var ctxEnemy = canvasEnemy.getContext('2d');

var jet1;
var enemy1;
var gameWidth = canvasBg.width;
var gameHeight = canvasBg.height;
var isPlaying = false;
var requestAnimFrame = window.requestAnimationFrame || 
                       window.webkitRequestAnimantionFrame ||
                       window.mozRequestAnimationFrame ||
                       window.msRequestAnimationFrame ||
                       window.oRequestAnimationFrame;

var spawnInterval;
var totalEnemies = 0;
var enemys = [];

// loading images
var imgSprite = new Image();
imgSprite.src = 'img/sprite.png';
imgSprite.addEventListener('load',init, false);

// main functions
function init(){
    jet1 = new Jet();
    enemy1 = new Enemy();
    drawBg();
    startLoop();
    document.addEventListener('keydown', checkKeyDown, false);
    document.addEventListener('keyup', checkKeyUp, false);
}

function loop(){
    if (isPlaying) {
        jet1.draw();
        enemy1.draw();
        requestAnimFrame(loop);
    }
}

function startLoop() {
    isPlaying = true;
    loop();
}

function stopLoop() {
    isPlaying = false;
}

function drawBg(){
    var srcX = 0;
    var srcY = 0;
    var drawX = 0;
    var drawY = 0;
    ctxBg.drawImage(imgSprite, srcX, srcY, gameWidth, gameHeight, drawX, drawY, gameWidth, gameHeight);
}

function clearCtxBg() {
    ctxBg.clearRect(0, 0, gameWidth, gameHeight);
}
// end of main functions


// Jet functions
function Jet(){
    this.srcX   =   0;
    this.srcY   = 601;
    this.width  = 100;
    this.height =  40;
    this.speed  =   6;
    this.drawX  = 150;
    this.drawY  = 200;
    this.isUpKey = false;
    this.isRightKey = false;
    this.isDownKey = false;
    this.isLeftKey = false;
}

Jet.prototype.draw = function() {
    clearCtxJet();
    this.checkDirection();
    ctxJet.drawImage(imgSprite, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);
};

function clearCtxJet() {
    ctxJet.clearRect(0, 0, gameWidth, gameHeight);
}

Jet.prototype.checkDirection = function () {
    if (this.isUpKey) {
        this.drawY -= this.speed;
    }
    if (this.isRightKey) {
        this.drawX += this.speed;
    }
    if (this.isDownKey) {
        this.drawY += this.speed;
    }
    if (this.isLeftKey) {
        this.drawX -= this.speed;
    }
}
// end of Jet functions

// enemy functions
function Enemy(){
    this.srcX   =   0;
    this.srcY   = 642;
    this.width  = 100;
    this.height =  40;
    this.speed  =   2;
    this.drawX  = Math.floor((Math.random() * 1000 ) + gameWidth);
    this.drawY  = Math.floor(Math.random() * 400);
    this.isUpKey = false;
    this.isRightKey = false;
    this.isDownKey = false;
}

Enemy.prototype.draw = function() {
    clearCtxEnemy();
    this.drawX -= this.speed / 2;
    ctxEnemy.drawImage(imgSprite, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);
}

function clearCtxEnemy() {
    ctxEnemy.clearRect(0, 0, gameWidth, gameHeight);
}
// enemy functions

// event functions
function checkKeyDown(e){
    var keyID = e.keyCode || e.which;
    if (keyID == 38 || keyID == 87) { // 38 is up arrow, and 87 is 'w' key
        jet1.isUpKey = true;
        e.preventDefault();
    }
    if (keyID == 39 || keyID == 68) { // 39 is right arrow, and 68 is 'd' key
        jet1.isRightKey = true;
        e.preventDefault();
    }
    if (keyID == 40 || keyID == 83) { // 40 is down arrow, and 87 is 's' key
        jet1.isDownKey = true;
        e.preventDefault();
    }
    if (keyID == 37 || keyID == 65) { // 41 is left arrow, and 65 is 'a' key
        jet1.isLeftKey = true;
        e.preventDefault();
    }
}

function checkKeyUp(e){
    var keyID = e.keyCode || e.which;
    if (keyID == 38 || keyID == 87) { // 38 is up arrow, and 87 is 'w' key
        jet1.isUpKey = false;
        e.preventDefault();
    }
    if (keyID == 39 || keyID == 68) { // 39 is right arrow, and 68 is 'd' key
        jet1.isRightKey = false;
        e.preventDefault();
    }
    if (keyID == 40 || keyID == 83) { // 40 is right arrow, and 87 is 's' key
        jet1.isDownKey = false;
        e.preventDefault();
    }
    if (keyID == 37 || keyID == 65) { // 41 is left arrow, and 65 is 'a' key
        jet1.isLeftKey = false;
        e.preventDefault();
    }
}
// end of event functions
