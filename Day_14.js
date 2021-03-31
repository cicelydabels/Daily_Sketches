
let value = 0;

function setup() {
    createCanvas(1000,1000);
    background(0);
    ellipseMode(CENTER);
}

function draw() {
    background(0);
    
    fill(value);
    stroke(255);
    strokeWeight(1);
    ellipse(mouseX,mouseY,600,700);

    push();
    fill(0);
    stroke(255);
    strokeWeight(1);
    ellipse(mouseX,mouseY,400,465);
    pop();

}

function mousePressed() {
    if (value === 0) {
        value = 255;
    }

    else { 
        value = 0;
    }
}

function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-14","png");
    }
}