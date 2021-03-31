var r = 1;
 
function setup() {
  createCanvas(1000, 1000);
  background(0);
  frameRate(15);
}
 
function draw() {
  background(0);
  translate(500,500);

  push();
  rotate(r + 4);
  fill(255);
  textFont("Chango");
  textSize(250);
  text("O",0,0);
  r = r + 1;
  pop();
}

function keyTyped() {
  if (key === 's') {
      saveCanvas("sketch-13","png");
  }
}