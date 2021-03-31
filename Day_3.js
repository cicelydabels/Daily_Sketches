var spot = {
    x: 400,
    y: 400,
}

var col = {
    r: 0,
    g: 255,
    b: 0,
}

function setup() {
    createCanvas(1000,1000);
    background(255);
}

function draw() {
    fill(0,0,255);
    textFont("Playfair Display");
    textSize(800);
    textAlign(CENTER,CENTER);
    text("O", width/2,height/2);

    spot.x = random(0,1000);
    spot.y = random(0,1000);
    col.r = random(0,255);
    col.g = random(0,255);
    col.b = random(0,255);
    fill(col.r,col.g,col.b);
    noStroke();
    ellipse(spot.x,spot.y,100,100);
}

function mousePressed() {
        saveCanvas("sketch-03", "png");
    }