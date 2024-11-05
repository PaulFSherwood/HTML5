import Phaser from './lib/phaser.js'
import { PreloadScene } from './scenes/preload-scene.js'
import { GameScene } from './scenes/game-scene.js'

// const config = {
//   type: Phaser.AUTO,
//   width: 800,
//   height: 600, 
//   physics: {
//     default: 'arcade',
//     arcade: {
//       gravity: { y: 300 },
//       debug: true
//     }
//   },
//   scene: [PreloadScene, GameScene]
// };

const config = ({
  type: Phaser.AUTO,
  pixelArt: false,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'game-container',
    width: 1024,
    height: 576,
  },
  backgroundColor: '#000000',

  // scene: [PreloadScene]
  scene: [PreloadScene, GameScene]
});

const game = new Phaser.Game(config);