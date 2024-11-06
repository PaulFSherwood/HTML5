import Phaser from "../lib/phaser";
import { ASSET_KEYS } from '../assets/asset-keys'
import { SCENE_KEYS } from './scene-keys'

// class PreloadScene extends Phaser.Scene {

export class GameScene extends Phaser.Scene {
    constructor() {
        super(SCENE_KEYS.GAME);
    }

    create() {
        // Background
        this.add.image(400, 300, ASSET_KEYS.BACKGROUND).setOrigin(0.5, 0.5);

        // Player
        this.player = this.physics.add.sprite(100, 450, ASSET_KEYS.PLAYER).setScale(1.5);
        this.player.setCollideWorldBounds(true);
        // this.createPlayerAnimations();

        // Input
        this.cursors = this.input.keyboard.createCursorKeys();
        // this.attackKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // // Enemies
        // this.enemies = this.physics.add.group();
        // this.createEnemyAnimations(); // Call this function to define enemy animations
        // this.spawnEnemy();

        // // Collisions
        // this.physics.add.collider(this.player, this.enemies, this.handlePlayerEnemyCollision, null, this);
    }

    update() {
        // Handle Player meowment
        // this.handlePlayerEnemyCollision();

        // Player Attack
        // if (Phaser.Input.Keyboard.JustDown(this.attackKey)) {
        //     this.player.anims.play('attack', true);
        //     this.sound.play('punch');
        //     this.checkAttackHit();
        // }
        // Player movement
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
            // this.player.anims.play('walk', true);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
            // this.player.anims.play('walk', true);
        } else {
            this.player.setVelocity(0);
            // this.player.anims.play('idle', true);
        }

        // Jumping 
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }
    }

    //     // Collision
    //     this.physics.add.collider(this.player, this.enemies, this.handlePlayerEnemyCollision, null, this);

    //     // // Player attack
    //     // if (Phaser.Input.Keyboard.JustDown(this.attackKey)) {
    //     //     this.player.anims.play('attack', true);
    //     //     this.sound.play('punch');
    //     //     this.checkAttachHit();
    //     // }
    // }

    createPlayerAnimations() {
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('player', { start: 4, end: 7 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'attack',
            frames: this.anims.generateFrameNumbers('player', { start: 8, end: 11 }),
            frameRate: 15,
            repeat: 0
        });
    }

    createEnemyAnimations() {
        // Define the 'enemyWalk' animation
        this.anims.create({
            key: 'enemyWalk',
            frames: this.anims.generateFrameNames('enemy', {start: 4, end: 7 }),
            frameRate: 10,
            repeat: -1
        });
    }

    handlePlayerMovement() {
        // Player movement
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
            this.player.anims.play('walk', true);

        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
            this.player.anims.play('walk', true);

        } else {
            this.player.setVelocity(0);
            this.player.anims.play('idle', true);
        }
    }

    // spawnEnemy() {
    //     const enemy = this.enemies.create(800, 450, 'enemy').setScale(1.5);
    //     enemy.setCollideWorldBounds(true);
    //     enemy.setVelocityX(-100);
    //     enemy.anims.play('enemyWalk', true); // play the enemyWalk animation
    // }

    handlePlayerEnemyCollision(player, enemy) {
        // Handle what happens when the player collides with the enemy
        console.log("Player collided with enemy");
    }

    // checkAttackHit() {
    //     this.enemies.getChildren().forEach(enemy => {
    //         if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), enemy.getBounds())){
    //             // Handle enemy hit
    //             enemy.destroy();
    //         }
    //     });
    // }
}