//define the amount of rows and columns for the boxes
var tileCountX = 5;
var tileCountY = 10;

function setup() {
    createCanvas(800, 800);
    colorMode(HSB);
    // noStroke();
}

function draw() {
    //define the width and height of the boxes by dividing the canvas dimensions by the tile counts
    var tileWidth = width / tileCountX;
    var tileHeight = height / tileCountY;

    //for loops to create boxes on both the x and y axis'
    for (var gridY = 0; gridY < tileCountY; gridY++) {
        for (var gridX = 0; gridX < tileCountX; gridX++) {
            //set the x and y position of each box by multiplying the boxes size by the grid position
            var posX = tileWidth * gridX;
            var posY = tileHeight * gridY;
            //display the rectangle using all the calculated variables
            rect(posX, posY, tileWidth, tileHeight);
        }
    }
}
