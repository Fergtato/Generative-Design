function setup() {
    createCanvas(720, 720);
    //hide the cursor on the canvas
    noCursor();

    //set the colour mode to HSB which stands for Hue, Saturation and Brightness and give it max values for each one.
    colorMode(HSB, 360, 100, 100);
    //set the rect mode to centre so that the rectangle is drawn from the centre
    rectMode(CENTER);
    //turn off stroke so the rectangle has no border
    noStroke();
}

function draw() {
    background(100, 100, 100);

    fill(0);
    //position the rectangle in the centre of the canvas using half of the width and height
    rect(width/2, height/2, 100, 100);
}
