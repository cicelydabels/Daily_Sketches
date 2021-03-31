function setup() {
    createCanvas(1000,1000);
    background(227, 96, 9);
}

function draw() {
    fill(176, 76, 9);
    noStroke();
    ellipseMode(CENTER);
    translate(width/2,height/2);
    translate(p5.Vector.fromAngle(millis() / 1000, 250));
    ellipse(0, 0, 200, 50);

  }

  function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-7","png");
    }
}