/* global Phaser */

// Copyright (c) 2025 Ain Jeong All rights reserved
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
    super({ key: "splashScene" })
  }
  
  /**
  * Can be defined on your own Scenes.
  * This method is called by the Scene Manager when the scene starts,
  *  before preload() and create().
  * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
  */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /**
  * Can be defined on your own Scenes.
  * Use it to load assets.
  */
  preload() {
    console.log("SplashScene")
  }

  /**
  * Can be defined on your own Scenes.
  * Use it to create your game objects.
  * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().

  */
  create(data) {
    //pass
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scene is running.
   *  @param {number} time - The current time.
   *  @param {number} - The delta time in ms since the last frame.
   */
  update(time, delta) {
    // pass
  }
}

export default SplashScene
