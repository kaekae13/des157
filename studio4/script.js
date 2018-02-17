"use strict";

console.log("reading js");

var song;
var fft;
var amplitude;
var loadSound;

var play = document.getElementById('playbutton');
var pause = document.getElementById('pausebutton');


function preload() {
  song = loadSound('audio.mp3');
}

function setup() {
  var canvas = createCanvas(500,300);
  canvas.parent('waveContainer');

  song.play();
  song.loop();
  song.setVolume (0.1);

  amp = new p5.Amplitude();
}


function draw() {
  var spectrum = amplitude.getLevel();
  noStroke();
  fill('#2C2C2C');
  rect(0, 0, 10, constrain(spectrum * width * 20, 0, height));
  rect(15, 0, 10, constrain(spectrum *width * 20, 0, height));
}
