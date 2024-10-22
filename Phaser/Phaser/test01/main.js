


var GameState = {
    preload: function() {
		this.load.image('background', 'assets/background.png');
		this.load.image('rooster',    'assets/rooster.png');
    
    },
    create: function() {
		this.background = this.game.add.sprite(0, 0, 'background');
		myX = this.game.world.centerX;
		myY = this.game.world.centerY;
		this.rooster    = this.game.add.sprite(myX, myY, 'rooster');
		this.rooster.anchor.setTo(0.5, 0.5);
    },
    update: function() {
    
    }
};
// init game
var game = new Phaser.Game(800, 600, Phaser.CANVAS);

game.state.add('GameState', GameState);
game.state.start('GameState');