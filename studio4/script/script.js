"use strict";

console.log("reading js");

var song,
    loadSound,
    analyzer;

//var play = document.getElementById('play');
//var pause = document.getElementById('pause');

// load audio audioFile

function preload() {
  song = loadSound("https://kaekae13.github.io/des157/studio4/audio/audioFile.mp3");
}

function setup() {
  console.log('playing');
  var canvas = createCanvas(800,300);
  canvas.parent('waveContainer');
  song.loop();
  song.setVolume(0.1);
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
}

//pause and play events
//pause.onclick = function(event) {
  //song.pause();
  //play.className = "show";
  //pause.className = "hide";
//}

//play.onclick = function (event) {
  //song.play();
  //play.className = "hide";
  //pause.className = "show";
//}


// volume events
//increase.onclick = function(event) {
  //song.volume+=0.1;
//}

//decrease.onclick = function(event) {
  //song.volume-=0.1;
//}

function draw() {
  //console.log('audiovisualizer');
  fill('#EFC2CE');
  noStroke();
  var rms = analyzer.getLevel();
  for (var i = 0; i< 800; i++){
    canvas.rect(i, 300, 10, 50+rms*100);
  }
//ellipse(i-50, 300, 50,50);
//rect (i-250,240,10, 50);

 }
//}
