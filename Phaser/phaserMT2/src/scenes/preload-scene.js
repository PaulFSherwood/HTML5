import { BATTLE_ASSET_KEYS, BATTLE_BACKGROUND_ASSET_KEYS, HEALTH_BAR_ASSET_KEYS, MONSTER_ASSET_KEYS } from "../assets/asset-keys";
import Phaser from "../lib/phaser";
import { SCENE_KEYS } from "./scene-keys";

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

        const monsterTamerAssetPath = 'assets/images/monster-tamer'
        const kenneysAssetPath = 'assets/images/kenneys-assets'
        const imagePath = `assets/images`

        
        // Battle Backgrounds
        this.load.image(
            BATTLE_BACKGROUND_ASSET_KEYS.FOREST, 
            // `${monsterTamerAssetPath}/battle-backgrounds/forest-background.png`
            `${imagePath}/background.png`
        );

        // // Battle Assets
        // this.load.image(
        //     BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND, 
        //     `${kenneysAssetPath}/ui-space-expansion/custom-ui.png`
        // );

        // // Health Bar
        // this.load.image(
        //     HEALTH_BAR_ASSET_KEYS.RIGHT_CAP, 
        //     `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_right.png`
        // );
        // this.load.image(
        //     HEALTH_BAR_ASSET_KEYS.MIDDLE, 
        //     `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_mid.png`
        // );
        // this.load.image(
        //     HEALTH_BAR_ASSET_KEYS.LEFT_CAP, 
        //     `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_left.png`
        // );

        // Monster Assets
        // this.load.image(
        //     MONSTER_ASSET_KEYS.CARNODUSK, 
        //     `${monsterTamerAssetPath}/monsters/carnodusk.png`
        // );
        // this.load.image(
        //     MONSTER_ASSET_KEYS.IGUANIGNITE, 
        //     `${imagePath}/player.png`
        // );

        // Load player
        this.load.spritesheet(
            MONSTER_ASSET_KEYS.PLAYER, 
            `${imagePath}/player.png` , 
            { frameWidth: 64, frameHeight: 64 }
        );
        
        console.log(this.textures.exists('player'));

        this.load.spritesheet(
            MONSTER_ASSET_KEYS.ENEMY, 
            `${imagePath}/enemy.png` , 
            { frameWidth: 64, frameHeight: 64 }
        );
        
    }

    create() {
        console.log(`[${PreloadScene.name} create] invoked`);
        this.scene.start(SCENE_KEYS.BATTLE_SCENE);
    }

    // update() {
    //     console.log('update');
    // }

}