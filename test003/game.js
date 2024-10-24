var

// Game vars //

canvas,
ctx,
width,
height,

fgpos = 0,
frames = 0,
score = 0,
best = localStorage.getItem("best") || 0,

// State vars //

currentstate,
states = {
	Splash: 0, Game: 1, Score: 2
},


// Game objects //

/**
  * Ok button initiated in main()
  */
okbtn,


/**
  * The bird 
  */
bird = {
    x: 60,
    y: 0,
    frame: 0,
    velocity: 0,
    animation: [0, 1, 2, 1], // animation sequence

    rotation: 0,
    radius: 12,

    gravity: 0.25,
    _jump: 4.6,

	/**
	 * Makes the bird "flap" and jump
	 */
    jump: function() {
        this.velocity = -this._jump;  // why is this _jump and not just jump
    },

    /**
     * Update sprite animation and position of bird
     */
    update: function() {
        // make sure animation updates and plays faster in gamestate
        var n = currentstate === states.Splash ? 10 : 5;
        
        this.frame += frames % n === 0 ? 1 : 0; // why do we need to watch the frames
        this.frame %= this.animation.length;

	// in splash state make bird hover up and down and set
        // rotation to zero
        if (currentstate === states.Splash) {

			this.y = height - 280 + 5*Math.cos(frames/10);
			this.rotation = -0.1;
        } else if (currentstate === states.Game) { // game and score state //
            this.velocity += this.gravity;
            this.y += this.velocity;
            
                        // change to the score state when bird touches the ground
            if (this.y >= height - s_fg.height -10) {
                this.y = height - s_fg.height - 10;
                if (currentstate === states.Game) {
                    currentstate = states.Score;
                }
		// sets velocity to jump speed for correct rotation
                this.velocity = this._jump;
            }

	    // when bird lack upward momentum increment the rotation
	    // angle
            if (this.velocity >= this._jump) {
                this.frame = 1;
                this.rotation = Math.min(Math.PI/2, this.rotation + 0.3);
            } else {
                this.rotation = -0.3;
            }
        } 
    },

	/**
	 * Draws bird with rotation to canvas ctx
	 * 
	 * @param  {CanvasRenderingContext2D} ctx the context used for
	 *                                        drawing
	 */
	draw: function(ctx) {
		ctx.save();
		// translate and rotate ctx coordinatesystem
		ctx.translate(this.x, this.y);
		ctx.rotate(this.rotation);

		var n = this.animation[this.frame];
		// draws the bird with center in origo
		s_bird[n].draw(ctx, -s_bird[n].width/2, -s_bird[n].height/2);

        //--// collision visual check
        //--ctx.fillStyle = "#f00";
        //--ctx.beginPath();
        //--ctx.arc(0, 0, this.radius, 0, 2*Math.PI);
        //--// ctx.stroke();
        //--ctx.fill();

		ctx.restore();
	}
},

/**
 * The pipes
 */
pipes = {
    
    _pipes: [],
	// padding: 80, // TODO: Implement paddle variable

	/**
	 * Empty pipes array
	 */
    reset: function() {
        this._pipes = [];
	},

	/**
	 * Create, push and update all pipes in pipe array
	 */
	update: function() {
		// add new pipe each 100 frames
		if (frames % 100 === 0) {
			// calculate y position
			var _y = height - (s_pipeSouth.height+s_fg.height+120+200*Math.random());
			// create and push pipe to array
			this._pipes.push({
				x: 500,
				y: _y,
				width: s_pipeSouth.width,
				height: s_pipeSouth.height
			});
		}
		for (var i = 0, len = this._pipes.length; i < len; i++) {
			var p = this._pipes[i];

			if (i === 0) {

				score += p.x === bird.x ? 1 : 0;

				// collision check, calculates x/y difference and
				// use normal vector length calculation to determine
				// intersection
				var cx  = Math.min(Math.max(bird.x, p.x), p.x+p.width);
				var cy1 = Math.min(Math.max(bird.y, p.y), p.y+p.height);
				var cy2 = Math.min(Math.max(bird.y, p.y+p.height+80), p.y+2*p.height+80);
				// closest difference
				var dx  = bird.x - cx;
				var dy1 = bird.y - cy1;
				var dy2 = bird.y - cy2;
				// vector length
				var d1 = dx*dx + dy1*dy1;
				var d2 = dx*dx + dy2*dy2;
				var r = bird.radius*bird.radius;
				// determine intersection
				if (r > d1 || r > d2) {
					currentstate = states.Score;
				}
			}
			// move pipe and remove if outside of canvas
			p.x -= 2;
			if (p.x < -p.width) {
				this._pipes.splice(i, 1);
				i--;
				len--;
			}
		}
	},

	/**
	 * Draw all pipes to canvas context.
	 * 
	 * @param  {CanvasRenderingContext2D} ctx the context used for
	 *                                        drawing
	 */
	draw: function(ctx) {
		for (var i = 0, len = this._pipes.length; i < len; i++) {
			var p = this._pipes[i];
			s_pipeSouth.draw(ctx, p.x, p.y);
			s_pipeNorth.draw(ctx, p.x, p.y+80+p.height);
		}
	}
};

