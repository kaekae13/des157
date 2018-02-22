"use strict";

console.log("reading js");

var song,
    fft,
    w;


//var play = document.getElementById('play');
//var pause = document.getElementById('pause');

// load audio audioFile

function preload() {
  song = loadSound( "https://kaekae13.github.io/des157/studio4/audio/audioFile.mp3");
  }

function setup() {
  console.log('playing');
  var canvas = createCanvas(700,300);
  canvas.parent('waveContainer');

  song.loop();
  song.setVolume(0.1);

  fft = new p5.FFT(0.9, 64);
  fft.setInput(song);

  w = width/64;
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

// Create audiovisualizer with bars that react to amplitude of song
function draw() {
  //console.log('audiovisualizer');

  var spectrum = fft.analyze();
  fill('#2B2C2C');
  stroke(255);
  strokeWeight(5);
  for (var i = 0; i< spectrum.length; i++) {
      var x = map(i, 0, spectrum.length, 0, width);
      fill(i,20,100);
      var h = -height + map(spectrum[i], 0, 255, height, 0);
      rect (x + w, height, width / spectrum.length, h);
  }
}
//}
