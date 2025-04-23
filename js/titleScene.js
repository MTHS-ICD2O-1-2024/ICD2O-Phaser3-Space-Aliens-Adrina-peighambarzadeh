/* global Phaser */

// Copyright (c) 2025 Adrina peighambarzadeh All rights reserved
//
// Created by: Adrina peighambarzadeh
// Created on: Apr 2025
// This is the Phaser3 game configuration file

/**
 * This class is the Title Scene.
 */
class TitleScene extends Phaser.Scene {
    /**
     * This method is the constructor.
     */
    constructor() {
      super({ key: 'titleScene' })
    }
  
    /**
     * Called when the scene starts, before preload() and create().
     * @param {object} data - Data passed to scene.
     */
    init(data) {
      this.cameras.main.setBackgroundColor('ffffff')
    }
  
    /**
     * Load assets.
     */
    preload() {
      console.log('Title Scene')
    }
  
    /**
     * Create game objects.
     * @param {object} data - Data passed to scene.
     */
    create(data) {
      // pass
    }
  
    /**
     * Called once per game step while the scene is running.
     * @param {number} time - Current time.
     * @param {number} delta - Time since last frame.
     */
    update(time, delta) {
      // pass
    }
  }
  
  export default TitleScene
  