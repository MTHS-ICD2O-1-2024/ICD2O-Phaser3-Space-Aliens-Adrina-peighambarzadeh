/* global Phaser */

// Copyright (c) 2025 Adrina peighambarzadeh All rights reserved
//
// Created by: Adrina peighambarzadeh
// Created on: Apr 2025
// This is the Phaser3 game configuration file

// scene import statements
import SplashScene from './splashScene.js'
import TitleScene from './titleScene.js'

// Create the new scenes
const splashScene = new SplashScene()
const titleScene = new TitleScene()

/**
 * Start phaser Game.
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)

// Load scenes
// Note: remember any 'key' is global and CANNOT be reused
game.scene.add('splashScene', splashScene)
game.scene.add('titleScene', titleScene)

// Start scene
game.scene.start('splashScene')

