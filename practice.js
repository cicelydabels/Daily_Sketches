var spot = {
    x: 50,
    y: 50,
}

function setup() {
    createCanvas(400,400);
    background(255,0,0);
}

function draw() {
    ellipse(spot.x,spot.y,200,200);
}