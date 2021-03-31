function setup() {
    createCanvas(1000,1000);
    background(52, 204, 235);
}

function draw() {
    noStroke();
    fill(235, 52, 131, 10);

    //row 1
    rect(400,200,100,100);
    rect(500,200,100,100);

    //row 2
    rect(300,300,100,100);
    rect(600,300,100,100);

    //row 3
    rect(200,400,100,100);
    rect(700,400,100,100);

    //row 4
    rect(200,500,100,100);
    rect(700,500,100,100);

    //row 5
    rect(300,600,100,100);
    rect(600,600,100,100);

    //row 6
    rect(400,700,100,100);
    rect(500,700,100,100);

    push()
    noStroke();
    fill(138, 166, 0,15);
    ellipse(mouseX,mouseY,250);
    pop();
}

function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-12","png");
    }
}
