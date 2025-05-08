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
  constructor() {
    super({ key: "gameScene" })
    
    this.background = null
    this.ship = null
    this.fireMissile = false
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  preload() {
    console.log("Game Scene")

    // image
    this.load.image('starBackground', './assets/starBackground.png')
    this.load.image('ship', './assets/spaceShip.png')
    this.load.image('missile', './assets/missile.png') 
  }
  
  create(data) {
    this.background = this.add.image(0, 0, 'starBackground').setScale(2.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship')

    // Create missile group
    this.missileGroup = this.physics.add.group()
  }
 update (time, delta) {
    //clled 60 times a second, hopefully!
   
    const keyLeft0bj = this.input.keyboard.addKey('LEFT')
    const keyRight0bj = this.input.keyboard.addKey('RIGHT')
    const keySpace0bj = this.input.keyboard.addKey('SPACE')

    if (keyLeft0bj.isDown === true) {
      this.ship.x -= 15
      if (this.ship.x < 0) {
        this.ship.x = 0
      }
    }

    if (keyRight0bjt.isDown === true) {
      this.ship.x += 15
      if (this.ship.x > 1920) {
        this.ship.x = 1920
      }
    }
if (keySpace0bj.isDown === true) {
    if (this.fireMissile === false) {
      //fire missile
      this.fireMissile = true
      const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y, 'missile')
      this.missileGroup.add(aNewMissile)
      }
    }
   
    if (keySpace0bj.isUp === true) {
      this.fireMissile = false
    }
  }
}

export default GameScene
