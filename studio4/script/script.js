"use strict";

console.log("reading js");

var song;
var fft;
var amplitude;
var loadSound;
var w;

var play = document.getElementById('playbutton');
var pause = document.getElementById('pausebutton');

function preload() {
  song = loadSound("https://kaekae13github.io/des157/studio4/audio/audioFile.mp3");
}

function setup() {
  var canvas = createCanvas(500,300);
  canvas.parent('waveContainer');

  song.loop();
  song.setVolume (0.1);

  fft = new p5.FFT(0.9, 250);
  w = width/64;
}


function draw() {
  var spectrum = fft.analyze();
  for (var i = 0; i< spectrum.length; i++) {
    var fft = spectrum[i];
    var y = map(amp, 0, 250, height, 0);
    noStroke();
    fill('#2C2C2C')
    rect(i * w, y, w-5, height - y);
  }
  noStroke();
  background(0);
}
