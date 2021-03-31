let angle = 0;
 
function setup() {
  createCanvas(1000, 1000);
  background(0);
  angleMode(DEGREES);
}
 
function draw() {
  translate(100, 100);

  push();
  rotate(angle);
  fill(255);
  textFont("Chango");
  textSize(40);
  text("O",500,500);
  angle = angle +1;
  pop();
}

function keyTyped() {
  if (key === 's') {
      saveCanvas("sketch-13","png");
  }
}