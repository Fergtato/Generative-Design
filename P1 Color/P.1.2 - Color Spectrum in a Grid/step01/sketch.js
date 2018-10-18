//define variables for how many rectangles there will be on the X and Y coordinates
var stepX;
var stepY;

function setup() {
    createCanvas(800, 400);
    // noStroke();
    colorMode(HSB, width, height, 100);
}

function draw() {
    //hard code the steps to 10 and 10 for now
    stepX = 10;
    stepY = 10;

    //using a for loop draw a line of rectangles on the Y axis, the amount is defined by stepY
    for(var gridY = 0; gridY < height; gridY += stepY) {
        fill(255);
        //set the rectangles position to gridY and its width and height to the step count
        rect(0, gridY, stepX, stepY);
    }
}
