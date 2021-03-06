var stepX;
var stepY;

function setup() {
    createCanvas(800, 400);
    noStroke();
    colorMode(HSB, width, height, 100);
}

function draw() {
    stepX = mouseX + 2;
    stepY = mouseY + 2;

    for(var gridY = 0; gridY < height; gridY += stepY) {
        for (var gridX = 0; gridX < width; gridX += stepX) {
            //change the hue of the box by its X position and the saturation by its Y position and minus it from height to flip the colours
            fill(gridX, height - gridY, 100);
            rect(gridX, gridY, stepX, stepY);
        }
    }
}

function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
