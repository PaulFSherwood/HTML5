import Phaser from './lib/phaser.js'
import { PreloadScene } from './scenes/preload-scene.js'
import { GameScene } from './scenes/game-scene.js'
import { SCENE_KEYS } from './scenes/scene-keys.js'

const config =  { //new Phaser.Game({
  type: Phaser.AUTO, //CANVAS,
  // pixelArt: false,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'game-container',
    width: 1024,
    height: 576,
  },
  backgroundColor: '#000000',

  scene: [PreloadScene, GameScene]
};

// game.scene.add(SCENE_KEYS.PRELOAD_SCENE, PreloadScene);
// game.scene.add(SCENE_KEYS.BATTLE_SCENE, BattleScene);
// game.scene.start(SCENE_KEYS.PRELOAD_SCENE);
const game = new Phaser.Game(config);