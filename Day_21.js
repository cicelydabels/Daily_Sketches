var x = 0;
var y = 0;

function setup() {
    createCanvas(1000,1000);
    background(255);
    ellipseMode(CENTER,CENTER);
}


function draw() {
    background(255,30);
    noFill();
    stroke(0);

    for (var x = 0; x <= width; x = x + 100) {
        for (var y = 0; y <= height; y = y + 150) {

        ellipse(x,y,200,300);

        push();
        noFill();
        stroke(0);
        ellipse(x,y,175,200);
        pop();

        x = x + 1;
        y = y + 1;
        }
    }

    push();
    noStroke();
    fill(128, 245, 10,50);
    ellipse(mouseX,mouseY,200,300);
    pop();

    push();
    noStroke();
    fill(245, 10, 210,50);
    ellipse(mouseX,mouseY,175,200);
    pop();
}

function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-21","png");
    }
}