let img;

function preload() {
    img = loadImage('assets/jelly.png');
  }

function setup() {
    createCanvas(1000,1000);
    img = loadImage('/assets/jelly.png');
    //imageMode(CENTER);
    //image(img,0,0);
}

function draw() {
    image(img,0,0,0,0);

    //row 1
    push();
    fill(100,150,250,10);
    noStroke();
    rect(400,200,100,100);
    pop();
    push();
    fill(50,100,150,10);
    noStroke();
    rect(500,200,100,100);
    pop();

    //row 2
    push();
    fill(74, 198, 212,10);
    noStroke();
    rect(300,300,100,100);
    pop();
    push();
    fill(224, 38, 218,10);
    noStroke();
    rect(600,300,100,100);
    pop();

    //row 3
    push();
    fill(224, 38, 122,10);
    noStroke();
    rect(200,400,100,100);
    pop();
    push();
    fill(35, 222, 70,10);
    noStroke();
    rect(700,400,100,100);
    pop();

    //row 4
    push();
    fill(10, 56, 242,10);
    noStroke();
    rect(200,500,100,100);
    pop();
    push();
    fill(242, 211, 10,10);
    noStroke();
    rect(700,500,100,100);
    pop();

    //row 5
    push();
    fill(200, 10, 10,10);
    noStroke();
    rect(200,600,100,100);
    pop();
    push();
    fill(10, 245, 155);
    noStroke();
    rect(700,600,100,100);
    pop();
    
    //row 6
    push();
    fill(242, 83, 10),10;
    noStroke();
    rect(300,700,100,100);
    pop();
    push();
    fill(10, 242, 234,10);
    noStroke();
    rect(600,700,100,100);
    pop();

    //row 7
    push();
    fill(107, 10, 242,10);
    noStroke();
    rect(400,800,100,100);
    pop();
    push();
    fill(4, 189, 59,10);
    noStroke();
    rect(500,800,100,100);
    pop();
}

function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-20","png");
    }
}