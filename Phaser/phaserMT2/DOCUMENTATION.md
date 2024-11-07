# Project Documentation

## Overview

This project is a Phaser 3 game with multiple scenes, including a preload scene, a battle scene, and a main scene where the character can move around. The project is organized into several folders, each serving a specific purpose.

## File Structure

### `src/`

- **`assets/`**: Contains asset keys used in the game.
  - **`asset-keys.js`**: Defines constants for asset keys used throughout the game.

- **`battle/`**: Contains logic related to the battle system.
  - **`ui/`**: Contains UI components for the battle system.
    - **`battle-menu.js`**: Manages the battle menu UI and handles player input during battles.

- **`common/`**: Contains common utilities and constants used across different parts of the game.
  - **`direction.js`**: Defines direction constants used for character movement.

- **`lib/`**: Contains external libraries or custom wrappers for external libraries.
  - **`phaser.js`**: Exports the Phaser library for use in the game.

- **`scenes/`**: Contains the different scenes used in the game.
  - **`battle-scene.js`**: Manages the battle scene, including character movement and battle logic.
  - **`preload-scene.js`**: Handles the loading of game assets before the game starts.
  - **`scene-keys.js`**: Defines constants for scene keys used to manage different scenes in the game.
  - **`main-scene.js`**: Manages the main game scene where the character can move around.

- **`main.js`**: The main entry point of the game. Initializes the Phaser game instance and adds the different scenes.

## Detailed File Descriptions

### `src/assets/asset-keys.js`

Defines constants for asset keys used throughout the game. These keys are used to reference assets like images and spritesheets.

### `src/battle/ui/battle-menu.js`

Manages the battle menu UI and handles player input during battles. This file contains the logic for displaying the battle menu and processing player actions.

### `src/common/direction.js`

Defines direction constants used for character movement. These constants are used to determine the direction in which the character should move.

### `src/lib/phaser.js`

Exports the Phaser library for use in the game. This file acts as a wrapper to import Phaser into the project.

### `src/scenes/battle-scene.js`

Manages the battle scene, including character movement and battle logic. This file contains the logic for handling player input, updating character positions, and managing animations.

### `src/scenes/preload-scene.js`

Handles the loading of game assets before the game starts. This file contains the logic for preloading images, spritesheets, and other assets needed for the game.

### `src/scenes/scene-keys.js`

Defines constants for scene keys used to manage different scenes in the game. These keys are used to reference and switch between different scenes.

### `src/scenes/main-scene.js`

Manages the main game scene where the character can move around. This file contains the logic for handling player input and updating character positions in the main game scene.

### `src/main.js`

The main entry point of the game. Initializes the Phaser game instance and adds the different scenes. This file sets up the game configuration and starts the preload scene.

## Running the Game

To run the game, use the following command:

```sh
npm run dev