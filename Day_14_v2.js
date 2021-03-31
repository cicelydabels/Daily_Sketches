function setup() {
    createCanvas(1000,1000);
    background(0);
    //ellipseMode(CENTER);
    //ellipseMode(CENTER,CENTER);
    //frameRate(15);
}

function draw() {
    background(0);
    noFill();
    stroke(255);
    strokeWeight(1);
    ellipse(width/2,height/2,600,700);
    ellipse(width/2,height/2,400,465);
}

function doubleClicked() {
    background(255);

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

//function doubleClicked() {
  //  background(0);
  //  noFill();
  //  stroke(255);
   // strokeWeight(1);
   // ellipse(width/2,height/2,600,700);
   // ellipse(width/2,height/2,400,465);
    //return false;
//}

function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-14","png");
    }
}