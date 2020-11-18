window.addEventListener("load", eventWindowLoaded, false);

var Debugger = function() {
};
Debugger.log = function(message) {
    try {
        console.log(message);
    } catch (exception) {
        return;
    }
}

function eventWindowLoaded() {
    canvasApp();
}

function canvasSupport() {
    return !!document.createElement('canvas').getContext;
}

function canvasApp() {
    var formElement = document.getElementById("createImageData");
    formElement.addEventListener('click', createImageDataPressed, false);
    
    var theCanvas = document.getElementById("canvasOne");
    var context = theCanvas.getContext("2d");
    // GLOBALS
    var guesses = 0;
    var message = "Guess the letter from a to z";
    /// put a-z into an array for storage
    var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var today = new Date();
    var letterToGuess = "";
    var higherOrLower = "";
    var lettersGuessed = [];
    var gameOver = false;
    var text = "Hello World";
    var alpha = 0;
    var fadeIn = true;
    //image
    var helloWorldImage = new Image();
    helloWorldImage.src = "html5bg.jpg";
    
    function createImageDataPressed(e) {
        window.open(theCanvas.toDataURL(), "canvasImage", "left=0, top=0, width=" + theCanvas.width + ", height=" + theCanvas.height + ",toolbar=0, resizable=0");
    }
    
    if (!canvasSupport()) {
        return;
    }
   
    function drawScreen() {
        context.clearRect(0, 0, theCanvas.width, theCanvas.height);
        // background
        context.globalAlpha = 1;
        context.fillStyle = "#000000";
        context.fillRect(0, 0, 640, 480);
        // image
        context.globalAlpha = .25;
        context.drawImage(helloWorldImage, 0, 0);
        // text
        context.font = "24px Sans-Serif";
        context.textBaseline = "top";

        if (fadeIn){
            alpha += .01;
            if (alpha >= 1){
                alpha = 1;
                fadeIn = false;
            }
        } else {
            alpha -= .01;
            if (alpha < 0){
                alpha = 0;
                fadeIn = true;
            }
        }
        
        // box
        context.strokeStyle = "#000000";
        context.strokeRect(0, 0, 640, 480);

        context.textBaseline = "top";
        // Date
        // context.fillStyle = "#000000";
        context.font = "24px Sans-Serif";
        context.fillText(today, 150, 10);

        /// Tell the user what he needs to do (guess a letter between a and z
        context.fillStyle = "#FF0000";
        context.font = "24px Sans-Serif";
        context.fillText(message, 125, 30); // Guesses
        context.fillStyle = "#109910";
        context.font = "24px Sans-Serif";
        context.fillText("Guesses: " + guesses, 215, 150);
        //Higher or lower
        context.fillStyle = "#000000";
        context.font = "24px Sans-Serif";
        context.fillText("Higher Or Lower: " + higherOrLower, 150, 225);
        // Letters Guessed
        context.fillStyle = "#FF0000";
        context.font = "24px Sans-Serif";
        context.fillText("Letters Guessed: " + lettersGuessed, 10, 360);
        
        if (gameOver) {
            context.fillStyle = "#FF0000";
            context.font = "40px Sans-Serif";
            context.fillText("You Got It!", 150, 280);
        }
        
        context.globalAlpha = alpha;
		context.fillStyle    = "#FFFFFF";
		context.fillText  (text, 150,200);
        
        
        
    }/////////////////////////////////////////////////////////////////////////
        
    function gameLoop() {
            window.setTimeout(gameLoop, 20);
            drawScreen();
    }
    
    gameLoop();
    
    
    drawScreen();
    initGame();
    
    function initGame() {
        /// pick a random number between 0 and 25
        var letterIndex = Math.floor((Math.random() * letters.length));
        letterToGuess = letters[letterIndex];
        Debugger.log("Letter is: " + letters[letterIndex]);
        guesses = 0;
        lettersGuessed = [];
        gameOver = false;
        window.addEventListener("keydown", eventKeyPressed, true);
        drawScreen();
    }
    
    function eventKeyPressed(e) {
        if (!gameOver) {
            var letterPressed = String.fromCharCode(e.keyCode);
            letterPressed = letterPressed.toLowerCase();
            guesses++;
            lettersGuessed.push(letterPressed);
            
            if(letterPressed == letterToGuess) {
                gameOver = true;
            } else {
                letterIndex = letters.indexOf(letterToGuess);
                guessIndex = letters.indexOf(letterPressed);
                Debugger.log(guessIndex);
                if (guessIndex < 0) {
                    higherOrLower = "That is not a letter";
                } else if (guessIndex > letterIndex) {
                    higherOrLower = "Lower";
                } else {
                    higherOrLower = "Higher";
                }
            }
            drawScreen();
        }
    }
}