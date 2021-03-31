function setup() {

    createCanvas(1000,1000);
    background(128, 118, 117);

//top//
strokeWeight(3);
stroke(0)
fill(255);
ellipse(475,320,50,50);

//second row//
strokeWeight(3);
stroke(0)
fill(255);
ellipse(425,335,50,50);

strokeWeight(3);
stroke(0)
fill(255);
ellipse(525,335,50,50);

//third row//
strokeWeight(3);
stroke(0)
fill(255);
ellipse(380,370,60,60);

strokeWeight(3);
stroke(0)
fill(255);
ellipse(570,370,60,60);

//fourth row//
strokeWeight(3);
stroke(0)
fill(255);
ellipse(360,430,60,60);

strokeWeight(3);
stroke(0)
fill(255);
ellipse(590,430,60,60);

//middle row//
strokeWeight(3);
stroke(0)
fill(255);
ellipse(355,500,80,80);

strokeWeight(3);
stroke(0)
fill(255);
ellipse(595,500,80,80);

//sixth row//
strokeWeight(3);
stroke(0)
fill(255);
ellipse(360,570,60,60);

strokeWeight(3);
stroke(0)
fill(255);
ellipse(590,570,60,60);

//seventh row//
strokeWeight(3);
stroke(0)
fill(255);
ellipse(380,630,60,60);

strokeWeight(3);
stroke(0)
fill(255);
ellipse(570,630,60,60);

//eight row//
strokeWeight(3);
stroke(0)
fill(255);
ellipse(425,665,50,50);

strokeWeight(3);
stroke(0)
fill(255);
ellipse(525,665,50,50);

//bottom//
strokeWeight(3);
stroke(0)
fill(255);
ellipse(475,680,50,50);


}

function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-1","png");
    }
}