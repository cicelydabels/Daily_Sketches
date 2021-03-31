let r = 3.0;

function setup() {
    createCanvas(1000,1000);
    background(0);
}

function draw() {
    push();
    rotate(r / 10);
    fill(255);
    textFont("Chango");
    textSize(40);
    text("O",500,500);
    r = r + 1 ;
    pop();
}

function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-13","png");
    }
}