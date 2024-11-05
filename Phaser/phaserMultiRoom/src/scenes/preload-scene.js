import Phaser from "../lib/phaser";

export class PreloadScene extends Phaser.Scene {
    constructor() {
        super('PreloadScene');
    }

    preload() {
        this.load.image('background', '../assets/images/background.png');
        console.log(this.textures.exists('background'));
        console.log("hey");
        this.load.spritesheet('player', '../assets/images/player.png' , { frameWidth: 64, frameHeight: 64 });
        console.log(this.textures.exists('player'));
        this.load.spritesheet('enemy', '../assets/images/enemy.png' , { frameWidth: 64, frameHeight: 64 });
        // this.load.audio('punch', 'assets/sounds/punch.wav');
    }

    create() {
        this.scene.start('GameScene');
    }
}