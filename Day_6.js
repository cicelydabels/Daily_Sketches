function setup() {
    createCanvas(1000, 1000, WEBGL);
    background(0);
  }

  function draw(_sphere1) {
    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;
    fill(13, 222, 163);
    pointLight(1000, 1000, 1000, locX, locY, 300);
    noStroke();
    torus(150,100);
  }

  function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-6","png");
    }
}


  //function circle() {
    //let str = '200';
    //let diameter = float(str);
    //fill(255,0,0);
    //ellipse(100, 100, diameter, diameter);
  //}