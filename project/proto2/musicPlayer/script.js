"use strict";

console.log("reading js");

var song,
    fft,
    w,
    amp;


var play = document.getElementById('play');
var pause = document.getElementById('pause');

var increase = document.getElementById('increase');
var decrease = document.getElementById('decrease');




// colorPicker

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


var colorChoices= [
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


// visualizer buttons

var bar = document.getElementById('bar');
var wave = document.getElementById('wave');
var radial = document.getElementById('radial');


// load audio

function preload() {
  song = loadSound( "https://kaekae13.github.io/des157/studio4/audio/audioFile.mp3");
  }


function setup() {
  console.log('playing');
  var canvas = createCanvas(1600,360);
  canvas.parent('barContainer');

  
  song.loop();
  song.setVolume(0.1);

  fft = new p5.FFT(0.9, 128);
  fft.setInput(song);

  amp = new p5.Amplitude();

  fill(colorChoices[10]);
  w = width/64;
}



// pause and play events

pause.onclick = function(event) {
  song.pause();
  play.className = "btnShow";
  pause.className = "hide";
}

play.onclick = function (event) {
  song.play();
  play.className = "hide";
  pause.className = "btnShow";
}


// volume events
increase.onclick = function(event) {
  song.amp+=0.2;
}

decrease.onclick = function(event) {
  song.amp-=0.2;
}



// create separate function for sound bars

    // eventlisteners for color buttons
function bars() {
    color1.addEventListener('click', function() {
      fill(colorChoices[0]);
    });

    color2.addEventListener('click', function() {
      fill(colorChoices[1]);
    });

    color3.addEventListener('click', function() {
      fill(colorChoices[2]);
    });

    color4.addEventListener('click', function() {
      fill(colorChoices[3]);
    });

    color5.addEventListener('click', function() {
      fill(colorChoices[4]);
    });

    color6.addEventListener('click', function() {
      fill(colorChoices[5]);
    });

    color7.addEventListener('click', function() {
      fill(colorChoices[6]);
    });

    color8.addEventListener('click', function() {
      fill(colorChoices[7]);
    });

    color9.addEventListener('click', function() {
      fill(colorChoices[8]);
    });

    color10.addEventListener('click', function() {
      fill(colorChoices[9]);
    });

    color11.addEventListener('click', function() {
      fill(colorChoices[10]);
    });

    color12.addEventListener('click', function() {
      fill(colorChoices[11]);
    });

    color13.addEventListener('click', function() {
      fill(colorChoices[12]);
    });

    color14.addEventListener('click', function() {
      fill(colorChoices[13]);
    });



  stroke('white');
  strokeWeight(6);
var spectrum = fft.analyze();
    for (var i = 0; i< spectrum.length; i++) {
        var x = map(i, 0, spectrum.length, 0, width);
        var h = -height + map(spectrum[i], 0, 255, height, 0);
        rect (x + w, height,  width / spectrum.length, h);
      }
  }

function waves() {
  color1.addEventListener('click', function() {
    stroke(colorChoices[0]);
  });

  color2.addEventListener('click', function() {
    stroke(colorChoices[1]);
  });

  color3.addEventListener('click', function() {
    stroke(colorChoices[2]);
  });

  color4.addEventListener('click', function() {
    stroke(colorChoices[3]);
  });

  color5.addEventListener('click', function() {
    stroke(colorChoices[4]);
  });

  color6.addEventListener('click', function() {
    stroke(colorChoices[5]);
  });

  color7.addEventListener('click', function() {
    stroke(colorChoices[6]);
  });

  color8.addEventListener('click', function() {
    stroke(colorChoices[7]);
  });

  color9.addEventListener('click', function() {
    stroke(colorChoices[8]);
  });

  color10.addEventListener('click', function() {
    stroke(colorChoices[9]);
  });

  color11.addEventListener('click', function() {
    stroke(colorChoices[10]);
  });

  color12.addEventListener('click', function() {
    stroke(colorChoices[11]);
  });

  color13.addEventListener('click', function() {
    stroke(colorChoices[12]);
  });

  color14.addEventListener('click', function() {
    stroke(colorChoices[13]);
  });

  var spectrum=fft.analyze();
  beginShape();
  smooth();
  noFill();
  strokeWeight(2);

   for (var i = 0; i<spectrum.length; i++) {
     var x = map(i, 0, spectrum.length, 0, width);
     var h = map(spectrum[i], 0, 255, height-50, 0);
     vertex(i+x, h);
     clear();
   }
   endShape();
}



function draw() {


  waves();

bar.addEventListener('click', function() {
  bars();

})


}









// add event listeners to change color
