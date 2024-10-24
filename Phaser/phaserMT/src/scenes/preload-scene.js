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
        this.load.image(
            'background', 
            'assets/images/monster-tamer-bg.png');
    }

    create() {
        this.textures.get('background');//.setFilter(Phaser.Textures.FilterMode.NEAREST);
    }

    // update() {
    //     console.log('update');
    // }

}