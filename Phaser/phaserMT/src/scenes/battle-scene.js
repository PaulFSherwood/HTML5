import { BATTLE_BACKGROUND_ASSET_KEYS, MONSTER_ASSET_KEYS } from "../assets/asset-keys";
import Phaser from "../lib/phaser";
import { SCENE_KEYS } from "./scene-keys";

export class BattleScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_KEYS.BATTLE_SCENE,
            // active: true,
        });
        console.log(SCENE_KEYS.BATTLE_SCENE);
    }

    create() {
        console.log(`[${BattleScene.name} create] invoked`);
        // Create the main background
        this.add.image(0, 0, BATTLE_BACKGROUND_ASSET_KEYS.FOREST).setOrigin(0, 0);

        // Render out the player and enemy monsters
        this.add.image(758, 144, MONSTER_ASSET_KEYS.CARNODUSK, 0);
        this.add.image(255, 316, MONSTER_ASSET_KEYS.IGUANIGNITE, 0).setFlipX(true);
    }

}