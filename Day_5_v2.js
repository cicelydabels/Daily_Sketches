function setup() {
    createCanvas(1000,1000);
    background(255);
}

function draw() {
    fill(255);
    textFont("Playfair Display");
    textSize(800);
    text("O", 150,750);
}

function mouseMoved () {
    line(mouseX,mouseY, 1000, 1000);
}

function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-5","png");
    }
}