function setup() {
    createCanvas(1000, 1000, WEBGL);
    background(255);
}

function draw() {
    background(255);
    rotateY(millis() / 1000);
    rotateX(millis() / 1000);
    torus(200, 75);
}

function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-9","png");
    }
}