/**
 * Called on mouse or touch press. Update and change state
 * depending on current game state.
 * 
 * @param  {MouseEvent/TouchEvent} evt tho on press event
 */
function onpress(evt) {

    switch (currentstate) {

	// change state and update bird velocity
        case states.Splash:
            currentstate = states.Game;
            bird.jump();
            break;

		// update bird velocity
        case states.Game:
            bird.jump();
            break;

        case states.Score:
            var mx = evt.offsetX, my = evt.offsetY;

            if (mx == null || my == null) {
                mx = evt.touches[0].clientX;
                my = evt.touches[0].clientY;
            }

            if (okbtn.x < mx && mx < okbtn.x + okbtn.width &&
                    okbtn.y < my && okbtn.y + okbtn.height
               ) {
                   pipes.reset();
                   currentstate = states.Splash;
                   score = 0;
               }
            break;
    }
}

/**
 * Starts and initiate the game
 */
function main() {
    // create canvas and set width/height
    canvas = document.createElement("canvas");

    width = window.innerWidth;
    height = window.innerHeight;
        
   var evt = "touchstart";
   if (width >= 500) {
       width  = 320;
       height = 480;
	   canvas.style.border = "1px solid #000";
       // change state on mousedown
       evt = "mousedown";
    }
    // change state
     // listen for input event
    document.addEventListener(evt, onpress);

	canvas.width = width;
	canvas.height = height;
	if (!(!!canvas.getContext && canvas.getContext("2d"))) {
		alert("Your browser doesn't support HTML5, please update to latest version");
	}
	ctx = canvas.getContext("2d");

	currentstate = states.Splash;
	// append canvas to document
	document.body.appendChild(canvas);

	// initate graphics and okbtn
    var img = new Image();
    img.onload = function() {
        initSprites(this);
        ctx.fillStyle = s_bg.color; // fill in the background color

        okbtn = {
            x: (width - s_buttons.Ok.width)/2,
            y: height - 200,
            width: s_buttons.Ok.width,
            height: s_buttons.Ok.height
        }

        run();
    }
    img.src = "res/sheet.png";
}

/**
 * Starts and update gameloop
 */
function run() {
	var loop = function() {
		update();
		render();
		window.requestAnimationFrame(loop, canvas);
	}
	window.requestAnimationFrame(loop, canvas);
}

/**
 * Update forground, bird and pipes position
 */
function update() {
	frames++;

	if (currentstate !== states.Score) {
		fgpos = (fgpos - 2) % 14;
	} else {
		// set best score to maximum score
		best = Math.max(best, score);
		localStorage.setItem("best", best);
	}
    if (currentstate === states.Game) {
        pipes.update();
    }

	bird.update();
}

/**
 * Draws bird and all pipes and assets to the canvas
 */
function render() {
    // draw background color
    ctx.fillRect(0, 0, width, height);  // fill in the background color
    // draw background sprites
    s_bg.draw(ctx, 0, height - s_bg.height ); // initial picture
    s_bg.draw(ctx, s_bg.width, height - s_bg.height ); // fill in the gap

    pipes.draw(ctx);
    bird.draw(ctx);

    // draw forground sprites
    s_fg.draw(ctx, fgpos, height - s_fg.height); // forground picture
    s_fg.draw(ctx, fgpos+s_fg.width, height - s_fg.height); // fill in the rest of the forground

    // show the splash screen and the "Get Ready" text
    var width2 = width/2; // center of canvas

	if (currentstate === states.Splash) {
		// draw splash text and sprite to canvas
        s_splash.draw(ctx, width2 - s_splash.width/2, height - 300);
        // show the get ready text
        s_text.GetReady.draw(ctx, width2 - s_text.GetReady.width/2, height - 380);
    }
    // if games is done show game over text
    if (currentstate === states.Score) {
        s_text.GameOver.draw(ctx, width2 - s_text.GameOver.width/2, height - 400);  // game over text
        s_score.draw(ctx, width2 - s_score.width/2, height - 340);                  // score bg picture
        s_buttons.Ok.draw(ctx, okbtn.x, okbtn.y);                                   // Ok button

        s_numberS.draw(ctx, width2 - 47, height - 304, score, null, 10);
        s_numberS.draw(ctx, width2 - 47, height - 262, best, null, 10);
    } else {
        s_numberB.draw(ctx, null, 20, score, width2);
    }
}

// start and run the game
main();
