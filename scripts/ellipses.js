function setup() {
  createCanvas(displayWidth, displayHeight);
}
  
function draw() {
  fill(Math.floor((Math.random() * 255) + 1));
  ellipse(mouseX, mouseY, 80, 80);
}
