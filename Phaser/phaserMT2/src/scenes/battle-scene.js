import { BATTLE_ASSET_KEYS, BATTLE_BACKGROUND_ASSET_KEYS, HEALTH_BAR_ASSET_KEYS, MONSTER_ASSET_KEYS } from "../assets/asset-keys";
import { BattleMenu } from "../battle/ui/battle-menu";
import { DIRECTION } from "../common/direction";
import Phaser from "../lib/phaser";
import { SCENE_KEYS } from "./scene-keys";

export class BattleScene extends Phaser.Scene {
    /** @type {BattleMenu} */
    #battleMenu;
    /** @type {Phaser.Types.Input.Keyboard.CursorKeys} */
    #cursorKeys;

    constructor() {
        super({
            key: SCENE_KEYS.BATTLE_SCENE,
        });
    }

    create() {
        console.log(`[${BattleScene.name} create] invoked`);
        
        //Create animations
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers(MONSTER_ASSET_KEYS.PLAYER, { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1,
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers(MONSTER_ASSET_KEYS.PLAYER, { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers(MONSTER_ASSET_KEYS.PLAYER, { start: 8, end: 11 }),
            frameRate: 10,
            repeat: -1,
        });
    
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers(MONSTER_ASSET_KEYS.PLAYER, { start: 8, end: 11 }),
            frameRate: 10,
            repeat: -1,
        });


        // Create the main background
        this.add.image(0, 0, BATTLE_BACKGROUND_ASSET_KEYS.FOREST).setOrigin(0, 0);

        // Render out the player and enemy monsters
        this.add.image(558, 450, MONSTER_ASSET_KEYS.ENEMY, 0).setFlipX(true);
        this.character = this.physics.add.sprite(155, 450, MONSTER_ASSET_KEYS.PLAYER, 0);
        // this.add.image(155, 450, MONSTER_ASSET_KEYS.PLAYER, 0);

        // Enable cursor keys
        this.#cursorKeys = this.input.keyboard.createCursorKeys();
        // this.#cursorKeys.down.
    }

    update() {
        const wasSpaceKeyPressed = Phaser.Input.Keyboard.JustDown(this.#cursorKeys.space);
        if (wasSpaceKeyPressed) {
            this.#battleMenu.handlePlayerInput('OK');
            return;
        }

        if (Phaser.Input.Keyboard.JustDown(this.#cursorKeys.shift)) {
            this.#battleMenu.handlePlayerInput('CANCEL');
            return;
        }

        /** @type {import('../common/direction.js').Direction} */
        let selectedDirection = DIRECTION.NONE;
        if (this.#cursorKeys.left.isDown) {
            selectedDirection = DIRECTION.LEFT;
        } else if (this.#cursorKeys.right.isDown) {
            selectedDirection = DIRECTION.RIGHT;
        } else if (this.#cursorKeys.up.isDown) {
            selectedDirection = DIRECTION.UP;
        } else if (this.#cursorKeys.down.isDown) {
            selectedDirection = DIRECTION.DOWN;
        }

        // if (selectedDirection !== DIRECTION.NONE) {
        //     this.#battleMenu.handlePlayerInput(selectedDirection);
        // }
        
        console.log(selectedDirection);
        // Character movement logic
        switch (selectedDirection) {
            case DIRECTION.LEFT:
                this.character.setVelocityX(-160);
                this.character.anims.play('left', true);
                console.log('left');
                break;
            case DIRECTION.RIGHT:
                this.character.setVelocityX(160);
                this.character.anims.play('right', true);
                break;
            case DIRECTION.UP:
                this.character.setVelocityY(-160);
                this.character.anims.play('up', true);
                break;
            case DIRECTION.DOWN:
                this.character.setVelocityY(160);
                this.character.anims.play('down', true);
                break;
            default:
                this.character.setVelocityX(0);
                this.character.setVelocityY(0);
                this.character.anims.stop();
                break;
        }
    }

    /**
     * 
     * @param {number} x the x position to place the health bar container
     * @param {number} y the y position to place the health bar container
     * @returns {Phaser.GameObjects.Container}
     */

}