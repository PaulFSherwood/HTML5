// background
var canvasBg = document.getElementById('canvasBg');
var ctxBg = canvasBg.getContext('2d');
// jet
var canvasJet = document.getElementById('canvasJet');
var ctxJet = canvasJet.getContext('2d');
// enemy
var canvasEnemy = document.getElementById('canvasEnemy');
var ctxEnemy = canvasEnemy.getContext('2d');

var jet1 = new Jet();
var gameWidth = canvasBg.width;
var gameHeight = canvasBg.height;
var isPlaying = false;
var requestAnimFrame = window.requestAnimationFrame || 
                       window.webkitRequestAnimationFrame ||
                       window.mozRequestAnimationFrame ||
                       window.msRequestAnimationFrame ||
                       window.oRequestAnimationFrame;

var enemies = [];

// loading images
var imgSprite = new Image();
imgSprite.src = 'img/sprite.png';
imgSprite.addEventListener('load',init, false);

// main functions
function init(){
    spawnEnemy(5);
    drawBg();
    startLoop();
    document.addEventListener('keydown', checkKeyDown, false);
    document.addEventListener('keyup', checkKeyUp, false);
}

function spawnEnemy(number) {
    for (var i = 0; i < number; i++) {
        enemies[enemies.length] = new Enemy();
    }
}

function drawAllEnemies() {
    clearCtxEnemy();
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].draw();
    }
}

function loop() {
    if (isPlaying) {
        jet1.draw();
        drawAllEnemies();
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

function drawBg() {
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
    this.srcY   = 500;
    this.width  = 100;
    this.height =  40;
    this.speed  =   6;
    this.drawX  = 150;
    this.drawY  = 400;
    this.noseX  = this.drawX + 100;
    this.noseY  = this.drawY + 30;
    this.isUpKey = false;
    this.isRightKey = false;
    this.isDownKey = false;
    this.isLeftKey = false;
    this.isSpacebar = false;
    this.isShooting = false;
    this.bullets = [];
    this.currentBullet = 0;
    for (var i = 0; i < 25; i++) {
        this.bullets[this.bullets.length] = new Bullet();
    }
}

Jet.prototype.draw = function() {
    clearCtxJet();
    this.checkDirection();
    this.noseX = this.drawX + 100;
    this.noseY = this.drawY + 30;
    this.checkShooting();
    this.drawAllBullets();
    ctxJet.drawImage(imgSprite, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);
};

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
};

Jet.prototype.drawAllBullets = function() {
    for (var i = 0; i < this.bullets.length; i++) {
        if (this.bullets[i].drawX >= 0) this.bullets[i].draw();
        if (this.bullets[i].explosion.hasHit) this.bullets[i].explosion.draw();
    }
};

Jet.prototype.checkShooting = function() {
     if (this.isSpacebar && !this.isShooting) {
         this.isShooting = true;
         this.bullets[this.currentBullet].fire(this.noseX, this.noseY);
         this.currentBullet++;
         if (this.currentBullet >= this.bullets.length) this.currentBullet = 0;
     } else if (!this.isSpacebar) {
         this.isShooting = false;
     } 
};

function clearCtxJet() {
    ctxJet.clearRect(0, 0, gameWidth, gameHeight);
}

// end of Jet functions

// bullet functions

function Bullet() {
    this.srcX = 100;
    this.srcY = 500;
    this.drawX = -20;
    this.drawY = 0;
    this.width = 5;
    this.height = 5;    
    this.explosion = new Explosion();
}

Bullet.prototype.draw = function() {
    this.drawX += 3;
    ctxJet.drawImage(imgSprite, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);
    this.checkHitEnemy();
    if (this.drawX > gameWidth) this.recycle();
};

Bullet.prototype.fire = function(startX, startY) {
    this.drawX = startX;
    this.drawY = startY;
};

Bullet.prototype.checkHitEnemy = function() {
    for (var i = 0; i < enemies.length; i++) {
        if (this.drawX >= enemies[i].drawX &&
	    this.drawX <= enemies[i].drawX + enemies[i].width &&
	    this.drawY >= enemies[i].drawY &&
	    this.drawY <= enemies[i].drawY + enemies[i].height) {
	        this.explosion.drawX = enemies[i].drawX - (this.explosion.width / 2);
		this.explosion.drawY = enemies[i].drawY;
		this.explosion.hasHit = true;
		this.recycle();
		enemies[i].recycleEnemy();
		}
        }
};

Bullet.prototype.recycle = function() {
    this.drawX = -20;
};

// end of bullet functions



// explosion functions

function Explosion() {
    this.srcX  = 750;
    this.srcY  = 500;
    this.drawX = 0;
    this.drawY = 0;
    this.width = 50;
    this.height = 50;
    this.hasHit = false;
    this.currentFrame = 0;
    this.totalFrames = 10;
}

Explosion.prototype.draw = function() {
    if (this.currentFrame <= this.totalFrames) {
        ctxJet.drawImage(imgSprite, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);
        this.currentFrame++;
    } else {
        this.hasHit = false;
        this.currentFrame = 0;
    }
};

// end of explosion functions


// enemy functions

function Enemy(){
    this.srcX   =   0;
    this.srcY   = 540;
    this.width  = 100;
    this.height =  40;
    this.speed  =   6;
    this.drawX  = Math.floor(Math.random() * 1000 ) + gameWidth;
    this.drawY  = Math.floor(Math.random() * 400);
}

Enemy.prototype.draw = function() {
    this.drawX -= this.speed / 2;
    ctxEnemy.drawImage(imgSprite, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);
    this.checkEscaped();
};

Enemy.prototype.checkEscaped = function() {
    if (this.drawX + this.width <= 0) {
        this.recycleEnemy();
    }
};

Enemy.prototype.recycleEnemy = function() {
    this.drawX  = Math.floor(Math.random() * 1000 ) + gameWidth;
    this.drawY  = Math.floor(Math.random() * 400);
};

function clearCtxEnemy() {
    ctxEnemy.clearRect(0, 0, gameWidth, gameHeight);
}
// end enemy functions

// event functions

function checkKeyDown(e) {
    var keyID = e.keyCode || e.which;
    if (keyID === 38 || keyID === 87) { //up arrow or W key
        jet1.isUpKey = true;
        e.preventDefault();
    }
    if (keyID === 39 || keyID === 68) { //right arrow or D key
        jet1.isRightKey = true;
        e.preventDefault();
    }
    if (keyID === 40 || keyID === 83) { //down arrow or S key
        jet1.isDownKey = true;
        e.preventDefault();
    }
    if (keyID === 37 || keyID === 65) { //left arrow or A key
        jet1.isLeftKey = true;
        e.preventDefault();
    }
    if (keyID === 32) { //spacebar
        jet1.isSpacebar = true;
        e.preventDefault();
    }
}

function checkKeyUp(e) {
    var keyID = e.keyCode || e.which;
    if (keyID === 38 || keyID === 87) { //up arrow or W key
        jet1.isUpKey = false;
        e.preventDefault();
    }
    if (keyID === 39 || keyID === 68) { //right arrow or D key
        jet1.isRightKey = false;
        e.preventDefault();
    }
    if (keyID === 40 || keyID === 83) { //down arrow or S key
        jet1.isDownKey = false;
        e.preventDefault();
    }
    if (keyID === 37 || keyID === 65) { //left arrow or A key
        jet1.isLeftKey = false;
        e.preventDefault();
    }
    if (keyID === 32) { //spacebar
        jet1.isSpacebar = false;
        e.preventDefault();
    }
}
// end of event functions
