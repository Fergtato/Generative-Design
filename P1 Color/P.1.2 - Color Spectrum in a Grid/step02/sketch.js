var stepX;
var stepY;

function setup() {
    createCanvas(800, 400);
    // noStroke();
    colorMode(HSB, width, height, 100);
}

function draw() {
    //set step X and Y to mouse X and Y to make the size of the boxes follow the position of the mouse and add 2 to prevent it from crashing
    stepX = mouseX + 2;
    stepY = mouseY + 2;

    for(var gridY = 0; gridY < height; gridY += stepY) {
        //for every row print rectangles along the X axis as well
        for (var gridX = 0; gridX < width; gridX += stepX) {
            fill(255);
            rect(gridX, gridY, stepX, stepY);
        }
    }
}
