function setup() {

    createCanvas(1000,1000);
    background(100, 129, 176);

    //middle//
    strokeWeight(15);
    stroke(38, 56, 84);
    line(500,100,500,900);

    //two//
    strokeWeight(14);
    stroke(38, 56, 84);
    line(480,110,480,890);

    strokeWeight(14);
    stroke(38, 56, 84);
    line(520,110,520,890);

    //three//
    strokeWeight(13);
    stroke(38, 56, 84);
    line(460,120,460,880);

    strokeWeight(13);
    stroke(38, 56, 84);
    line(540,120,540,880);
    
    //four//
    strokeWeight(12);
    stroke(38, 56, 84);
    line(440,130,440,870);

    strokeWeight(12);
    stroke(38, 56, 84);
    line(560,130,560,870);

    //five//
    strokeWeight(11);
    stroke(38, 56, 84);
    line(420,140,420,860);

    strokeWeight(11);
    stroke(38, 56, 84);
    line(580,140,580,860);

    //six//
    strokeWeight(10);
    stroke(38, 56, 84);
    line(400,150,400,850);

    strokeWeight(10);
    stroke(38, 56, 84);
    line(600,150,600,850);

    //seven//
    strokeWeight(9);
    stroke(38, 56, 84);
    line(380,160,380,840);

    strokeWeight(9);
    stroke(38, 56, 84);
    line(620,160,620,840);

    //eight//
    strokeWeight(8);
    stroke(38, 56, 84);
    line(360,170,360,830);

    strokeWeight(8);
    stroke(38, 56, 84);
    line(640,170,640,830);

    //nine//
    strokeWeight(7);
    stroke(38, 56, 84);
    line(340,180,340,820);

    strokeWeight(7);
    stroke(38, 56, 84);
    line(660,180,660,820);

    //ten//
    strokeWeight(6);
    stroke(38, 56, 84);
    line(320,190,320,810);

    strokeWeight(6);
    stroke(38, 56, 84);
    line(680,190,680,810);

    //eleven//
    strokeWeight(5);
    stroke(38, 56, 84);
    line(300,200,300,800);

    strokeWeight(5);
    stroke(38, 56, 84);
    line(700,200,700,800);

    //twelve//
    strokeWeight(4);
    stroke(38, 56, 84);
    line(280,210,280,790);

    strokeWeight(4);
    stroke(38, 56, 84);
    line(720,210,720,790);

    //thirteen//
    strokeWeight(3);
    stroke(38, 56, 84);
    line(260,220,260,780);

    strokeWeight(3);
    stroke(38, 56, 84);
    line(740,220,740,780);

    //fourteen//
    strokeWeight(2);
    stroke(38, 56, 84);
    line(240,230,240,770);

    strokeWeight(2);
    stroke(38, 56, 84);
    line(760,230,760,770);

    //fifteen//
    strokeWeight(1);
    stroke(38, 56, 84);
    line(220,240,220,760);

    strokeWeight(1);
    stroke(38, 56, 84);
    line(780,240,780,760);

    //sixteen//
    strokeWeight(0.5);
    stroke(38, 56, 84);
    line(200,250,200,750);

    strokeWeight(0.5);
    stroke(38, 56, 84);
    line(800,250,800,750);

    //seventeen//
    strokeWeight(0.1);
    stroke(38, 56, 84);
    line(180,260,180,740);

    strokeWeight(0.1);
    stroke(38, 56, 84);
    line(820,260,820,740);

    


}

function keyTyped() {
    if (key === 's') {
        saveCanvas("sketch-2","png");
    }
}