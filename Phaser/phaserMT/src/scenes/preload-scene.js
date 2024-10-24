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
        const monsterTamerAssetPath = 'assets/images/monster-tamer'
        const kenneysAssetPath = 'assets/images/kenneys-assets'

        
        // Battle Backgrounds
        this.load.image(
            BATTLE_BACKGROUND_ASSET_KEYS.FOREST, 
            `${monsterTamerAssetPath}/battle-backgrounds/forest-background.png`
        );

        // Battle Assets
        this.load.image(
            BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND, 
            `${kenneysAssetPath}/ui-space-expansion/custom-ui.png`
        );

        // Health Bar
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.RIGHT_CAP, 
            `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_right.png`
        );
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.MIDDLE, 
            `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_mid.png`
        );
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.LEFT_CAP, 
            `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_left.png`
        );

        // Monster Assets
        this.load.image(
            MONSTER_ASSET_KEYS.CARNODUSK, 
            `${monsterTamerAssetPath}/monsters/carnodusk.png`
        );
        this.load.image(
            MONSTER_ASSET_KEYS.IGUANIGNITE, 
            `${monsterTamerAssetPath}/monsters/iguanignite.png`
        );
    }

    create() {
        console.log('create');
        console.log(this.textures.get('background'));//.setFilter(Phaser.Textures.FilterMode.NEAREST);

        // test screen output
        this.add.image(0, 0, BATTLE_BACKGROUND_ASSET_KEYS.FOREST).setOrigin(0);
    }

    // update() {
    //     console.log('update');
    // }

}