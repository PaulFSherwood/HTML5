
var Context = {
    canvas: null,
    context: null,
    create: function(canvas_tag_id) {
        this.canvas = document.getElementById(canvas_tag_id);
        this.context = this.canvas.getContext('2d');
        return this.context;
    }
};

var Sprite = function(filename, is_pattern) {
    // Construct
    this.image = null;
    this.pattern = null;
    this.TO_RADIANS = Math.PI/180;
    
    if (filename != undefined && filename != "" && filename != null) {
        this.image = new Image();
        this.image.src = filename;
        
        if (is_pattern) {
            this.pattern = Context.context.createPattern(this.image, 'repeat');
        }
    } else {
        console.log("Unable to load the sprite");
    }
    
    this.draw = function(x, y, w, h) {
        // pattern?
        if (this.pattern != null) {
            Context.context.fillStyle = this.pattern;
            Context.context.fillRect(x, y, w, h);
        } else {
            // Image
            if(w != undefined || h != undefined) {
                Context.context.drawImage(this.image, x, y,
                                          this.image.width,
                                          this.image.height);
                
            } else {
                // Stretched
                Context.context.drawImage(this.image, x, y, w, h);
                console.log("in Streched");
            }
        }
    };
    
    this.rotate = function(x, y, angle) {
        // Saves the state of the canvas
        Context.context.save();
        // Rotating the canvas and translate to new position
        Context.context.translate(x, y);
        Context.context.rotate(angle * this.TO_RADIANS);
        Context.context.drawImage(this.image,
                                  -(this.image.width/2),
                                  -(this.image.height/2));
        // restore/revert back to original save state
        Context.context.restore();
    };
};

var img = new Sprite("wall.png", false);

$(document).ready(function() {
	// Initialize
  Context.create("canvas");
  
    var WALL = "http://www.tigrisgames.com/wall.png";
    var CRATE = "http://www.tigrisgames.com/crate.png";
    
    var image = new Sprite(WALL, false);
    var image2 = new Sprite(CRATE, false);
    var pattern = new Sprite(CRATE, true);
    var angle = 0;
    
    setInterval(function() {
        Context.context.fillStyle = "#000000";
        Context.context.fillRect(0, 0, 800, 800);
        
        image.draw(0, 0, 64, 64);
        image.draw(0, 74, 256, 32);
        pattern.draw(160, 160, 256, 280);
        
        image.rotate(115, 160, angle += 4.0);
        image2.rotate(115, 260, -angle/2);
        
    }, 25);
});
