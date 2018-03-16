"use strict";

console.log("reading js");

var song,
  fft,
  w,
  amp;

// audio control buttons
var play = document.getElementById('play');
var pause = document.getElementById('pause');
var increase = document.getElementById('increase');
var decrease = document.getElementById('decrease');
var chooseAudio = document.getElementById('audioFile');

var disclaimer = document.getElementById('disclaimer');
var audioFile = document.getElementById('audioFile');

// color colorButtons
var colorButtons = document.getElementsByClassName('colorbtn');

var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var color3 = document.getElementById('color3');
var color4 = document.getElementById('color4');
var color5 = document.getElementById('color5');
var color6 = document.getElementById('color6');
var color7 = document.getElementById('color7');
var color8 = document.getElementById('color8');
var color9 = document.getElementById('color9');
var color10 = document.getElementById('color10');
var color11 = document.getElementById('color11');
var color12 = document.getElementById('color12');
var color13 = document.getElementById('color13');
var color14 = document.getElementById('color14');

var colorChoices = [
  '#FD8BD9',
  '#ffd1ff',
  '#ffafbd',
  '#fcb69f',
  '#fddb92',
  '#f9f586',
  '#92fe9d',
  '#2af598',
  '#00cdac',
  '#00f2fe',
  '#00c6fb',
  '#4facfe',
  '#cd9cf2',
  '#d57eeb'
];

var currentColor;

// visualizer buttons
var bar = document.getElementById('bar');
var wave = document.getElementById('wave');
var radial = document.getElementById('radial');

var barClick = false;
var waveClick = false;
var radialClick = false;

var spectrum;

disclaimer.innerHTML ="* Audio uploading functions to come soon *";
// load audio
function preload() {
  song = loadSound("https://kaekae13.github.io/des157/project/final/musicPlayer/audioFile2.mp3");
}


function setup() {
  console.log('playing');
  var canvas = createCanvas(1600, 400);
  canvas.parent('barContainer');
  song.loop();
  song.setVolume(0.1);
  smooth();
  fft = new p5.FFT(0.9, 128);
  fft.setInput(song);
  amp = new p5.Amplitude();
  w = width / 64;
  barClick = true;
  currentColor = colorChoices[7];
}

function draw() {
  // console.log('draw', currentColor);
  spectrum = fft.analyze();
  background('white');

  if (barClick) {
    showBarClick();
  } else if (waveClick) {
    showWaveClick();
  } else if (radialClick) {
    showRadialClick();
  }
}

// event listeners for play and pause buttons
pause.addEventListener ('click', function() {
  song.pause();
  play.className = "btnShow";
  pause.className = "hide";
});

play.addEventListener('click', function() {
  song.play();
  play.className = "hide";
  pause.className = "btnShow";
});


// event listeners for volume buttons
increase.addEventListener('click', function() {
  song.amp+=0.2;
});

decrease.addEventListener('click', function() {
  song.amp-=0.2;
});


// color selctors
for (let i = 0; i < colorButtons.length; i++) {
  console.log(colorButtons[i]);
  colorButtons[i].addEventListener('click', function() {
    currentColor = colorChoices[i];
  });
}


// set values to audiovisualizer click variables
bar.addEventListener('click', function() {
  barClick = true;
  waveClick = false;
  radialClick = false;
});

wave.addEventListener('click', function() {
  barClick = false;
  waveClick = true;
  radialClick = false;
});


radial.addEventListener('click', function() {
  barClick = false;
  waveClick = false;
  radialClick = true;
});


// audiovisualizer functions

// bar function
function showBarClick() {
  fill(currentColor);
  noStroke();
  for (var i = 0; i < spectrum.length; i++) {
    var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x + w, height, width / spectrum.length - 3, h);
  }
}

// waveform function
function showWaveClick() {
  noFill();
  stroke(currentColor);
  beginShape();
  strokeWeight(5);
  for (var i = 0; i < spectrum.length; i++) {
    var x = map(i, 0, spectrum.length, 0, width);
    var h = map(spectrum[i], 0, 255, height - 50, 0);
    vertex(i + x, h);
    clear();
  }
  endShape();
}

// radial function
function showRadialClick() {
  noFill();
  stroke(currentColor);
  translate(width / 2.5, height / 2);
  strokeWeight(1.25);
  for (var i = 0; i < spectrum.length; i++) {
    ellipse(0, 0, spectrum[i] * 1.5, spectrum[i] * 1.5);
  }
}
