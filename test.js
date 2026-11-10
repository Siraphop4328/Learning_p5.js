function ball(){
    stroke(100);
    fill(255, 0, 0, 255);
    circle(mouseX, mouseY, 100);
}

function water(){
    rectMode("center");
    fill(0, 0, 200, 150);
    noStroke();
    rect(1000, 1100, 3000, 800);
}