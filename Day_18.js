//r = r + 1;

function setup() {
    createCanvas(1000,1000);
    background(0);
}

function draw() {
    background(0,5);
    fill(255,15);
    translate(width/2,height/2);
    rotate(mouseX);
    textFont("Playfair Display");
    textSize(800);
    textAlign(CENTER,CENTER);
    text("O",0,0);

    //rotate(r + 1);

    //r = r +1;

}

function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-18","png");
    }
}