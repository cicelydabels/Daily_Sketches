var x = 0;
var y = 0;

function setup() {
    createCanvas(1000,1000);
    background(72,66,245);
    ellipseMode(CENTER);
}

function draw() {
    fill(185,245,66)
    noStroke();

    for (var x = 0; x <= 800; x = x + 75) {
        for (var y = 0; y <= 800; y = y + 75) {

        ellipse(x+100,y+100,25,30);

        push();
        fill(72,66,245);
        noStroke();
        ellipse(x+100,y+100,15,20);
        pop();

        x = x + 1;
        y = y + 1;
        }
    }
}

function mouseMoved() {
    fill(185,245,66,5);
    noStroke();
    ellipse(mouseX,mouseY,500,500);
}

function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-15","png");
    }
}