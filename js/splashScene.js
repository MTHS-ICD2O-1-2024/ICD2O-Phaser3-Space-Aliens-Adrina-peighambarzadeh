/* global Phaser */

// Copyright (c) 2025 Adrina peighambarzadeh All rights reserved
//
// Created by: Adrina peighambarzadeh
// Created on: Apr 2025
// This is the Phaser3 game configuration file

/**
 * This class is the Splash Scene.
 */
class SplashScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor() {
    super({ key: 'splashScene' })
  }

  /**
   * Called when the scene starts, before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor('ffffff')
  }

  /**
   * Load assets.
   */
  preload() {
    console.log('SplashScene')
  }

  /**
   * Create your game objects.
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
    this.scene.switch('titleScene')
    // pass
  }
}

export default SplashScene
