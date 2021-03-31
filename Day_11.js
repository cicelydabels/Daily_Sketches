//var xoffset = 0;
//var yoffset = 10;

//lineX = 0

function setup() {
    createCanvas(1000,1000);
    background(255);
    //frameRate(1);
}

function draw() {
    stroke(0);
    strokeWeight(75);
    noFill();

    line(0,0,1000,0);
    line(0,100,1000,100);
    line(0,200,1000,200);
    line(0,300,1000,300);
    line(0,400,1000,400);
    line(0,500,1000,500);
    line(0,600,1000,600);
    line(0,700,1000,700);
    line(0,800,1000,800);
    line(0,900,1000,900);
    line(0,1000,1000,1000);

    push();
    noStroke();
    fill(255);
    textFont("VT323");
    textSize(1250);
    textAlign(CENTER, CENTER);
    text("O", width/2,height/2);
    pop();
}

function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-11","png");
    }
}