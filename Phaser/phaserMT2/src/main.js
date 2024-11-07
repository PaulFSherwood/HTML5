import Phaser from './lib/phaser.js'
import { SCENE_KEYS } from './scenes/scene-keys.js'
import { PreloadScene } from './scenes/preload-scene.js'
import { BattleScene } from './scenes/battle-scene.js'

const game = new Phaser.Game({
  type: Phaser.CANVAS,
  pixelArt: false,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'game-container',
    width: 800,
    height: 600,
  },
  physics: {
    default: 'arcade',
    arcade: {
      // gravity: { y: 0 },
      debug: true,
    },
  },
  backgroundColor: '#000000',

  // scene: [PreloadScene]
});

game.scene.add(SCENE_KEYS.PRELOAD_SCENE, PreloadScene);
game.scene.add(SCENE_KEYS.BATTLE_SCENE, BattleScene);
game.scene.start(SCENE_KEYS.PRELOAD_SCENE);

// REVIEW: Look throught the code to verify how it is running.
