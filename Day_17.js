let s = 300;

function setup() {
    createCanvas(1000,1000);
    background(0);
    ellipseMode(CENTER);
}

function draw() {
    translate(width/2, height/2);
    fill(0);
    noStroke();

    push();
    s = s + 1;
    fill(255);
    ellipse(0,0,s);
    scale(s);
    pop();

    ellipse(0,0,300,500);

}

function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-17","png");
    }
}