function setup() {
    createCanvas(1000,1000);
    background(255);
}

function draw() {
    fill(0);
    noStroke();
    torus(400,200);

}

function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-9","png");
    }
}