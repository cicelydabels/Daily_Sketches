var spot = {
    x: 0,
    y: 0,
}

var col = {
    r: 255,
    g: 0,
    b: 255,
}

function setup() {
    createCanvas(1000,1000);
    background(245,66,114);
    ellipseMode(CENTER);
}

function draw() {
    fill(255);
    noStroke();

    push();
    spot.x = random(0,1000);
    spot.y = random(0,1000);
    col.r = random(100,255,5);
    col.g = random(0);
    col.b = random(100,255,5);
    fill(col.r,col.g,col.b);
    ellipse(spot.x,spot.y,75,75);
    pop();

    
    ellipse(width/2,height/2,600,800);

    push();
    fill(245,66,114);
    noStroke();
    ellipse(width/2,height/2,400,520);
    pop();
}

function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-16","png");
    }
}