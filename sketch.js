function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(165);
  background(50)
}
let press = false;
function draw() {
  
  
  if(press == true) {
    ball();
  }

  water();
  
}

function mousePressed(){
  
  press = true;
}
function mouseReleased(){
  press = false;
}