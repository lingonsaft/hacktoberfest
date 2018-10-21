function setup() {
    createCanvas(720, 716);
    background(255);
}

function draw() {
    strokeWeight(19);

    fill(255, 0, 0);
    rect(80, 80, 340, 360); //red rectangle 1
    fill(255, 0, 0);
    rect(670, 530, 340, 360); //red rectangle 2
    fill(255, 255, 0);
    rect(420, -10, 250, 270); //yellow rectangle 1 
    fill(255, 255, 0);
    rect(-10, 530, 90, 270); //yellow rectangle 2
    fill(0, 0, 0);
    rect(80, 440, 180, 180); //black rectangle 1
    fill(0, 0, 0);
    rect(270, 620, 140, 40); //black rectangle 2
    fill(0, 0, 255);
    rect(420, 540, 240, 130); //blue rectangle 1

    line(20, 80, 670, 80); //horizontal 1
    line(20, 260, 80, 260); //horizontal 2
    line(440, 260, 670, 260); //horizontal 2
    line(80, 440, 670, 440); //horizontal 3
    line(20, 530, 720, 530); //horizontal 4
    line(80, 620, 420, 620); //horizontal 5
    line(270, 670, 670, 670); //horizontal 6

    line(80, 80, 80, 690); //vertical 1 
    line(170, 20, 170, 80); //vertical 2
    line(265, 440, 265, 700); //vertical 3 
    line(420, 20, 420, 690); //vertical 4
    line(550, 270, 550, 440); //vertical 5
    line(670, 20, 670, 690); //vertical 6

}