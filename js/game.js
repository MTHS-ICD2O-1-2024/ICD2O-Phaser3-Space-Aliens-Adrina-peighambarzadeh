/* global Phaser */
// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Adrina peighambarzadeh
// Created on: Apr 2025
// This is the Phaser3 game configuration file

// scene import statements
import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"
import MenuScene from "./menuScene.js"

//* Game scene */
const splashScene = new SplashScene()
const titleScene = new TitleScene()
const menuScene = new MenuScene()
/**
* Start Phaser Game.
*/

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,

  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },

  // set background color
  backgroundColor: 0xffffff,

  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
// console.log(game)
// load scenes
// Note: remember any "key" is global and CANNOT be reused
game.scene.add("splashScene", splashScene)
game.scene.add("titleScene", titleScene)
game.scene.add("menuScene", menuScene)

// the start scene
game.scene.start("splashScene")
