var spot = {
    x: 400,
    y: 400,
}

var col = {
    r: 255,
    g: 0,
    b: 255,
}

function setup() {
    createCanvas(1000,1000);
    background(201, 0, 134);
}

function draw() {
    noStroke();
    fill(211, 0, 144,10);
    textFont("Chango");
    textSize(800);
    text("O", 50,750);

    spot.x = random(0,1000);
    spot.y = random(0,1000);
    col.r = random(0,255, 10);
    col.g = random(0,0, 10);
    col.b = random(0,100, 10);
    fill(col.r,col.g,col.b);
    ellipse(spot.x,spot.y,25,25);
}

function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-8","png");
    }
}