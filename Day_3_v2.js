var spot = {
    x: 100,
    y: 50,
}

function setup() {

    createCanvas(1000,1000);
    background(245);

    fill(0);
    noStroke();
    textSize(800);
    textFont("Playfair Display");

}

function draw() {
    ellipse(200,200,200,200);
    //ellipse(spot.x, spot.y, 100, 100);
}

function draw() {
    fill(0,0,255);
    textFont("Playfair Display");
    noStroke();
    textSize(800);
    text("O",150,750);
}

function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-3","png");
    }
}