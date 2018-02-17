"use strict";

console.log("reading js");

var song;
var fft;
var amplitude;
var loadSound;

var play = document.getElementById('playbutton');
var pause = document.getElementById('pausebutton');


function preload() {
  song = loadSound('audio/audio.mp3');
}

function setup() {
  var canvas = createCanvas(500,300);
  canvas.parent('waveContainer');

  song.play();
  song.loop();
  song.setVolume (0.1);

  fft = new p5.FFT(0, 250);
}


function draw() {
  var spectrum = fft.analyze();
  for (var i = 0; i< spectrum.length; i++) {
    var fft = spectrum[i];
    var y = map(amp, 0, 250, height, 0);
    rect(i, height, i, y);
  }
  noStroke();
  background('#2C2C2C');
//  rect(0, 0, 10, constrain(spectrum * width * 20, 0, height));
  //rect(15, 0, 10, constrain(spectrum *width * 20, 0, height));
}
