var col = {
    r: 0,
    g: 255,
    b: 255,
}

function setup() {
    createCanvas(1000,1000);
    background(245,242,66);
    ellipseMode(CENTER);
}

function draw() {
    noFill();
    stroke(0);
    strokeWeight(5);
    ellipse(width/2,height/2,400,500);
    push();
    strokeWeight(1);
    ellipse(width/2,height/2,275,450);
    pop();
}

function mouseMoved() {
    background(245,242,66,30);
    //noFill();
    //stroke(col.r,col.g,col.b);
    //strokeWeight(2);
    fill(col.r,col.g,col.b);
    noStroke();
    ellipse(mouseX,mouseY,400,500);
    push();
    //strokeWeight(0.5);
    fill(245,242,66);
    noStroke();
    ellipse(mouseX,mouseY,275,450);
    pop();

    col.r = random(0,0);
    col.g = random(50,255,5);
    col.b = random(50,255,5);
}

function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-19","png");
    }
}