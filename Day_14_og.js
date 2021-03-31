//var x = width/2 - 100
//var y = height/2 - 100;

function setup() {
    createCanvas(1000,1000);
    background(0);
    ellipseMode(CENTER);
    //ellipseMode(CENTER,CENTER);
    //frameRate(15);
}

function draw() {
    noFill();
    stroke(255);
    strokeWeight(1);
    ellipse(width/2,height/2,600,700);
    ellipse(width/2,height/2,400,465);

}

function mouseClicked() {
    background(255);
    //transform(x,y);

    push();
    fill(0);
    noStroke(0);
    ellipse(width/2,height/2,600,700);
    pop();

    push();
    fill(255);
    noStroke(0);
    ellipse(width/2,height/2,400,465);
    pop();

    return false;
}

function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-14","png");
    }
}