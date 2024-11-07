import { ASSET_KEYS } from "../assets/asset-keys.js";
import Phaser from "../lib/phaser";
import { SCENE_KEYS } from "./scene-keys.js";

export class PreloadScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_KEYS.PRELOAD_SCENE,
            // active: true,
        });
        console.log(SCENE_KEYS.PRELOAD_SCENE);
    }
    
    // init() {
    //     console.log('init');
    // }

    preload() {

        console.log(`[${PreloadScene.name} preload] invoked`);

        // const monsterTamerAssetPath = 'assets/images/monster-tamer'
        // const kenneysAssetPath = 'assets/images/kenneys-assets'
        const mainImageDir = 'assets/images/'


        // Battle Backgrounds
        this.load.image(
            ASSET_KEYS.BACKGROUND, 
            `${mainImageDir}/background.png`
        );
        
        // console.log(this.textures.exists('background'));
        // console.log("hey");

        // Load player
        this.load.spritesheet(
            'player', `${mainImageDir}/player.png` , 
            { frameWidth: 64, frameHeight: 64 }
        );
        
        console.log(this.textures.exists('player'));

        this.load.spritesheet(
            'enemy', `${mainImageDir}/enemy.png` , 
            { frameWidth: 64, frameHeight: 64 }
        );
        // this.load.audio('punch', 'assets/sounds/punch.wav');
    }

    create() {
        console.log(`[${PreloadScene.name} create] invoked`);
        this.scene.start(SCENE_KEYS.GAME);
    }
}