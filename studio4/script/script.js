"use strict";

console.log("reading js");

var song,
    loadSound,
    fft,
    amp,
    spectrum,
    y,
    w;

function preload() {
  song = loadSound("https://kaekae13.github.io/des157/studio4/audio/audioFile.mp3");
}

function setup() {
  console.log('playing');

  noFill();
  var canvas = createCanvas(750,300);
  canvas.parent('waveContainer');


  song.loop();
  song.setVolume(0.1);

  fft = new p5.FFT(0.9, 64);
  amp = new p5.Amplitude();

  w = width/64;
}






function draw() {

  noStroke();
  fill(255);

  //var level = amp.getLevel();
  var spectrum = fft.analyze();


  for (var i = 0; i< spectrum.length; i+=2) {
    var amp = spectrum[i];
    var y =  map(amp, 0, 250, height, 0);
    rect(i * w , y, w - 2, height * 2 - y);
}

}
