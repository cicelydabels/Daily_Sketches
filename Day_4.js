var spot = {
    x: 400,
    y: 400,
}

function setup() {
    createCanvas(1000,1000);
    background(84, 38, 76);
}

function draw() {
    fill(84, 38, 76);
    textFont("Playfair Display");
    textSize(800);
    text("O", 150,800);

    spot.x = random(0,1000);
    spot.y = random(0,1000);
    fill(0);
    line(spot.x,spot.y,width/2,height/2);

    spot.x = random(0,1000);
    spot.y = random(0,1000);
    fill(0);
    line(spot.x,spot.y,250,250);

    spot.x = random(0,1000);
    spot.y = random(0,1000);
    fill(0);
    line(spot.x,spot.y,750,750);
}

function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-4","png");
    }
}