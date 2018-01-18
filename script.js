
console.log("this is script.js comment");

var rot = 0;

function setup () {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
  smooth();
}

function rotating_rect(x, y, rect_size, r) {
  translate (x+43, y-5);
  rotate(r);
  line(0, 0, rect_size, rect_size);
}

function draw() {
  background('#F1604E');
  stroke('#FDFFFF');
  strokeWeight(5);
  strokeCap(SQUARE);

  if (mouseIsPressed) {
    stroke('#4B5CAF');
  }

  var x=0;
  while (x <16) {
  var y=0;
  while (y<5) {
    rotating_rect (50 + x * 40, 50 + y * 40, 20, rot + x + y);
    y = y +1;
  }
    x = x + 1;
    rot = rot + 0.01;
  }
}
