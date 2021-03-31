var x = 0;
var y = 0;

function setup() {
    createCanvas(1000,1000);
    background(72,66,245);
}

function draw() {
    fill(185,245,66);
    noStroke();

    //while (x <= width) {
        //ellipse(x,0,50,50);
        //x = x + 50;
    //}

    //while (y <= width) {
        //ellipse(0,y,50,50);
        //y = y + 50;
    //}

    for (var x = 0; x <= width; x = x + 50) {
        //for (var y = 0; y <= height; y = y + 50) {
        ellipse(x,100,25,25);
        }
    x = x + 1;    
    }

    function keyTyped() {
        if (key === 's') {
            saveCanvas("sketch-15","png");
        }
    }