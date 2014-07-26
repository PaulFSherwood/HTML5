

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

// Game objects

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
    animation: [0, 1, 2, 1],
    rotation: 0,
    radius: 12,
    gravity: 0.25,
    _jump: 4.6,

    jump: function() {
        this.velocity = -this._jump;  // why is this _jump and not just jump
    },

    update: function() {
        var n = currentstate === states.Splash ? 10 : 5;
        
        this.frame += frames % n === 0 ? 1 : 0; // why do we need to watch the frames
        this.frame %= this.animation.length;

        // floating up and down
        if (currentstate === states.Splash) {

			this.y = height - 280 + 5*Math.cos(frames/10);
			this.rotation = -0.1;
        } else if (currentstate === states.Game) {
            this.velocity += this.gravity;
            this.y += this.velocity;
            
            if (this.y >= height - s_fg.height -10) {
                this.y = height - s_fg.height - 10;
                if (currentstate === states.Game) {
                    currentstate = states.Score;
                }
                this.velocity = this._jump;
            }

            if (this.velocity >= this._jump) {
                this.frame = 1;
                this.rotation = Math.min(Math.PI/2, this.rotation + 0.3);
            } else {
                this.rotation = -0.3;
            }
        } 
    },

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

pipes = {
    
    _pipes: [],

    reset: function() {
    },

    update: function() {
        if (frames % 100 === 0) {
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

// change game state
function onpress() {

    switch (currentstate) {

        case states.Splash:
            currentstate = states.Game;
            bird.jump();
            break;

        case states.Game:
            bird.jump();
            break;

        case states.Score:
            break;
    }
}

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

    var img = new Image();
    img.onload = function() {
        initSprites(this);
        ctx.fillStyle = s_bg.color; // fill in the background color
        run();
    }
    img.src = "res/sheet.png";

}

function run() {
    var loop = function() {
        update();
        render();
        window.requestAnimationFrame(loop, canvas);
    }
    window.requestAnimationFrame(loop, canvas);
}

function update(){
    frames++;

    if (currentstate !== states.Score) {
        fgpos = (fgpos - 2) % 14;
    } else {
        best = Math.max(best, score);
        localStorage.setItem("best", best);
    }
    if (currentstate === states.Game) {
        pipes.update();
    }
    bird.update();
}

function render() {
    ctx.fillRect(0, 0, width, height);  // fill in the background color

    s_bg.draw(ctx, 0, height - s_bg.height ); // initial picture
    s_bg.draw(ctx, s_bg.width, height - s_bg.height ); // fill in the gap

    bird.draw(ctx);
    pipes.draw(ctx);

    s_fg.draw(ctx, fgpos, height - s_fg.height); // forground picture
    s_fg.draw(ctx, fgpos+s_fg.width, height - s_fg.height); // fill in the rest of the forground

    // show the splash screen and the "Get Ready" text
    var width2 = width/2;

    if (currentstate === states.Splash) {
        // show splash screen
        s_splash.draw(ctx, width2 - s_splash.width/2, height - 300);
        // show the get ready text
        s_text.GetReady.draw(ctx, width2 - s_text.GetReady.width/2, height - 380);
    }
}

main();
