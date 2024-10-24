import Phaswer from '../lib/phaser.js'
import { SCENE_KEYS } from './scene-keys.js';

export class PreloadScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_KEYS.PRELOAD_SCENE,
            active: true,
        });
        console.log(SCENE_KEYS.PRELOAD_SCENE);
    }

    init() {
        console.log('init');
    }

    preload() {
        console.log('preload');
    }

    create() {
        console.log('create');
    }

    update() {
        console.log('update');
    }
}