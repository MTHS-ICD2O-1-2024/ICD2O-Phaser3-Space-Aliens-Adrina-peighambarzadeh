/* global Phaser */
// Copyright (c) 2025 Adrina peighambarzadeh All rights reserved
//
// Created by: Adrina peighambarzadeh
// Created on: Apr 2025
// This is the Phaser3 game configuration file

/**
 * This class is the Game Scene.
 */
class GameScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor() {
    super({ key: "gameScene" })
    this.background = null
    this.ship = null
    this.missileGroup = null
    this.fireMissile = false
  }

  /**
   * Called when the scene starts.
   * @param {object} data - Optional data passed to the scene.
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /**
   * Load game assets here.
   */
  preload() {
    console.log("Game Scene")
    this.load.image("starBackground", "./assets/starBackground.png")
    this.load.image("ship", "./assets/spaceShip.png")
    this.load.image("missile", "./assets/missile.png") // load missile
  }

  /**
   * Create game objects here.
   * @param {object} data - Optional data passed to the scene.
   */
  create(data) {
    // Add background
    this.background = this.add.image(0, 0, "starBackground").setScale(2.0)
    this.background.setOrigin(0, 0)

    // Add ship
    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship")

    // Create missile group
    this.missileGroup = this.physics.add.group()

    // Input keys
    this.keyLeft = this.input.keyboard.addKey("LEFT")
    this.keyRight = this.input.keyboard.addKey("RIGHT")
    this.keySpace = this.input.keyboard.addKey("SPACE")
  }

  /**
   * Update logic runs 60 times per second.
   * @param {number} time - Current time.
   * @param {number} delta - Time since last frame.
   */
  update(time, delta) {
    // Move left
    if (this.keyLeft.isDown) {
      this.ship.x -= 15
      if (this.ship.x < 0) {
        this.ship.x = 0
      }
    }

    // Move right
    if (this.keyRight.isDown) {
      this.ship.x += 15
      if (this.ship.x > 1920) {
        this.ship.x = 1920
      }
    }

    // Fire missile
    if (this.keySpace.isDown && this.fireMissile === false) {
      this.fireMissile = true
      const missile = this.physics.add.sprite(this.ship.x, this.ship.y, "missile")
      this.missileGroup.add(missile)
    }

    // Reset fire lock when SPACE is released
    if (this.keySpace.isUp) {
      this.fireMissile = false
    }
  }
}

export default GameScene
