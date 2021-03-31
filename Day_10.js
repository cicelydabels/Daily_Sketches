var xoffset = 10;
var yoffset = 10;

function setup() {
    createCanvas(1000,1000);
    background(0);
}

function draw() {
    stroke(255);
    strokeWeight(2);
    noFill();
    translate(xoffset/2, yoffset/2);
    translate(p5.Vector.fromAngle(millis() / 70, 70));
    ellipseMode(CENTER);
    ellipse(width/2,height/2,500,650);
}

function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-10","png");
    }
}