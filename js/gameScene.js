/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This is the Game Scene

class GameScene extends Phaser.Scene {
  // create an alien
  createAlien() {
    const alienXLocation = Math.floor(Math.random() * 1920) + 1 // will get a number between 1 and 1920;
    let alienXVelocity = Math.floor(Math.random() * 50) + 1 // will get a number between 1 and 50
    alienXVelocity *= Math.round(Math.random()) ? 1 : -1 // will add minus sign in 50% of cases
    const anAlien = this.physics.add.sprite(alienXLocation, -100, 'alien')
    anAlien.body.velocity.y = 200
    anAlien.body.velocity.x = alienXVelocity
    this.alienGroup.add(anAlien)
  }

  constructor() {
    super({ key: 'gameScene' })

    this.ship = null
    this.fireMissile = false
    this.score = 0
    this.scoreText = null
    this.scoreTextStyle = { font: '65px Arial', fill: '#ffffff', align: 'center' }
  }

  init(data) {
    this.cameras.main.setBackgroundColor('#0x5f6e7a')
  }

  preload() {
    console.log('Game Scene')

    // images
    this.load.image('starBackground', 'assets/starBackground.png')
    this.load.image('ship', 'assets/spaceShip.png')
    this.load.image('missile', 'assets/missile.png')
    this.load.image('alien', 'assets/alien.png')

    // sound
    this.load.audio('laser', 'assets/laser1.wav')
    this.load.audio('explosion', 'assets/barrelExploding.wav')
  }

  create(data) {
    this.background = this.add.image(0, 0, 'starBackground').setScale(2.0)
    this.background.setOrigin(0, 0)

    this.scoreText = this.add.text(10, 10, 'Score: ' + this.score.toString(), this.scoreTextStyle)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship')

    // create a group for the missiles
    this.missileGroup = this.physics.add.group()

    // create a group for the aliens
    this.alienGroup = this.physics.add.group()
    this.createAlien()

    // Collisions between missiles and aliens
    this.physics.add.collider(this.missileGroup, this.alienGroup, function (missileCollide, alienCollide) {
      alienCollide.destroy()
      missileCollide.destroy()
      this.sound.play('explosion')
      this.score = this.score + 1
      this.scoreText.setText('Score: ' + this.score.toString())
      this.createAlien()
      this.createAlien()
    }.bind(this))
  }
}
